import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <>
      <HeaderStyle>
        <Title>SUPER IMPORTANT TODO APP</Title>
        <NavBar>
          <Link to="/">
            <LinkText>Home</LinkText>
          </Link>

          <Link to="/random">
            <LinkText>Random</LinkText>
          </Link>

          <Link to="/archive">
            <LinkText>Archive</LinkText>
          </Link>
        </NavBar>
      </HeaderStyle>
    </>
  )
}

export { Header }

const NavBar = styled.nav`
  // border: 1px solid #a1a1a1;
  border-radius: 8px;
  width: 30vw;
  padding: 1vh;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
const LinkText = styled.span`
  color: #fff;
  textdecoration: none;
  font-size: 1.2rem;
  margin: 1em;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 0.2em 1em;
`

const HeaderStyle = styled.header`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #fff;
`

const Title = styled.h1`
  font-size: calc(10px + 2vmin);
  color: white;
`
