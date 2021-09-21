import React, { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component{
    state={
        users:[],
        wishes:[]
    }       

    handlerSubmit = () =>{
        console.log("hello from gandhi...");
    } 

    render(){
        return(
            <MyContext.Provider value={{Submit:this.handlerSubmit}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}   

export{MyContext,MyProvider};