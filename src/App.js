import './App.css';
import Dialogs from './components/Paiges/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Paiges/Profile/Profile';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {
  
  return (
      
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>

          <Routes>
            <Route path='/profile' element = {<Profile posts = {props.posts} />} />


            <Route path='/dialogs' element = {<Dialogs  dialogs ={props.dialogs}  messages = {props.messages}/>} />

          
          </Routes>



        </div>
      </div>
      </BrowserRouter>

 

  );
}

export default App;


