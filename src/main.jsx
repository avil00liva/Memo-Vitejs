import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import DefaultMode from "./components/DefaultMode"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SmallDeviceMode from './components/SmallDeviceMode'

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/large-device" element={<DefaultMode />} />
      <Route path="/small-device" element={<SmallDeviceMode />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
