import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<News key="general" country="in" category="general"/>} />
                <Route exact path="/business" element={<News key="business" country="in" category="business"/>}/>
                <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}/>
                <Route exact path="/general" element={<News key="general" country="in" category="general"/>} />
                <Route exact path="/health" element={<News key="health" country="in" category="health"/>} />
                <Route exact path="/science" element={<News key="science" country="in" category="science"/>} />
                <Route exact path="/sports" element={<News key="sports" country="in" category="sports"/>} />
                <Route exact path="/technology" element={<News key="technology" country="in" category="technology"/>} />
            </Routes>
        </div>
      </Router>
    )
  }
}

