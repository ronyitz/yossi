import React,{Component} from 'react';
import './gallerypage2.css';
import PictureGallery from './picturegallery.js';
import Modal from 'react-modal';

class GalleryPage extends Component{

    state = {
        isOpenModal: false,
        modalHeader: 'noneHeader',
        modaldescription: 'noneDescription',
        modalImage: 'noneImage',
    };


    openImageModal = (x,y,z) => {  
       this.setState({
        isOpenModal: true,
        modalHeader: x,
        modaldescription: y,
        modalImage: z,
      });
    };


    closeModal = () => {
        this.setState({
         isOpenModal: false,
       });
     };



    render(){
        return(
            <div id="gallery">
                <h1>
                     גלריה   
                </h1>
                {/*  סינון לפי קטגוריה:  */}<p>
                     <a>הכל</a> 
                     <a>טבע</a> 
                     <a>נוף</a> 
                     <a>דומם</a> 
                     <a>פורטרייט</a> 
                     </p>
                     

                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/93289191_3047649078635133_4545036934971392000_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=zRxCqAkiSeYAX-k0rm_&_nc_ht=scontent.fsdv3-1.fna&oh=d93278ea37c3cc5e50da6bddfdb5f801&oe=5FA3EEE3" namePicture="הקורונה בכדור הארץ" descPicture="בלה בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה"  openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/1235442_1021532674580127_3544702893172296906_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=oHj6B8XlkuUAX-ZMRjK&_nc_ht=scontent.fsdv3-1.fna&oh=eca70a3dc0cc301e0258451ab4d9bf2e&oe=5FA1F271" namePicture="יעלים בים המלח" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/12376076_1021533144580080_744696624862508185_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=mFsiwpRKVOMAX9IXfIh&_nc_ht=scontent.fsdv3-1.fna&oh=bf23658d21797f36134397c0a69c22d8&oe=5FA4EB88" namePicture="עיר דוד בזהב" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/10906106_833639266702803_4310530124898233377_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=qm7rca-_fJgAX_Ri3S_&_nc_ht=scontent.fsdv3-1.fna&oh=94f0e0b61e1122229d21d533d821986c&oe=5FA3EFEA" namePicture="אגם פסטורלי" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/292477_378160815583986_2114739086_n.jpg?_nc_cat=103&_nc_sid=cdbe9c&_nc_ohc=_hhOjT57iLIAX8vxhb2&_nc_ht=scontent.fsdv3-1.fna&oh=7b531bec835594b81e535977cc6f2a34&oe=5FA4545A" namePicture="קונכייה וים" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/428372_276265922440143_490878121_n.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=Oa-64VE6aWsAX-VIHpB&_nc_ht=scontent.fsdv3-1.fna&oh=f43e7611303af013331e6c17310e2eb6&oe=5FA3903A" namePicture="שקיעה אדמדמה בשעת בית ערביים" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/62322664_2406233709443343_6341752553822224384_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=CJNDsXvCwwAAX_jnETJ&_nc_ht=scontent.fsdv3-1.fna&oh=6a1fac615593608163256458733aa466&oe=5FA40BB6" namePicture="מנקה רחוב" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                    <PictureGallery data="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/36305654_1887102101356509_1958468072947843072_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=r-U8aemaSrIAX9RLoGw&_nc_ht=scontent.fsdv3-1.fna&oh=ecca1ad270ec883fa3c5132de041df1e&oe=5FA3A803" namePicture="דרום אדום בשוקדה" descPicture=" בלה בלה בלה בלה בלה בלה תיאור של התמונה בלה בלה בלה בלה בלה כמה מילים בלה בלה בלה בלה בלה בלה" openImage={(namePicture,descPicture,data) => this.openImageModal(namePicture,descPicture,data)}/>
                   

                    <Modal id="modalPicture"  isOpen={this.state.isOpenModal}>
                        
                    <div id="imageLeftSide">
                       
                       <img id="photo2221" src={this.state.modalImage} />
                           
                           </div>
   
                           <div id="imageRightSide">
                       
                           <h2 >
                            {this.state.modalHeader}
                        </h2>

                        <p>
                        {this.state.modaldescription}
                        </p>
                     

                      
                        <button class="btn btn-danger" id="closebutton" onClick={() => this.closeModal()}>סגור</button>
                           </div>
   



                    </Modal>

            </div>
        
        
        )  
    }
}

export default GalleryPage;