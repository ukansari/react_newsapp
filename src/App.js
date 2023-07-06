import './App.css';

import React from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News  from './component/News';
// import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App=()=> {
  
  const pageSize=15;
 const apikey=process.env.REACT_APP_NEWS_API
  // TO ACCESS THE ENVIRNOMENT VARIABLE USE PROCESS.ENV AND VARIABLE NAME 
 
  const [progress,setProgress]=useState(0)
  
  
    return (
      
      <div>
      <BrowserRouter>
      <Navbar/> 
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
        <Routes>
        <Route exact path='/sports' element={<News setProgress={ setProgress} key="sports " pageSize={ pageSize} apikey={ apikey} country='in' category='sports' /> }>
        </Route>
        <Route exact path='/general' element={<News setProgress={ setProgress} key=" general" pageSize={ pageSize} apikey={ apikey} country='in' category='general' /> }>
        </Route>
        <Route exact path='/' element={<News setProgress={ setProgress} key=" normal" pageSize={ pageSize} apikey={ apikey} country='in' category='general' /> }>
        </Route>
        <Route exact path='/business' element={<News setProgress={ setProgress} key=" business" pageSize={ pageSize} apikey={ apikey} country='in' category='business' /> }>
        </Route>
        <Route exact path='/technology' element={<News setProgress={ setProgress} key="technology " pageSize={ pageSize} apikey={ apikey} country='in' category='technology' /> }>
        </Route>
        <Route exact path='/health' element={<News setProgress={ setProgress} key="health " pageSize={ pageSize} apikey={ apikey} country='in' category='health' /> }>
        </Route>
        <Route exact path='/science' element={<News setProgress={ setProgress} key="science " pageSize={ pageSize} apikey={ apikey} country='in' category='science' /> }>
        </Route>
        <Route exact path='/entertainment' element={<News setProgress={ setProgress} key=" entertainment" pageSize={ pageSize} apikey={ apikey} country='in' category='entertainment' /> }>
        </Route>
        <Route exact path='/home' element={<div className='text-center'>Welcome To Home Page</div>}>
        </Route>
        <Route exact path='/about' element={<div className='text-center'>Welcome To About Page</div>}>
        </Route>
        
        </Routes>
        </BrowserRouter>
        </div>
        )
        
      }

      export default App;
