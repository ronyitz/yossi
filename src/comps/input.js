import React,{Component} from 'react';

class Input extends Component{
    render(){
        return(
            <div>
                <input defaultValue="Ron"/>
                <button className="btn btn-success">click Here!</button>
            </div>
        
        
        )  
    }
}

export default Input;