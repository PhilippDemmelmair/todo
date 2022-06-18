import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom'
import styled from 'styled-components'
import ReactLogo from './Logo.svg'

function Header() {
  return (
    <>
      <HeaderStyle>
        <Logo src={ReactLogo} alt="Hexagon" />
        <Title>Hexagon Todo</Title>
        <NavBar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LinkText>Home</LinkText>
          </Link>

          <Link to="/random" style={{ textDecoration: 'none' }}>
            <LinkText>Random</LinkText>
          </Link>

          <Link to="/archive" style={{ textDecoration: 'none' }}>
            <LinkText>Archive</LinkText>
          </Link>
        </NavBar>
      </HeaderStyle>
    </>
  )
}

export { Header }

const Logo = styled.img`
  height: 80px;
`

const NavBar = styled.nav`
  border-radius: 8px;
  width: 30vw;
  padding: 1vh;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
const LinkText = styled.span`
  color: #eae9ec;
  font-size: 1.2rem;
  margin: 1em;
  border: 2px solid #eae9ec;
  border-radius: 8px;
  padding: 0.2em 1em;
  transition: background 0.5s;
  &:hover {
    background: #eae9ec40;
  }
`

const HeaderStyle = styled.header`
  background-color: #a17bcc;
  color: #eae9ec;
  height: 100px;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eae9ec;
`

const Title = styled.h1`
  font-size: 2em;
`
