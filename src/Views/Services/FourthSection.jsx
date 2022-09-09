import React from 'react'
import styled from 'styled-components'
import { worksCreator } from '../../Components/worksData'

//Components
import Step from '../../Components/Step'

const FourthSection = () => {
  return (
    <Container>
      <MainText>How it works</MainText>
      <StepsContainer>
        {worksCreator.map(item => {
          const { id, icon, title, info } = item

          return <Step id={id} icon={icon} title={title} info={info} />
        })}
      </StepsContainer>
      <SignUp>Get started</SignUp>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const MainText = styled.h1`
  color: #112d4e;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 20px;
    width: 90%;
  }
`

const SignUp = styled.button`
  padding: 15px 15px;
  border: none;
  background-color: #112d4e;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s all ease-in;
  &:hover {
    background-color: #3f72af;
  }
`

export default FourthSection
