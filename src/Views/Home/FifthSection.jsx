import React from 'react'
import styled from 'styled-components'
import review1 from '../../Images/review1.png'
import review2 from '../../Images/review2.png'
import review3 from '../../Images/review3.png'
import review4 from '../../Images/review4.png'
import Review5 from '../../Images/Review5.png'
import Review6 from '../../Images/Review6.png'
import Review8 from '../../Images/Review8.png'
import Review7 from '../../Images/Review7.png'

const FifthSection = () => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F7FCFB"
          fill-opacity="1"
          d="M0,320L360,320L720,128L1080,224L1440,160L1440,0L1080,0L720,0L360,0L0,0Z"
        ></path>
      </svg>
      <Container1>
        <SubContainer>
          <CustomerReview>Your customers will love fast delivery</CustomerReview>
          <ReviewContainer>
            <ReviewSubContainer>
              <Review>
                <Image src={review1} />
              </Review>
              <Review>
                <Image src={review2} />
              </Review>
              <Review>
                <Image src={review3} />
              </Review>
              <Review>
                <Image src={Review7} />
              </Review>
            </ReviewSubContainer>
            <ReviewSubContainer>
              <Review>
                <Image src={Review5} />
              </Review>
              <Review>
                <Image src={review4} />
              </Review>
              <Review>
                <Image src={Review6} />
              </Review>
              <Review>
                <Image src={Review8} />
              </Review>
            </ReviewSubContainer>
          </ReviewContainer>
        </SubContainer>
      </Container1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #101010;
  margin-top: -10px;
`

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  background-color: #101010;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 20px;
    margin-bottom: 60px;
  }
`

const SubContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CustomerReview = styled.h2`
  font-size: 2rem;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
  }
`

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const ReviewSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Review = styled.div`
  border-radius: 30px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 4px;
  border-radius: 10px;
`

export default FifthSection
