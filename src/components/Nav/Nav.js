import React,{useState} from 'react';
import '../../assets/styles/nav.css';
import pin from '../../assets/vectors/pin.svg';
import menu from '../../assets/vectors/menu.svg';
import { Menu } from '../../components';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const OpenMenu = () => {
      if(menuOpen == false){
      document.getElementsByClassName("menu-container")[0].style.top = "0";
      document.getElementsByClassName("max-parent-container")[0].style.display = "none";
      setMenuOpen(true);
        document.getElementsByClassName("text-menu")[0].style.transform = "translate3d(0,-100%,0)";
        document.getElementsByClassName("text-menu")[1].style.transform = "translate3d(0,-100%,0)";
    }
    if(menuOpen == true){
      document.getElementsByClassName("menu-container")[0].style.top = "-800px"
      document.getElementsByClassName("max-parent-container")[0].style.display = "block";
      setMenuOpen(false);
      document.getElementsByClassName("text-menu")[0].style.transform = "translate3d(0,0%,0)";
        document.getElementsByClassName("text-menu")[1].style.transform = "translate3d(0,0%,0)";
    }
  }
	return (
       <div className="nav-container">
        <div className="nav-con-1">
       	  <img src={pin} className="location-img"/>
       	  <p style={{color:"white"}}>+19 94 183 50 161</p>
        </div>
        <img className="nav-logo" src="https://www.flaticon.com/svg/vstatic/svg/1409/1409946.svg?token=exp=1619433067~hmac=c2956ffe1687fe757b667cb400970296" />
        <div className="nav-con-2">
          <button className="nav-btn">Book your story</button>
          <div className="nav-con-3" onClick={OpenMenu}>
          	<img src={menu} className="nav-menu-icon" />
            <div className="animated-content">
          	<p className="text-menu" style={{color:"white"}}>MENU</p>
            <p className="text-menu" style={{color:"white"}}>CLOSE</p>
            </div>
          </div>	
        </div>
        <Menu />
       </div>
		);
}
export default Nav;