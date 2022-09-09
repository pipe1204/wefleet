import React from 'react'
import styled from 'styled-components'

//Views
import FirstSection from './FirstSection'
import FourthSection from './FourthSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FifthSection from './FifthSection'
import SixthSection from '../Services/SixthSection'
import Benefits from './Benefits'
import Customers from './Customers'

const Home = () => {
  return (
    <>
      <MainContainer>
        <FirstSection />
        <SecondSection />
        {/* <ThirdSection /> */}
        <Benefits />
        <Customers />
        <FourthSection />
        <FifthSection />
        <SixthSection />
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

export default Home
