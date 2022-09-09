import React from 'react'
import styled from 'styled-components'
import { worksUser } from '../../Components/worksData'
import Step from '../../Components/Step'

const ThirdSection = () => {
  return (
    <Container>
      <StepsContainer>
        {worksUser.map(item => {
          const { id, icon, title, info } = item

          return <Step id={id} icon={icon} title={title} info={info} />
        })}
      </StepsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 50px;
  margin: 0px 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 30px;
    padding-top: 0px;
    margin-top: 0px;
  }
`

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-top: 40px;
    width: 90%;
  }
`

export default ThirdSection
