import React from 'react'
import styled from 'styled-components'

const DriverStep = props => {
  return (
    <BenefitDiv>
      <BenefitSubDiv>
        <NumberBenefitDiv>
          <NumberBenefit>
            <span>{props.number}</span>
          </NumberBenefit>
          <Line></Line>
        </NumberBenefitDiv>
        <BenefitInfoDiv>
          <BenefitTitle>{props.title}</BenefitTitle>
          <BenefitParragraph>{props.description}</BenefitParragraph>
        </BenefitInfoDiv>
      </BenefitSubDiv>
    </BenefitDiv>
  )
}

const BenefitDiv = styled.div`
  height: 100%;
  width: auto;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding-bottom: 72px;
  }
`

const BenefitSubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  width: 90%;
`

const NumberBenefitDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 24px;
`

const NumberBenefit = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #769fcd;
  border-radius: 50%;
  span {
    color: rgb(255, 255, 255);
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 900;
  }
`

const Line = styled.div`
  width: 1px;
  height: 205px;
  background: rgb(242, 242, 242);
`

const BenefitInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: auto;
`

const BenefitTitle = styled.h5`
  font-size: 1.5rem;
  line-height: 1.33333;
  font-weight: 900;
  letter-spacing: -0.01em;
  text-align: left;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 150px;
`

const BenefitParragraph = styled.p`
  letter-spacing: -0.01em;
  text-align: left;
  color: rgb(0, 0, 0);
  font-size: 1.125rem;
  line-height: 2;
  font-weight: 500;
  margin-top: 24px;
  width: 230px;
`

export default DriverStep
