import React,{Component} from 'react';
import './homepage3.css';

import home1 from './1home.png';


class HomePage extends Component{
    
    componentDidMount() {
        var i=0;
        
        //The images for the slideshow
        // https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/10906061_833639286702801_261146322573433243_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=ey_4zJeS7pUAX9VbrxP&_nc_ht=scontent.fsdv3-1.fna&oh=481c28b363779d75df0d4f4477deefe1&oe=5FA19A34
        const image1 = {home1};
        const image2 = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/428372_276265922440143_490878121_n.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=Oa-64VE6aWsAX-VIHpB&_nc_ht=scontent.fsdv3-1.fna&oh=f43e7611303af013331e6c17310e2eb6&oe=5FA3903A";
        const image3 = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/600112_378163465583721_314187900_n.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_ohc=cCg3VhngXmIAX_WjQfC&_nc_ht=scontent.fsdv3-1.fna&oh=c4453148c169e9c82226f734c985a7a9&oe=5FA0DAE1";

        const imageArray = [image1,image2,image3];
        const imageArrayLen = imageArray.length;

        const bodyElt = document.getElementById("home");
        bodyElt.style.backgroundImage = `url(`+image1+`)`;
        
        setInterval(function() {
            
            bodyElt.style.backgroundImage = `url(`+imageArray[i]+`)`;
            if(i===imageArrayLen-1){
                i=0
            }else{
                i++;
            }
        }, 4000);
    }

    render(){
        return(
            <div id="home" >
               <div className="subdiv" id="yossi">
                יוסי יצחק
                </div>

            </div>
        
        
        )  
    }
}

export default HomePage; 