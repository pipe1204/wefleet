import React from 'react'
import styled from 'styled-components'
import Video from '../../Images/Video.mp4'

const SecondSection = () => {
  return (
    <Container>
      <SmallTitle>SCALE EFFICIENTLY</SmallTitle>
      <MainHeading>Close the gap on freight visibility</MainHeading>
      <SubHeading>
        Streamline your track & trace operations with WeFleet's drivers and automated
        messages.
      </SubHeading>
      <VideoContainer>
        <Vid autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </Vid>
        <VideoSubcontainer>
          <VideoHeading>
            Keep your customers updated on the whole delivery journey
          </VideoHeading>
          <VideoSubheading>
            Provide real-time driver updates to your customers and add that delightful
            experience. Sometimes more than a blue dot on a map is needed, text customers
            in real-time to confirm statuses
          </VideoSubheading>
        </VideoSubcontainer>
      </VideoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 30px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 60px;
  }
`

const SmallTitle = styled.h4`
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #112d4e;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    text-align: center;
  }
`

const MainHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #112d4e;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 2rem;
    text-align: center;
  }
`

const SubHeading = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
  }
`

const VideoContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Vid = styled.video`
  max-width: 35%;
  max-height: 35%;
  border-radius: 20px;
  margin-right: 20px;
  background: linear-gradient(to right, white, white) padding-box,
    linear-gradient(to right, #30cfd0 0%, #8247f5 100%) border-box;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-right: 0px;
    max-width: 90%;
    max-height: 90%;
  }
`

const VideoSubcontainer = styled.div`
  border-radius: 20px;
  width: 40%;
  text-align: center;
  margin-left: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 50px 20px;
    width: 80%;
    margin-left: 0px;
  }
`

const VideoHeading = styled.h1`
  font-size: 2rem;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`

const VideoSubheading = styled.div`
  color: #112d4e;
  line-height: 1.5;
  font-size: 1.2rem;
`

export default SecondSection
