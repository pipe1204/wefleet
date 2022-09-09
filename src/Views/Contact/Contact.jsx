import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/WeFleet Logo.png'
import { Link } from 'react-router-dom'

//Components
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Container>
      <Link to="/" style={{ textAlign: 'center' }}>
        <LogoAvatar src={Logo} />
      </Link>
      <ContactDeliveries>
        <ContactMessage>
          <span>Please note:</span> The below form is for sales and only for stores or
          business owners that want to partner with WeFleet. To enquire about a delivery
          you are currently expecting, please email us at{' '}
          <span>deliveries@wefleet.co</span> and let us know how we can help you.
        </ContactMessage>
      </ContactDeliveries>
      <ContactForm />
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

const ContactDeliveries = styled.div`
  margin-bottom: 40px;
  width: 50%;
  text-align: center;
`

const ContactMessage = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

export default Contact
