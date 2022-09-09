import React from 'react'
import styled from 'styled-components'

const OtherStatus = () => {
  return (
    <Container>
      <MainHeading>We couldn`t find your request 😅</MainHeading>
      <SubHeading>
        It seems your delivery is either in transit or has already been delivered. If you
        have any request, please contact us at <span>deliveries@wefleet.co</span> and we
        will do our best to help.
      </SubHeading>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 30px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 60px;
  }
`

const MainHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #112d4e;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    text-align: center;
  }
`

const SubHeading = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
  }
`

export default OtherStatus
