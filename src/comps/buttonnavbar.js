import React,{Component} from 'react';
import './buttonnavbar.css';

class ButtonNavbar extends Component{

    state = {
        value: this.props.valueButton,
        };
    
  


    render(){
        return(
        <button id="buttonMenu" onClick={() => this.props.trigger(this.state.value)}>
                 {this.state.value}
        </button>
        
        
        )  
    }
}

export default ButtonNavbar;