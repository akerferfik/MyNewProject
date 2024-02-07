import { Link  } from 'react-router-dom'
import img1 from "../../assets/images/img1.png"

function Nav(props) {
    return (
        <div className='nav-menu'>
        <div className="left-nav">
            <h2>
                <Link to={"/"}>
                 <img src={img1} 
            alt="Воздушный Шарик"
            width={30}
            height={40} />
                </Link>
            </h2>
        </div> 
        <div className='right-nav'>
           <div className='links'>
        <Link to={"/about"}>
         Главная
        </Link>
        <Link to={ "/excursions"}>
        Экскурсии
        </Link>
        <Link to={"/kabinet"}>
        Личный кабинет
        </Link>
           </div>
        </div>
        </div>
        
      );
}

export default Nav;