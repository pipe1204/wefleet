import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { CgTrack } from 'react-icons/cg'
import { FaMotorcycle, FaShuttleVan } from 'react-icons/fa'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../../Components/form/TextField/index'
import Button from '../../Components/form/SubmitButton/index'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Step from '../../Components/Step'
import SixthSection from '../Services/SixthSection'
import getConsignmentDetails from '../../dataSources/useWeFleetAPI'
import { TailSpin } from 'react-loader-spinner'
import { useHistory, useLocation } from 'react-router-dom'

//Components
import InWarehouse from '../../Components/TrackingStatus/InWarehouse'
import OnForwarder from '../../Components/TrackingStatus/OnForwarder'
import InTransit from '../../Components/TrackingStatus/InTransit'
import OnItsWay from '../../Components/TrackingStatus/OnItsWay'
import Delivered from '../../Components/TrackingStatus/Delivered'
import MissedDelivery from '../../Components/TrackingStatus/MissedDelivery'
import NewConsignment from '../../Components/TrackingStatus/NewConsignment'

const FORM_VALIDATION = Yup.object().shape({
  tracking: Yup.string().required('Required'),
})

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    backgroundColor: 'white',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    '@media screen and (min-width: 320px) and (max-width: 1080px)': {
      width: '100%',
    },
  },
})

const mapConsignmentStatus = (status, customerName, orderNumber) => {
  switch (status) {
    case 'AWAITING_PICKUP':
      return 'AWAITING_PICKUP'
    case 'AWAITING_POINT_TO_POINT_PICKUP':
      return 'AWAITING_POINT_TO_POINT_PICKUP'
    case 'AWAITING_SALE_ORDER_PACKING':
      return 'AWAITING_SALE_ORDER_PACKING'
    case 'AWAITING_DROPOFF':
      return `Your ${customerName}'s order ${orderNumber} is being processed 📦`
    case 'IN_TRANSIT_PICKUP_WAREHOUSE':
      return 'IN_TRANSIT_PICKUP_WAREHOUSE'
    case 'MANIFESTED':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} has been{' '}
          <span1>Received in our system</span1> and it will be onboard for delivery soon
          🏭
          <NewConsignment />
        </StatusDiv>
      )
    case 'NEW_CONSIGNMENT':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} has been{' '}
          <span1>Received in our system</span1> and it will be onboard for delivery soon
          🏭
          <NewConsignment />
        </StatusDiv>
      )
    case 'IN_WAREHOUSE':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} has been{' '}
          <span1>Received in our Warehouse</span1> and it will be onboard for delivery
          soon 🏭
          <InWarehouse />
        </StatusDiv>
      )
    case 'WITH_ON_FORWARDER':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} is on an{' '}
          <span1>Interstate Transit</span1> and it will arrive into our facilities soon 🛫
          <OnForwarder />
        </StatusDiv>
      )
    case 'WITH_FORWARDER':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} is on an{' '}
          <span1>Interstate Transit</span1> and it will arrive into our facilities soon 🛫
          <OnForwarder />
        </StatusDiv>
      )
    case 'IN_TRANSIT_WAREHOUSE_DELIVERY':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} is <span1>Onboard for Delivery</span1>{' '}
          🚚
          <InTransit />
        </StatusDiv>
      )
    case 'IN_TRANSIT':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} is <span1>Onboard for Delivery</span1>{' '}
          🚚
          <InTransit />
        </StatusDiv>
      )
    case 'ON_ITS_WAY':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} is <span1>On it's Way</span1> to you
          right now 🏃🏻💨💨
          <OnItsWay />
        </StatusDiv>
      )
    case 'MISSED_DELIVERY':
      return (
        <StatusDiv>
          🥺 <span1>We've missed you!</span1> We tried to deliver your {customerName}'s
          order {orderNumber} but nobody was home. We will attempt again soon
          <MissedDelivery />
        </StatusDiv>
      )
    case 'PARTIAL_DELIVERY':
      return (
        <div>
          We've delivered part of your {customerName}'s order {orderNumber}. The remaining
          delivery will be completed soon
          <Delivered />
        </div>
      )
    case 'IN_TRANSIT_PICK_DELIVERY':
      return 'IN_TRANSIT_PICK_DELIVERY'
    case 'COLLECTED':
      return 'COLLECTED'
    case 'DELIVERED':
      return (
        <StatusDiv>
          Your {customerName}'s order {orderNumber} has been <span1>Delivered</span1> 🎉
          <Delivered />
        </StatusDiv>
      )
    case 'POINT_TO_POINT_DELIVERED':
      return 'POINT_TO_POINT_DELIVERED'
    case 'CANCELLED':
      return 'CANCELLED'
    default:
      return (
        <StatusDiv>
          We don't have record of your consignment, please contact support at
          <span1> deliveries@wefleet.co.</span1>
        </StatusDiv>
      )
  }
}

