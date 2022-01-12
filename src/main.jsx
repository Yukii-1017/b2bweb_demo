/**
 * outline of pages
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import {
  Footer,
  Home,
  Navbar,
  Registration,
} from "./components";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
    <Footer />
  </Router>,
 
  document.getElementById('root')
);

