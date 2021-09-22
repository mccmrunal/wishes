import React, { useContext } from 'react';
import { MyContext } from '../context';

const Final = () =>{

  const context = useContext(MyContext);
  return(
    <>{
      context.state.wishes.map((item)=>{
          return(
            <h1>{item}</h1>         
             )
      })

}
<button onClick={()=>context.goTolandingPage()}>Go to Landing Page</button>
    </>
  )
}

export default Final;
