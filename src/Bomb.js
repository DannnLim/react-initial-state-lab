// your Bomb code here!
import React from "react";

class Bomb extends React.Component{
    constructor(props){
        super()
        this.state ={
            secondsLeft: props.initialCount
        }
    }
    render(){
    if (this.state.secondsLeft === 120){
        return ('120 seconds left before I go boom!')
    }else if (this.state.secondsLeft === 0){
        return ('Boom!')
    }
        
    
    }
}

export default Bomb;