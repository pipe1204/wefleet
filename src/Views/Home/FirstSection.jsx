import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'
import Rocket from '../../Images/Rocket.png'

const FirstSection = () => {
  return (
    <Container>
      <Container1>
        <FirstContainer>
          <LeftContainer>
            <MainHeading>
              Sustainable fulfillment to accelerate your <br></br>
              <span>
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'Shopify sales',
                    3000,
                    'eBay sales',
                    3000,
                    'WooCommerce sales',
                    3000,
                    'Instagram sales',
                    3000,
                    'BigCommerce sales',
                    3000,
                    'Facebook sales',
                    3000,
                  ]}
                />
              </span>
            </MainHeading>
            <SubHeading>
              Make 3 - day delivery a competitive <br></br> advantage everywhere you sell.
            </SubHeading>
          </LeftContainer>
          <RocketImage src={Rocket} />
        </FirstContainer>
      </Container1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#F7FCFB"
          fill-opacity="1"
          d="M0,64L80,64C160,64,320,64,480,101.3C640,139,800,213,960,213.3C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
  margin-top: -10px;
  svg {
    display: block;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`

const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 60px;
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainHeading = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  padding: 10px 100px;
  color: white;
  margin-bottom: 20px;
  span {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 2rem;
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    padding: 10px;
    width: 100%;
  }
`

const SubHeading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`

const RocketImage = styled.img`
  width: 40%;
  height: 40%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 50%;
    height: 50%;
  }
`
export default FirstSection
