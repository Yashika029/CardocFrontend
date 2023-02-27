
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';




function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>

      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
