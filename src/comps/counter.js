import React,{Component} from 'react';

class Counter extends Component{
  

    render(){
        return(

        <div>
            <h2>Count down to {this.props.appDate}</h2>
            <h2>Days: XX</h2>
        </div>
        
        )  
    }
}

export default Counter;