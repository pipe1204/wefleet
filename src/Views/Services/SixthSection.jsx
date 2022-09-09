import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SixthSection = () => {
  return (
    <Container>
      <MainHeading>
        An upgrade experience for businesses with logistics needs.
      </MainHeading>
      <SubHeading>
        3-day delivery for your customers, high performance last-mile for your e-commerce.
      </SubHeading>
      <Link to="/contact">
        <SignUp>Contact us</SignUp>
      </Link>
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

const MainHeading = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding: 10px 100px;
  color: #112d4e;
  margin-bottom: 20px;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  margin-bottom: 40px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`

const SignUp = styled.button`
  padding: 15px 15px;
  border: none;
  background-color: black;
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

export default SixthSection
