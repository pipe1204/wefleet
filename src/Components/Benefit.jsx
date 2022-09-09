import React from 'react'
import styled from 'styled-components'

const Benefit = ({ id, image, title, info }) => {
  return (
    <StepContainer key={id}>
      <IconContainer>{image}</IconContainer>
      <StepTitle>{title}</StepTitle>
      <StepInfo>{info}</StepInfo>
    </StepContainer>
  )
}

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 10px 10px;
    width: 90%;
  }
`

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 150%;
    max-height: 150%;
  }
`

const StepTitle = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.2rem;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.5rem;
  }
`

const StepInfo = styled.p`
  text-align: center;
  line-height: 1.5;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`

export default Benefit
