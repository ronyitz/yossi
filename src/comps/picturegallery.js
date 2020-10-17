import React,{Component} from 'react';
import './picturegallery1.css';


class PictureGallery extends Component{

    state = {
        valueImage: this.props.data,
        nameImage: this.props.namePicture,
        descImage: this.props.descPicture,
        id: this.props.id,
        tags: this.props.tags,
    };

    
    render(){
        return(
    <div tags={this.state.tags} id={this.state.id} className="divphoto" onClick={() => this.props.openImage(this.state.nameImage, this.state.descImage,this.state.valueImage, this.state.id)}>
    <img className="photo" src={this.state.valueImage}  >
              </img>
              <div  className="descr">{this.state.nameImage}</div>

</div>
            
        
        
        )  
    }
}

export default PictureGallery;