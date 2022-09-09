import React from 'react'
import styled from 'styled-components'
import Thieves from '../../Images/Thieves.png'
import Paire from '../../Images/Paire.png'
import Jason from '../../Images/Jason.png'
import Tint from '../../Images/Tint.png'
import Rumble from '../../Images/Rumble.png'
import Recess from '../../Images/Recess.png'

function Customers() {
  return (
    <Container>
      <Heading>
        Empowering the last mile delivery for <br></br>these superstars
      </Heading>
      <MainDiv>
        <SecondDiv>
          <ThirdDiv>
            <Image src={Thieves} />
            <Image src={Paire} />
            <Image src={Jason} />
            <Image src={Tint} />
            <Image src={Rumble} />
            <Image src={Recess} />
          </ThirdDiv>
          <ThirdDiv>
            <Image src={Thieves} />
            <Image src={Paire} />
            <Image src={Jason} />
            <Image src={Tint} />
            <Image src={Rumble} />
            <Image src={Recess} />
          </ThirdDiv>
        </SecondDiv>
      </MainDiv>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    margin-bottom: 60px;
    width: 90%;
  }
`

const Heading = styled.h3`
  font-size: 1.7rem;
  color: #112d4e;
  margin-bottom: 50px;
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    text-align: center;
  }
`

const MainDiv = styled.div`
  position: relative;
  width: 100%;
  ${'' /* overflow: hidden; */}
`

const SecondDiv = styled.div`
  display: flex;
  position: absolute;
  left: -0;
  width: 200%;
`

const ThirdDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`

const Image = styled.img`
  max-width: 30%;
  max-height: 30%;
  margin: 10px 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 40%;
    height: 40%;
    margin-bottom: 40px;
  }
`

export default Customers
