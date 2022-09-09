import React from 'react'
import styled from 'styled-components'

const SecondSection = () => {
  return (
    <Container>
      <SubContainer>
        <GoalText>
          Our journey began in 2016 from Melbourne. Our co-founders met and worked
          together managing the logistics for one of Australians biggest furniture
          ecommerce in Australia. One morning they saw themselves having too many of
          orders to fulfill amongst themselves. This significant event inspired them to
          think of an effective way to solve the pain point of the fragmented and
          inefficient call-centre business model. Their idea began by consolidating
          drivers into a chat group where drivers could respond to orders immediately,
          however, that was not scalable enough. They then turned to technology and
          WeFleet was born.
          <br></br>
          <br></br>WeFleet is one of the first logistics platforms in Australia
          revitalising the traditional logistics industry with innovative technology. We
          connect individuals and businesses directly to millions of drivers and couriers
          for their delivery needs and redefine the everyday delivery experience by
          providing diversified and seamless services.
          <br></br>
          <br></br>Since we started this idea, we have expanded our portfolio to offering
          logistics services which include door-to-door deliveries and customised
          logistics solutions across Australia. WeFleet represents boundless possibilities
          to explore and offer value-added services to our customers and provide them with
          a holistic logistics experience.
        </GoalText>
      </SubContainer>
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

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 50px 50px;
  border-radius: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const GoalText = styled.h4`
  text-align: center;
  line-height: 2;
  font-weight: 400;
  font-size: 1.2rem;
  color: #112d4e;
  margin-bottom: 30px;
  <<<<<<< HEAD @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`

export default SecondSection
