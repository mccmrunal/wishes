import React, { useContext } from 'react';
import Final from './components/final';
import Header from './components/header';
import LandingPage from './components/landingPage';
import WishesPortal from './components/wishesPortal';
import { MyContext } from './context';

const App = () =>{

  const context = useContext(MyContext);
  return(
    <>
      <Header/>
      {
      context.state.page === 1   ?<LandingPage/>
      :context.state.page ===2 ?<WishesPortal/>:<Final/>
      }
    
    </>
  )
}

export default App;
