import React from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'

const SecondSection = () => {
  return (
    <Container>
      <Heading>Why join WeFleet?</Heading>
      <BenefitsBox>
        <Benefit>
          <AiFillCheckCircle />
          <BenefitInfo>
            <InfoHeading>Earnings predictability.</InfoHeading>
            <InfoDescription>
              Know before you go: WeFleet gives you transparency into your earnings before
              you book your route.
            </InfoDescription>
          </BenefitInfo>
        </Benefit>
        <Benefit>
          <AiFillCheckCircle />
          <BenefitInfo>
            <InfoHeading>Route location transparency.</InfoHeading>
            <InfoDescription>
              Book routes that geographically fit your preferred driving areas.
            </InfoDescription>
          </BenefitInfo>
        </Benefit>
        <Benefit>
          <AiFillCheckCircle />
          <BenefitInfo>
            <InfoHeading>Schedule flexibility.</InfoHeading>
            <InfoDescription>
              Book routes that start and end at times that fit your schedule.
            </InfoDescription>
          </BenefitInfo>
        </Benefit>
        <Benefit>
          <AiFillCheckCircle />
          <BenefitInfo>
            <InfoHeading>Low stress.</InfoHeading>
            <InfoDescription>
              No passengers in the back seat, no waiting at multiple restaurants – simply
              pick up parcels and deliver them.
            </InfoDescription>
          </BenefitInfo>
        </Benefit>
      </BenefitsBox>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 60px;
    width: 90%;
  }
`

const Heading = styled.h3`
  font-size: 2.5rem;
  color: #112d4e;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    text-align: center;
  }
`

const BenefitsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 100px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0px 0px;
  }
`

const Benefit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  svg {
    font-size: 2rem;
    color: #769fcd;
    padding-right: 30px;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      padding-right: 0px;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const BenefitInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoHeading = styled.h4`
  font-size: 1.4rem;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: center;
  }
`

const InfoDescription = styled.p`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: center;
  }
`

export default SecondSection
