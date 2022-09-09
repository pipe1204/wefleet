import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../Images/WeFleet Logo.png'
import { Link } from 'react-router-dom'

//Components
import SignUp from './SignUp'
import Login from './Login'

const Register = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Container>
      <Link to="/" style={{ textAlign: 'center' }}>
        <LogoAvatar src={Logo} />
      </Link>
      <TabContainer>
        <SignUpButton onClick={() => setIsLogin(false)}>Register</SignUpButton>
        <LoginButton onClick={() => setIsLogin(true)}>Login</LoginButton>
      </TabContainer>

      {isLogin ? <Login /> : <SignUp />}
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

const LogoAvatar = styled.img`
  width: 12%;
  height: 12%;
  padding: 1rem 0;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 40%;
    height: 40%;
  }
`

const TabContainer = styled.div`
  width: 35%;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const LoginButton = styled.button`
  width: 50%;
  font-size: 1.5rem;
  padding: 10px 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-left: solid 1px #dbe2ef;
  &:hover {
    background-color: #dbe2ef;
    color: #3f72af;
  }
`

const SignUpButton = styled.button`
  width: 50%;
  font-size: 1.5rem;
  padding: 10px 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-right: solid 1px #dbe2ef;
  &:hover {
    background-color: #dbe2ef;
    color: #3f72af;
  }
`

export default Register
