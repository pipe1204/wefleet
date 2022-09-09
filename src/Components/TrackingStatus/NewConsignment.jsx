import React from 'react'
import styled from 'styled-components'
import { AiOutlineFileDone } from 'react-icons/ai'
import { TbBuildingWarehouse, TbTruckDelivery } from 'react-icons/tb'
import { FaRoute } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'

const NewConsignment = () => {
  return (
    <Container>
      <ContainerStatuses>
        <OrderReceivedDiv>
          <AiOutlineFileDone />
          <span>Order in our System</span>
        </OrderReceivedDiv>
        <Line2></Line2>
        <InWarehouseDiv>
          <TbBuildingWarehouse />
          <span>Received in our Warehouse</span>
        </InWarehouseDiv>
        <Line2></Line2>
        <InTransitDiv>
          <TbTruckDelivery />
          <span>Onboard for Delivery</span>
        </InTransitDiv>
        <Line2></Line2>
        <OnItsWayDiv>
          <FaRoute />
          <span>On it's Way</span>
        </OnItsWayDiv>
        <Line2></Line2>
        <DeliveredDiv>
          <GiPartyPopper />
          <span>Delivered</span>
        </DeliveredDiv>
      </ContainerStatuses>
      <ContactTracking>
        <ContactInfo>
          Have a question? We are here to help!<br></br>
          <br></br>Email us at <span1>deliveries@wefleet.co</span1> and one of our
          Customer specialist will be in touch shortly.
        </ContactInfo>
      </ContactTracking>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerStatuses = styled.div`
  display: flex;
  justify-content: space-around;
  align-item: center;
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 60px;
    flex-direction: column;
    margin-top: 20px;
  }
`

const OrderReceivedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  border-bottom: solid 3px #9900ff;
  padding-bottom: 20px;
  span {
    color: #77ca20;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #769fcd;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    border: none;
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const InWarehouseDiv = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  span {
    color: #a4a7ac;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #a4a7ac;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const InTransitDiv = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  span {
    color: #a4a7ac;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #a4a7ac;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const OnItsWayDiv = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  span {
    color: #a4a7ac;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #a4a7ac;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const DeliveredDiv = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  span {
    color: #a4a7ac;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #a4a7ac;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const Line = styled.div`
  border-left: 6px dotted #77ca20;
  height: 100px;
  left: 50%;
`

const Line1 = styled.div`
  border-left: 6px dotted #77ca20;
  height: 100px;
  left: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    position: relative;
    width: 10%;
  }
`

const Line2 = styled.div`
  border-left: 6px dotted #a4a7ac;
  height: 100px;
  left: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    position: relative;
    width: 10%;
  }
`

const ContactTracking = styled.div`
  width: 60%;
  margin-top: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 10px;
  }
`

const ContactInfo = styled.p`
  span1 {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.2rem;
  }
`

export default NewConsignment
