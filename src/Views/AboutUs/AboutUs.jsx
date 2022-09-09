import React from 'react'
import styled from 'styled-components'

//Views
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

const AboutUs = () => {
  return (
    <>
      <MainContainer>
        <FirstSection />
        <SecondSection />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  margin: 10px 0px;
  padding: 0 0rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`

export default AboutUs
