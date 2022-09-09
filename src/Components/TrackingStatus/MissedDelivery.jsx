import React from 'react'
import styled from 'styled-components'
import { AiOutlineFileDone } from 'react-icons/ai'
import { TbBuildingWarehouse, TbTruckDelivery } from 'react-icons/tb'
import { FaRoute } from 'react-icons/fa'
import { MdOutlineWrongLocation } from 'react-icons/md'

const MissedDelivery = () => {
  return (
    <Container>
      <ContainerStatuses>
        <OrderReceivedDiv>
          <AiOutlineFileDone />
          <span>Order in our system</span>
        </OrderReceivedDiv>
        <Line1></Line1>
        <InWarehouseDiv>
          <TbBuildingWarehouse />
          <span>Received in our warehouse</span>
        </InWarehouseDiv>
        <Line1></Line1>
        <InTransitDiv>
          <TbTruckDelivery />
          <span>Onboard for delivery</span>
        </InTransitDiv>
        <Line1></Line1>
        <OnItsWayDiv>
          <FaRoute />
          <span>On it's way</span>
        </OnItsWayDiv>
        <Line1></Line1>
        <MissedDeliveryDiv>
          <MdOutlineWrongLocation />
          <span>We missed you</span>
        </MissedDeliveryDiv>
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
  color: #77ca20;
  font-size: 1.5rem;
  margin: 0px 50px;
  padding-bottom: 20px;
  span {
    color: #77ca20;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #77ca20;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const InWarehouseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #77ca20;
  font-size: 1.5rem;
  margin: 0px 50px;
  padding-bottom: 20px;
  span {
    color: #77ca20;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #77ca20;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #77ca20;
  font-size: 1.5rem;
  margin: 0px 50px;
  padding-bottom: 20px;
  span {
    color: #77ca20;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #77ca20;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #77ca20;
  font-size: 1.5rem;
  margin: 0px 50px;
  padding-bottom: 20px;
  span {
    color: #77ca20;
    font-size: 1rem;
  }
  svg {
    font-size: 3rem;
    color: #77ca20;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-top: 20px;
    span {
      font-size: 1.2rem;
    }
  }
`

const MissedDeliveryDiv = styled.div`
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

export default MissedDelivery
