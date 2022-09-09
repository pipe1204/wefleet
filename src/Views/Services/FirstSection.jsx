import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'

const FirstSection = () => {
  return (
    <Container>
      <Container1>
        <MainHeading>
          Connecting Australia with <br></br>
          <span>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'fast and cost-efficient deliveries',
                3000,
                'a new logistics',
                3000,
                'real-time delivery tracking',
                3000,
              ]}
            />
          </span>
        </MainHeading>
        <SubHeading>
          Provide faster and better visibility on your home deliveries to improve customer
          satisfaction.
        </SubHeading>
      </Container1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#F7FCFB"
          fill-opacity="1"
          d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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

const MainHeading = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding: 10px 100px;
  color: white;
  margin-bottom: 20px;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 2rem;
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    padding: 10px;
    width: 100%;
  }
`

const SubHeading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`

export default FirstSection
