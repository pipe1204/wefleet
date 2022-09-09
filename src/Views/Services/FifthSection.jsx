import React from 'react'
import styled from 'styled-components'

const FifthSection = () => {
  return (
    <Container>
      <Subcontainer>
        <CustomerReview>What our customers say</CustomerReview>
        <Review>
          "After we have used WeFleet for a few months, we found that more and more
          customers choose to use WeFleet services when they checkout from the cart. They
          want to receive the goods on the same day or even instantly."
        </Review>
        <CreatorName>Laurette Clark, CEO Laurett Sport</CreatorName>
      </Subcontainer>
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

const Subcontainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const CustomerReview = styled.h2`
  font-size: 2rem;
  color: #112d4e;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
  }
`

const Review = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 1.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.5rem;
    margin: 30px 0px;
  }
`

const CreatorName = styled.p`
  color: #112d4e;
  font-size: 1.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 0.8rem;
  }
`

export default FifthSection
