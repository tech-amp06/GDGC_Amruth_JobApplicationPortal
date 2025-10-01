import './App.css';
import Homepage from './components/HomePage/homepage';
import Header from './components/Header/header';
import LoginPage from './components/LoginPage/loginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage/signupPage';
import { useState } from 'react';
import { createContext } from 'react';

export const DetectLogin = createContext(undefined);

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="App">
      <DetectLogin.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header />
      </DetectLogin.Provider>
      
      <Routes>
        <Route path='/' index element={ <Homepage /> } />
        <Route path='/login' element={ <LoginPage setLoggedInUser={setLoggedInUser} /> } />
        <Route path='/signup' element={ <SignupPage /> } />
      </Routes>
    </div>
  )  
}

export default App
