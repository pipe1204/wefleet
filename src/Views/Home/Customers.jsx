import React from 'react'
import styled from 'styled-components'
import Thieves from '../../Images/Thieves.png'
import Paire from '../../Images/Paire.png'
import Jason from '../../Images/Jason.png'
import Tint from '../../Images/Tint.png'
import Rumble from '../../Images/Rumble.png'
import Recess from '../../Images/Recess.png'
import July from '../../Images/July.png'
import FirstPress from '../../Images/FirstPress.png'

function Customers() {
  return (
    <Container>
      <SubContainer>
        <Heading>
          Empowering the last mile delivery for <br></br>these superstars
        </Heading>
        <CustomerLogo>
          <Image src={Thieves} />
          <Image src={Paire} />
          <Image src={Jason} />
          <Image src={Tint} />
          <Image src={Rumble} />
          <Image src={Recess} />
          <Image src={July} />
          <Image src={FirstPress} />
        </CustomerLogo>
      </SubContainer>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;
margin: 0px 50px;
@media screen and (min-width: 320px) and (max-width: 1080px) {
`

const SubContainer = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 30px;
  }
`

const Heading = styled.h3`
  font-size: 1.7rem;
  color: #112d4e;
  margin-bottom: 50px;
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

const CustomerLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  width: 60%;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-wrap: none;
    flex-direction: row;
  }
`

const Image = styled.img`
  width: 15%;
  height: 15%;
  margin: 30px 60px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 50%;
    height: 50%;
    margin-bottom: 40px;
  }
`

export default Customers
