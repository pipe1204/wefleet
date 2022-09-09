import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/WeFleet Logo.png'
import { Link } from 'react-router-dom'

//Components
import DriversContact from './DriverContact'

const ContactPage = () => {
  return (
    <Container>
      <Link to="/" style={{ textAlign: 'center' }}>
        <LogoAvatar src={Logo} />
      </Link>

      <DriversContact />
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

const LogoAvatar = styled.img`
  width: 12%;
  height: 12%;
  padding: 1rem 0;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 40%;
    height: 40%;
  }
`

export default ContactPage
