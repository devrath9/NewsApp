
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Notfound from './components/Notfound';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


function App(){

  const[progress, setProgress] = useState(0)

  const pagesize=12
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY 
  
    return (
      <>
      <BrowserRouter>
      <div>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />
      
       <Navbar/>
         <Routes>
            <Route exact path="/" element={<News  myprogress = {setProgress} key="home" myapiKey={apiKey} pagesize={pagesize} category="general" />}/>
            <Route exact path="/general" element={<News  myprogress = {setProgress} key="ge1" myapiKey={apiKey} pagesize={pagesize} category="general" />}/>
            <Route exact path="/business" element={<News  myprogress = {setProgress} key="bus" myapiKey={apiKey} pagesize={pagesize} category="business" />}/>
            <Route exact path="/entertainment" element={<News  myprogress = {setProgress} key="ent" myapiKey={apiKey} pagesize={pagesize} category="entertainment" />}/>
            <Route exact path="/sports" element={<News  myprogress = {setProgress} key="spo" myapiKey={apiKey} pagesize={pagesize} category="sports" />}/>
            <Route exact path="/health" element={<News  myprogress = {setProgress} key="hea" myapiKey={apiKey}  pagesize={pagesize} category="health" />}/>
            <Route exact path="/science" element={<News  myprogress = {setProgress} key="sc" myapiKey={apiKey} pagesize={pagesize} category="science" />}/>
            <Route exact path="/technology" element={<News  myprogress = {setProgress} key="tech" myapiKey={apiKey}  pagesize={pagesize} category="technology" />}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
             {/* Unique keys for each path is used so that every component can remount itself after clicking navbar links, otherwise even if we click on other links, it does not show that page unless we reload */}
      </div>
      </BrowserRouter>
      </>
    )
 
}
export default App;
