import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Detail from "./components/Detail";

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      
      <Navbar />
        <Routes>
        
          <Route path="/" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="general" size={15} country="in" category="general"/>
            </div>
          } />
          <Route path="/business" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="business" size={15} country="in" category="business"/>
            </div>
          } />
          <Route path="/entertainment" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="entertainment" size={15} country="in" category="entertainment"/>
            </div>
          } />
          <Route path="/health" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="health" size={15} country="in" category="health"/>
            </div>
          } />
          <Route path="/science" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="science"  size={15} country="in" category="science"/>
            </div>
          } />
          <Route path="/sports" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="sports" size={15} country="in" category="sports"/>
            </div>
          } />
          <Route path="/technology" element={
            <div style={{
              color:"white",
              backgroundColor:"black",
              minHeight:"100vh",
              width:"100vw"
            }}>
              <News key="technology" size={15} country="in" category="technology"/>
            </div>
          } />


        </Routes>
      </BrowserRouter>
    )
  }
}

