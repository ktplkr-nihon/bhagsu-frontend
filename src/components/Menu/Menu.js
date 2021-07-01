import React,{useEffect, useState} from 'react';
import '../../assets/styles/menu.css';
const Menu = () => {
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
          	<li className="l-1 cursor">Home</li>
          	<li className="l-2 cursor">Gallery</li>
          	<li className="l-3 cursor">Rooms</li>
          	<li className="l-4 cursor">Contact us</li>
          </ul>
        </div>
		);
}
export default Menu;