import './style.scss'
import { Link} from "react-router-dom"
import vk from  "../../assets/images/Vk.png"
import ins from  "../../assets/images/Instagram.png"
import fac from  "../../assets/images/Facebook.png"


function First() {
    return ( 
        <div className="first-page">
            <div className="second-page">
                 <div className="name-page">
                <h1 className='h1'>Путешествуй</h1>
                <h3>вместе с</h3>
                <h1 className="pero">PERO TRAVEL</h1>
                <button className="excursion">К экскурсиям ➡</button>
            </div>
            
            </div>
           
           
        </div>
     );
}

export default First;