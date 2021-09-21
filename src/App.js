import React from 'react';
import Header from './components/header';
import LandingPage from './components/landingPage';
import { MyProvider } from './context';

const App = () =>{
  return(
    <>
    <MyProvider>  <Header/>
      <LandingPage/></MyProvider>
    
    </>
  )
}

export default App;
