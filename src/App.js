import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./comps/counter"
import Navbar from "./comps/navbar"
import Input from "./comps/input"
import ButtonNavbar from "./comps/buttonnavbar"


import { render } from '@testing-library/react';
import HomePage from './comps/homepage';
import AboutPage from './comps/aboutpage';
import GalleryPage from './comps/gallerypage';
//import $ from 'jquery';

class App extends Component {
  state = {
    homepageVisible : true,
    aboutpageVisible : false,
    gallrypageVisible : false,
  };

  updateaaaa = (x) => {
    switch(x) {
      case 'בית':
        this.setState({homepageVisible:true});
        this.setState({aboutpageVisible:false});
        this.setState({gallrypageVisible:false});
        break;
      case 'על עצמי':
        this.setState({homepageVisible:false});
        this.setState({aboutpageVisible:true});
        this.setState({gallrypageVisible:false});
        break;
      case 'גלריה':
        this.setState({homepageVisible:false});
        this.setState({aboutpageVisible:false});
        this.setState({gallrypageVisible:true});
        break;
      default:
        alert('לא פעיל')

    }
   
    
};

//This function act when the page is loading for the first time
componentDidMount() {
  console.log('componentDidMount() lifecycle');
  this.setState({homepageVisible:true});
  
}
  render(){
  return (
    <div className="App">

      <Navbar triggeraaa={(i) => this.updateaaaa(i)}/>

      {this.state.homepageVisible ? <HomePage/> : null}
      {this.state.aboutpageVisible ? <AboutPage/> : null}
      {this.state.gallrypageVisible ? <GalleryPage/> : null}

      {/* <Counter appDate={this.state.jk}/> */}
      
      {/* <input defaultValue="Ron"/>
                <button onClick={this.changeDate} className="btn btn-success">click Here!</button> */}
          
      
  </div>
  
  );
}

}

export default App;
