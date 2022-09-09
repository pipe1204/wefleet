import React from 'react'
import styled from 'styled-components'
import Fast from '../../Images/Fast.png'
import Badget from '../../Images/Badget.png'
import Integration from '../../Images/Integration.png'

const ThirdSection = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>The WeFleet advantage</Title>
        <Info>
          With the arrival of big players like Amazon, people are expecting their
          deliveries the next day and that means fast. WeFleet provides the technology and
          the operations for your business to be able to compete fairly offering fast
          deliveries.
        </Info>
      </InfoContainer>
      <BenefitsContainer>
        <StepBlack>
          <Image src={Fast} />
          <TitleBenefit>Ultra-Fast Deliveries</TitleBenefit>
          <TextBenefit>
            Delight your buyers with fast, reliable, predictable, and affordable order
            fulfillment.
          </TextBenefit>
        </StepBlack>
        <StepOrange>
          <Image src={Integration} />
          <TitleBenefit>Hassle-Free Experience</TitleBenefit>
          <TextBenefit>
            Create an account in under 2 minutes, connect any sales channel, and enjoy
            complete automation.
          </TextBenefit>
        </StepOrange>
        <StepBlack>
          <Image src={Badget} />
          <TitleBenefit>Shipping Storefront Badge</TitleBenefit>
          <TextBenefit>
            Get your items in front of more buyers and boost sales with fast shipping
            badges.
          </TextBenefit>
        </StepBlack>
      </BenefitsContainer>
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
    margin: 20px;
    width: 90%;
  }
`

const InfoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #112d4e;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
  }
`

const Info = styled.p`
  text-align: center;
  color: #112d4e;
  font-size: 1.2rem;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
  }
`

const BenefitsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 30px 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`

const StepBlack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 20%;
  padding: 10px 50px;
  border-radius: 10px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 60%;
    flex-direction: column;
    align-items: center;
  }
`

const StepOrange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff7f51;
  width: 20%;
  padding: 10px 50px;
  border-radius: 10px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 60%;
    flex-direction: column;
    align-items: center;
  }
`

const TitleBenefit = styled.p`
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    max-width: 50%;
    max-height: 50%;
  }
`

const TextBenefit = styled.p`
  color: white;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: center;
`

export default ThirdSection
