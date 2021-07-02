import React from 'react';
import facebooklogo from '../../assets/vectors/facebook-icon.svg';
import instalogo from '../../assets/vectors/instagram-icon.svg';
import twitterlogo from '../../assets/vectors/twitter-icon.svg';
import pinlogo from '../../assets/vectors/pinterest-icon.svg';
import '../../assets/styles/footer.css';
const Footer = () => {
	return(
       <footer className="ftr">
        <div className="parent-footer-container">
          <div className="footer-container">
          	<img alt="hotel-logo" src=""/>
          	<p className="color-offwhite line-style-1">Enjoy the best holidays of<br/> your life with Hotel Bhagsu</p>
          </div>
          <div className="footer-container">
          	<p className="color-white">Explore</p>
          	<ul className="ul-1 color-offwhite">
          	  <li className="style-1">Home</li>
          	  <li className="style-1">About</li>
          	  <li className="style-1">Capabilitites</li>
              <li className="style-1">Contact Us</li>	
          	</ul>
          </div>
          <div className="footer-container">
          	<p className="color-white">Visit</p>
            <p className="color-offwhite line-style-1">Envoy So. California<br/> 34 Tesla, Site 100<br/> Irivine, Ca, USA 92618</p>
          </div>
          <div className="footer-container">
          	<p className="color-white">Follow</p>
          	<ul className="ul-2 color-offwhite">
          	  <li className="style-1">Instagram</li>	
          	  <li className="style-1">Twitter</li>
          	  <li className="style-1">Facebook</li>
          	</ul>
          </div>
          <div className="footer-container">
          	<p className="color-white">Reach Us</p>
          	<ul>
          	  <li className="line-style-1 color-offwhite">ashunegi12@gmail.com</li>
          	  <li className="line-style-1 color-offwhite">+91 8954123490</li>	
          	</ul>
          </div> 
        </div> 
        <p className="color-offwhite des-p">@ 2021 Envoy. All Rights Reserved.</p> 
       </footer>
		);
}
export default Footer;