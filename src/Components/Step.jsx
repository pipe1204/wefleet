import React from 'react'
import styled from 'styled-components'

const Step = ({ id, icon, title, info }) => {
  return (
    <StepContainer key={id}>
      <IconContainer>{icon}</IconContainer>
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
  padding: 20px 50px;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 10px 10px;
    width: 90%;
  }
`

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: #b9d7ea;
  margin-bottom: 25px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 3rem;
    color: #769fcd;
  }
`

const StepTitle = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.9rem;
  color: #112d4e;
`

const StepInfo = styled.p`
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.2rem;
  }
`

export default Step
