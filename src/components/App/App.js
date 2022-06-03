import { nanoid } from 'nanoid'
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

function Archive() {
  return <h2>Archive</h2>
}

function Random() {
  return <h2>Random</h2>
}

export default App
