import React from 'react'
import styled from 'styled-components'
import Hero from '../../Images/Hero.png'
import Tint from '../../Images/Tint.png'
import Paire from '../../Images/Paire.png'
import Jason from '../../Images/Jason.png'

const FourthSection = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroesText>
          We are with you every step <br></br>of the way.
        </HeroesText>
        <HeroesSubtext>
          Our team serves as an extension of yours. If you have a problem we're here to
          help you solve it -- from sampling to logistics coordination. We enable your
          supply chain from end-to-end.
        </HeroesSubtext>
      </HeroContainer>
      <ContainerOne>
        <Subcontainer>
          <MainHeading>
            <span>
              We are there, so you don’t have to be. In the age of pandemic-related travel
              restrictions, having a local team you can count on can make all the
              difference.
            </span>
          </MainHeading>
          <MainImage src={Hero} />
        </Subcontainer>
      </ContainerOne>
      <ContainerTwo>
        <OurCustomersHeading>What our customers say</OurCustomersHeading>
        <ReviewMainContainer>
          <ReviewContainer>
            <TopReview>
              <CustomerReview>"</CustomerReview>
            </TopReview>
            <Review>
              "It has been an incredible experience. Our customers get their deliveries
              super fast and at lower prices. They also receive their products in perfect
              condition which is super important to us."
            </Review>
            <BottomReview>
              <Image src={Jason} />
            </BottomReview>
          </ReviewContainer>
          <ReviewContainer>
            <TopReview>
              <CustomerReview>"</CustomerReview>
            </TopReview>
            <Review>
              "WeFleet is revolutionizing the logistics market in Australia. We have been
              working with them for a while now and our customers are super happy with the
              service. Highly recommended for small and medium stores."
            </Review>
            <BottomReview>
              <Image src={Tint} />
            </BottomReview>
          </ReviewContainer>
          <ReviewContainer>
            <TopReview>
              <CustomerReview>"</CustomerReview>
            </TopReview>
            <Review>
              "We have integrated our online shop with WeFleet, improving our fulfillment
              times and also our customer service. The service is excellent, great prices
              and amazing speed with the fulfillment."
            </Review>
            <BottomReview>
              <Image src={Paire} />
            </BottomReview>
          </ReviewContainer>
        </ReviewMainContainer>
      </ContainerTwo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 60px;
    flex-direction: column;
  }
`

const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: #101010;
  padding: 0px 50px;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
  margin-bottom: 80px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0px 10px;
  }
`

const HeroContainer = styled.div`
  width: 80%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 80px;
    width: 90%;
    flex-direction: column;
    padding: 0px;
  }
`

const Subcontainer = styled.div`
  width: 80%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 80px;
  background-color: #101010;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 80px;
    width: 90%;
    flex-direction: column;
  }
`

const MainHeading = styled.h1`
font-size: 2.5rem;
text-align: center;
color: #112D4E;
span {
    background: linear-gradient(to right, #30CFD0 0%, #8247F5 100%);
    -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 1.6rem;
      margin-top: 20px;
      line-height: 1;
}
`

const MainImage = styled.img`
  width: 50%;
  height: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
`

const OurCustomersHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

const ReviewMainContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    flex-direction: column;
    align-items: center;
  }
`

const ReviewContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 4px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
  }
`

const TopReview = styled.div`
  text-align: left;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: left;
    width: 100%;
  }
`

const HeroesText = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #112d4e;
  margin-top: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
  }
`

const HeroesSubtext = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 0px 120px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    margin: 20px 0px;
    padding: 0px;
    line-height: 1.5;
  }
`

const CustomerReview = styled.h2`
  font-size: 5rem;
  color: #112d4e;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 3rem;
    margin-bottom: 10px;
    text-align: center;
  }
`

const Review = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    margin: 30px 0px;
  }
`

const BottomReview = styled.div`
  text-align: right;
  width: 100%;
`

const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  margin: 10px 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 50%;
    height: 50%;
    margin-bottom: 40px;
  }
`

export default FourthSection
