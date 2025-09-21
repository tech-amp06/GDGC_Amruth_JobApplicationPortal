import './App.css';
import Homepage from './components/HomePage/homepage';
import Header from './components/Header/header';
import LoginPage from './components/LoginPage/loginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage/signupPage';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' index element={ <Homepage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/signup' element={ <SignupPage /> } />
      </Routes>
    </div>
  )  
}

export default App
