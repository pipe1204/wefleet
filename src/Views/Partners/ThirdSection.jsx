import React from 'react'
import styled from 'styled-components'
import DriverStep from '../../Components/DriverStep'
import { Link } from 'react-router-dom'

const ThirdSection = () => {
  return (
    <Container>
      <Heading>Delivering with WeFleet is easy!</Heading>
      <ListBenefits>
        <DriverStep
          number="1"
          title="Book your route."
          description="WeFleet offers delivery routes that typically range from 2 to 8 hours."
        />
        <DriverStep
          number="2"
          title="Pick up from our centres."
          description="On delivery day, log into the WeFLeet app and drive to your most convenient centre."
        />
        <DriverStep
          number="3"
          title="The WeFleet app."
          description="The easy-to-use mobile app makes it simple to delight customers."
        />
      </ListBenefits>
      <Link to="/driver-register">
        <RegisterButton>Join the team</RegisterButton>
      </Link>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 50px;
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

const ListBenefits = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 80px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const RegisterButton = styled.button`
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

export default ThirdSection
