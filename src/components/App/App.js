import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom'

import { Header } from '../Header'
import { Home } from '../Home'
import { Random } from '../Random'
import { Archive } from '../Archive'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
