import Button from '@restart/ui/esm/Button';
import React, { useContext, useRef } from 'react';
import { MyContext } from '../context';
import { Form } from 'react-bootstrap';

const WishesPortal = () =>{

    const textInput = useRef();
    const context = useContext(MyContext);

    const addWish = (wish)=>{
        context.addWishes(wish);
    }
    console.log(context.state);
  return(
    <>
  
    <Form onSubmit={(e)=>{ e.preventDefault();
                addWish(textInput.current.value)
                  }} className="mt-4 ">
        <Form.Group>
          <Form.Control type="text" placeholder="Enter your wishes"  ref={textInput}/>
        </Form.Group>
        <Button className="btn btn-warning" variant="primary" type="submit">Make ur wish happen</Button>
    </Form>
    
    
    </>
  )
}

export default WishesPortal;
