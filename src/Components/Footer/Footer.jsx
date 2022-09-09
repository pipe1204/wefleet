import React from 'react'
import styled from 'styled-components'
import { FooterLinksCompany, FooterLinksSolution } from '../NavBar/NavbarLinks'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <HeaderSubcontainer>
        <Headers>
          <Title>Company</Title>
          {FooterLinksCompany.map(item => {
            const { id, name, path } = item
            return (
              <>
                <Link
                  to={path}
                  style={{
                    textDecoration: 'none',
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  <MenuLink key={id}>{name}</MenuLink>
                </Link>
              </>
            )
          })}
        </Headers>
        <Headers>
          <Title>Solutions</Title>
          {FooterLinksSolution.map(item => {
            const { id, name, path } = item
            return (
              <>
                <Link
                  to={path}
                  style={{
                    textDecoration: 'none',
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  <MenuLink key={id}>{name}</MenuLink>
                </Link>
              </>
            )
          })}
        </Headers>
        <SocialContainer>
          <TitleSocial>Social</TitleSocial>
          <LinkedIn href="https://www.linkedin.com/company/76672754" target="_blank">
            <FaLinkedin />
          </LinkedIn>
          <ContactEmailCustomer>
            <Message>Delivery enquiries</Message>
            <Email>deliveries@wefleet.co</Email>
            <Message>Account Holders</Message>
            <Email>support@wefleet.co</Email>
            <Message>Sales enquiries</Message>
            <Email>info@wefleet.co</Email>
          </ContactEmailCustomer>
        </SocialContainer>
      </HeaderSubcontainer>
      <InfoSubcontainer>
        <CompanyInfo>
          <TextEmail>info@wefleet.co</TextEmail>
          <TextMade>Made with ❤️ in Melbourne</TextMade>
        </CompanyInfo>
      </InfoSubcontainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  padding: 20px 3rem;
  background-color: #101010;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
  }
`

const HeaderSubcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
`

const InfoSubcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const CompanyInfo = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0px;
    align-items: center;
    margin-top: 20px;
  }
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LinkedIn = styled.a`
  font-size: 25px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Title = styled.h4`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TitleSocial = styled.h4`
  padding: 1rem 2rem;
  text-align: center;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MenuLink = styled.a`
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const TextEmail = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
  color: white;
  text-decoration: underline;
  text-align: center;
`

const TextMade = styled.h4`
  font-size: 1rem;
  color: white;
`

const ContactEmailCustomer = styled.div`
  margin-top: 15px;
`

const Message = styled.h5`
  color: white;
  margin-top: 15px;
`
const Email = styled.h5`
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
`

export default Footer