const Tracking = () => {
  const history = useHistory()
  const { search, pathname } = useLocation()
  const [consignment, setConsignment] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const initialFormValues = useMemo(() => {
    if (search) {
      const params = new URLSearchParams(search)
      return {
        tracking: params.get('q') || '',
      }
    }
    return {
      tracking: '',
    }
  }, [search])

  const searchConsignment = async values => {
    try {
      setLoading(true)
      setError(null)
      const validFormat = values.tracking.toLowerCase().startsWith('wf')
      if (validFormat) {
        const status = await getConsignmentDetails(values.tracking)
        if (status.status === 200 && status.data) {
          setConsignment(status.data)
        } else {
          setError(
            'We do not have record of your consignment, please contact support at deliveries@wefleet.co',
          )
        }
      } else {
        setError('Invalid format of consignment number')
      }
      const params = new URLSearchParams({ q: values.tracking })
      history.replace({ pathname, search: params.toString() })
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError(
        'We do not have record of your consignment, please contact support at deliveries@wefleet.co',
      )
    }
  }

  const classes = useStyles()

  return (
    <Container>
      <SubcontainerHeader>
        <TrackingIcon>
          <CgTrack />
        </TrackingIcon>
        <MainHeader>Track my parcel</MainHeader>
        <ParragraphHeader>
          Enter your WeFleet alpha-numeric reference number to get an update on your
          delivery 🚚
        </ParragraphHeader>
      </SubcontainerHeader>
      <SubcontainerTrackingInput>
        <TrackingHeader>Your WeFleet reference number</TrackingHeader>
        <Formik
          enableReinitialize
          initialValues={{
            ...initialFormValues,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={searchConsignment}
        >
          <Form style={{ width: '100%' }}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="tracking"
                label="eg. WF0000001220"
                className={classes.root}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button>TRACK</Button>
            </Grid>
          </Form>
        </Formik>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '60px',
            textAlign: 'center',
            fontSize: '1.2rem',
          }}
        >
          {loading ? (
            <TailSpin heigth="100" width="100" color="grey" ariaLabel="loading" />
          ) : error ? (
            error
          ) : (
            consignment &&
            mapConsignmentStatus(
              consignment?.status,
              consignment?.customer?.name,
              consignment?.references?.customer,
            )
          )}
        </div>
      </SubcontainerTrackingInput>
      <SubcontainerInfo>
        <InfoHeader>Ultra-fast fulfillment for fast growing stores</InfoHeader>
        <InfoParragraph>
          WeFleet lets you easily fulfill your marketplace and shopping cart orders.
          Delight your customers with fast, reliable, predictable, and affordable order
          fulfillment.
        </InfoParragraph>
      </SubcontainerInfo>
      <BenefitsContainer>
        <Step
          icon={<FaMotorcycle />}
          title="WeFleet Scooter"
          info="2 day delivery or next-day delivery for small items to your doorsteps"
        />
        <Step
          icon={<FaShuttleVan />}
          title="WeFleet Van"
          info="Van and small truck hailing service for transporting larger and bulky items"
        />
        <Step
          icon={<CgTrack />}
          title="WeFleet tracking"
          info="Let your clients know the exact delivery time with email or text messages."
        />
      </BenefitsContainer>
      <SixthSection />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
  }
`

const SubcontainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const TrackingIcon = styled.div`
  margin-bottom: 10px;
  svg {
    font-size: 4rem;
    color: #769fcd;
  }
`

const MainHeader = styled.h1`
  color: #112d4e;
  margin-bottom: 20px;
  font-size: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
  }
`

const ParragraphHeader = styled.p`
  width: 70%;
  text-align: center;
  font-size: 1.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`

const SubcontainerTrackingInput = styled.div`
  width: 30%;
  margin-bottom: 100px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`

const TrackingHeader = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #769fcd;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`

const SubcontainerInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    margin-bottom: 40px;
  }
`

const InfoHeader = styled.h2`
  color: #112d4e;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
`

const InfoParragraph = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
`

const BenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`

const StatusDiv = styled.div`
  span1 {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default Tracking
