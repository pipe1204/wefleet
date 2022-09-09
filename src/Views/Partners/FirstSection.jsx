import React from 'react'
import styled from 'styled-components'
import DeliveryBoy from '../../Images/delivery-boy.png'
import { Link } from 'react-router-dom'

function FirstSection() {
  return (
    <Container>
      <Container1>
        <SubContainer>
          <MainContainer>
            <MainHeading>
              Deliver with WeFleet. <br></br>Be part of a <span>dream team.</span>
            </MainHeading>
            <Link to="/driver-register">
              <ContactButton>Join the team</ContactButton>
            </Link>
          </MainContainer>
          <MainImage>
            <DeliveryImage src={DeliveryBoy} />
          </MainImage>
        </SubContainer>
      </Container1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F7FCFB"
          fill-opacity="1"
          d="M0,320L360,160L720,128L1080,160L1440,64L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-top: -10px;
`

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 50px;
  background-color: black;
  margin-top: -10px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 100px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 60px;
    width: 100%;
    flex-direction: column;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainHeading = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    padding: 10px;
    width: 80%;
  }
`

const ContactButton = styled.button`
  padding: 15px 15px;
  border: none;
  background-color: #769fcd;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s all ease-in;
  text-align: center;
  &:hover {
    background-color: #3f72af;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    margin-bottom: 50px;
  }
`

const MainImage = styled.div`
  text-align: center;
`

const DeliveryImage = styled.img`
  width: 55%;
  height: 55%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    width: 70%;
    height: 70%;
  }
`

export default FirstSection
