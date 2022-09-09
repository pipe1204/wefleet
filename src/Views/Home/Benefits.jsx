import React from 'react'
import styled from 'styled-components'
import { benefitsUser } from '../../Components/worksData'
import { Link } from 'react-router-dom'

//Components

import Benefit from '../../Components/Benefit'

const Benefits = () => {
  return (
    <Container>
      <MainTitle>Why WeFleet?</MainTitle>
      <MainContainer>
        {benefitsUser.map(item => {
          const { id, image, title, info } = item

          return <Benefit id={id} image={image} title={title} info={info} />
        })}
      </MainContainer>
      <Link to="/contact">
        <SignUp>GET STARTED</SignUp>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #101010;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`

const MainTitle = styled.h2`
  font-size: 2rem;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0px;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const SignUp = styled.button`
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 15px 15px;
  background: linear-gradient(to right, black, black) padding-box,
    linear-gradient(to right, #30cfd0 0%, #8247f5 100%) border-box;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s all ease-in;
  &:hover {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default Benefits
