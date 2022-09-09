import React from 'react'
import styled from 'styled-components'
import computer from '../../Images/computer.png'
import { Link } from 'react-router-dom'

const SecondSection = () => {
  return (
    <Container>
      <FirstFeature>
        <FeatureTextContainer>
          <FeatureMainText>The future of logistics is here</FeatureMainText>
          <FeatureSubtext>
            Through technology (mobile, AI, automation), we have created a next generation
            logistics network which is express, cost-efficient and reliable.
          </FeatureSubtext>
          <Link to="/contact">
            <ContactButton>Get started</ContactButton>
          </Link>
        </FeatureTextContainer>
        <FeatureMainImage src={computer} />
      </FirstFeature>
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
    margin-top: 50px;
  }
`

const FirstFeature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 90%;
  }
`

const FeatureTextContainer = styled.div`
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const FeatureMainText = styled.h2`
  color: #112d4e;
  font-size: 2rem;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: center;
  }
`

const FeatureSubtext = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  width: 70%;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    text-align: center;
    width: 100%;
  }
`

const ContactButton = styled.button`
  padding: 15px 15px;
  border: none;
  background-color: #112d4e;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s all ease-in;
  &:hover {
    background-color: #769fcd;
  }
`

const FeatureMainImage = styled.img`
  width: 30%;
  height: 30%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 70%;
    height: 70%;
    margin-bottom: 50px;
    margin-top: 30px;
  }
`

export default SecondSection
