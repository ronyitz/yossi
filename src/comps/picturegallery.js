import React,{Component} from 'react';
import './picturegallery.css';

class PictureGallery extends Component{

    state = {
        valueImage: this.props.data,
        nameImage: this.props.namePicture,
        descImage: this.props.descPicture,
    };

    
    render(){
        return(
    <div className="divphoto" onClick={() => this.props.openImage(this.state.nameImage, this.state.descImage,this.state.valueImage)}>
    <img className="photo" src={this.state.valueImage} >
              </img>
              <div  className="descr">{this.state.nameImage}</div>

</div>
            
        
        
        )  
    }
}

export default PictureGallery;