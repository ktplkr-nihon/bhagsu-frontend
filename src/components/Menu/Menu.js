import React,{useEffect, useState} from 'react';
import '../../assets/styles/menu.css';
import { Link } from 'react-router-dom';
const Menu = () => {
  const Reload = () => {
    setTimeout(function(){window.location.reload();},0);

  }
	const [value, setValue] = useState("");
	 useEffect(() => {
      document.getElementsByClassName("l-1")[0].addEventListener("mouseenter", 
      	function()
      	{ var x = document.getElementsByClassName("l-1")[0].innerHTML;
      	         document.getElementsByClassName("Background-value")[0].style.left="10%";
      	 setValue(x);
      	      	});
      document.getElementsByClassName("l-1")[0].addEventListener("mouseleave", 
      	function()
      	{document.getElementsByClassName("Background-value")[0].style.left="-1000px";
      	      	});
      document.getElementsByClassName("l-2")[0].addEventListener("mouseenter", 
      	function()
      	{ var x = document.getElementsByClassName("l-2")[0].innerHTML;
      	document.getElementsByClassName("Background-value")[0].style.left="10%";
      	 setValue(x);
      	      	});
       document.getElementsByClassName("l-2")[0].addEventListener("mouseleave", 
      	function()
      	{document.getElementsByClassName("Background-value")[0].style.left="-1000px";
      	      	});
      document.getElementsByClassName("l-3")[0].addEventListener("mouseenter", 
      	function()
      	{ var x = document.getElementsByClassName("l-3")[0].innerHTML;
      	document.getElementsByClassName("Background-value")[0].style.left="10%";
      	 setValue(x);
      	      	});
       document.getElementsByClassName("l-3")[0].addEventListener("mouseleave", 
      	function()
      	{document.getElementsByClassName("Background-value")[0].style.left="-1000px";
      	      	});
      document.getElementsByClassName("l-4")[0].addEventListener("mouseenter", 
      	function()
      	{ var x = document.getElementsByClassName("l-4")[0].innerHTML;
      	document.getElementsByClassName("Background-value")[0].style.left="10%";
      	 setValue(x);
      	  document.getElementsByClassName("l-4")[0].addEventListener("mouseleave", 
      	function()
      	{document.getElementsByClassName("Background-value")[0].style.left="-1000px";
      	      	});
      	      	});
  });
	return(
        <div className="menu-container">
          <div className="Background-value">{value}</div>
          <ul className="list-container">
           <Link className="cursor" to="/" onClick={Reload}>
          	<li className="l-1 cursor">Home</li>
           </Link>
          	<li className="l-2 cursor">Gallery</li>
          	<li className="l-3 cursor">Rooms</li>
            <Link className="cursor" to="/contactus" onClick={Reload}>
          	<li className="l-4 cursor">Contact us</li>
            </Link>
          </ul>
        </div>
		);
}
export default Menu;