import React, { useContext,useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { MyContext } from '../context';

const LandingPage = () =>{

    const textInput = useRef();
    const context = useContext(MyContext);

  return(
    <>
    <Form onSubmit={(e)=>{        e.preventDefault();
                  context.Submit()}} className="mt-4 ">
        <Form.Group>
            <Form.Control type="email" placeholder="Enter your email"  ref={textInput}/>
        </Form.Group>
        <Button className="btn btn-warning" variant="primary" type="submit">
            Add Player
        </Button>
    </Form>
    </>
  )
}

export default LandingPage;
