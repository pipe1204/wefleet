import React from 'react'
import styled from 'styled-components'

import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import SixthSection from './SixthSection'

const Services = () => {
  return (
    <>
      <MainContainer>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <SixthSection />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  margin: 10px 0px;
  padding: 0 0rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0px;
  }
`

export default Services
