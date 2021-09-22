import React, { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component{
    state={
        users:[],
        wishes:[],
        page:1,
    }       

 
    addWish = (wish) =>{
        this.setState((prevState)=>({
            wishes:[...prevState.wishes,wish],page:3
        }))
    }
  
    changeState = ()=>{
        this.setState(()=>({
            page:"2"
        }))
    }
    addUser = (email)=>{
        this.setState((prevState)=>({
            users:[...prevState.users,email],page:2
        }))
    }
    goToLanding = () =>(
        this.setState((prevState)=>({
            page:1
        }))
    )

    render(){
        return(
            <MyContext.Provider value={{state:this.state,goTolandingPage:this.goToLanding,addEmail:this.addUser,addWishes:this.addWish,changeState:this.changeState}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}   

export{MyContext,MyProvider};