import React, { useContext,useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { MyContext } from '../context';

const LandingPage = () =>{
    const textInput = useRef();
    const context = useContext(MyContext);

    const addEmail = (email) =>{
      const  array = context.state.users;
        if(array.includes(email)){
            console.log("one wish only");
        }else{
          context.addEmail(email);

        }
    }
    console.log(context.state);


  return(
    <>
    <Form onSubmit={(e)=>{ e.preventDefault();
                addEmail(textInput.current.value)
                  }} className="mt-4 ">
        <Form.Group>
          <Form.Control type="email" placeholder="Enter your email"  ref={textInput}/>
        </Form.Group>
        <Button className="btn btn-warning" variant="primary" type="submit">Add Player</Button>
    </Form>
    </>
  )
}

export default LandingPage;
