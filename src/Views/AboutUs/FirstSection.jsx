import React from 'react'
import styled from 'styled-components'

const FirstSection = () => {
  return (
    <Container>
      <Container1>
        <SubContainer>
          <MainText>
            We bring you and your customers <span>together</span>. You make the{' '}
            <span>magic</span> happen.
          </MainText>
        </SubContainer>
        <SubheadingContainer>
          <Subheading>
            Launched in late 2021, WeFleet is on a mission to support small and medium
            business with amazing products and bring them together with their customers by
            helping them with their logistics needs.
          </Subheading>
        </SubheadingContainer>
      </Container1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#F7FCFB"
          fill-opacity="1"
          d="M0,128L720,256L1440,96L1440,320L720,320L0,320Z"
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
  margin-top: -20px;
  svg {
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const SubContainer = styled.div`
width: 80%;
border-radius: 30px;
padding: 30px 50px;
@media screen and (min-width: 320px) and (max-width: 1080px) {
  margin: 20px;
  width: 90%;
`

const MainText = styled.h1`
  color: #112d4e;
  font-size: 4rem;
  text-align: center;
  padding: 50px;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    padding: 0;
  }
`

const SubheadingContainer = styled.div`
  width: 70%;
  padding: 20px 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const Subheading = styled.h4`
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`

export default FirstSection
