import React, { useState } from 'react'
import { FaUserCircle, FaTimes, FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../Images/Logo-White.png'
import { NavbarLinksUser } from './NavbarLinks'

function NavBarUser() {
  const [isOpen, SetIsOpen] = useState(false)

  const handleClick = () => {
    SetIsOpen(false)
  }

  return (
    <Nav>
      <LogoAvatar src={Logo} />
      {isOpen ? (
        <Bars onClick={() => SetIsOpen(!isOpen)}>
          <FaTimes />
        </Bars>
      ) : (
        <Bars onClick={() => SetIsOpen(!isOpen)}>
          <FaBars />
        </Bars>
      )}
      <Menu isOpen={isOpen}>
        {NavbarLinksUser.map(item => {
          const { id, name, path } = item
          return (
            <Link
              key={id}
              to={path}
              style={{
                textDecoration: 'none',
                marginBottom: '10px',
                marginTop: '10px',
              }}
              onClick={handleClick}
            >
              <MenuLink>{name}</MenuLink>
            </Link>
          )
        })}
        <LoginUser>
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              marginBottom: '10px',
              marginTop: '10px',
            }}
          >
            <FaUserCircle />
          </Link>
        </LoginUser>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #101010;
  position: sticky;
  top: 0;
  z-index: 99;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`

const LogoAvatar = styled.img`
  width: 12%;
  height: 12%;
  padding: 1rem 0;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 45%;
    height: 45%;
  }
`

const Bars = styled.div`
  svg {
    font-size: 1.5rem;
    color: white;
  }
  display: none;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
  }
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    box-shadow: box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px;
    transition: all 0.6s ease-in-out;
}
`

const MenuLink = styled.a`
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const LoginUser = styled.div`
  svg {
    font-size: 1.5rem;
    color: white;
    margin-left: 40px;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-left: 0px;
      margin-top: 10px;
    }
    @media screen adn (min-width: 320px) and (max-width: 1080px) {
      margin-bottom: 10px;
    }
  }
`

export default NavBarUser
