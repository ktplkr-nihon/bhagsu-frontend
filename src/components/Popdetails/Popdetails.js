import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';
const Popdetails = ({name, details, hours, cuisine, value}) => {
       const closeDrawer = () => {
            document.getElementsByClassName("img-container")[value].style.minWidth = "0px";
            document.getElementsByClassName("parent-sec-con")[0].style.display = "block";
            document.getElementsByClassName("res-img-1")[value].style.opacity = "0.5";
            document.getElementsByClassName("pop-container")[0].style.display = "none";
       }
	return(
        <div className="pop-container">
        	<div className="exit-cross">
        	  <CloseOutlined className="cross" onClick={closeDrawer}/>	
        	</div>
        	<div>
        	  <p className="heading-detail">{name}</p>
        	  <p className="sub-heading-details">{details}</p>	
        	</div>
        	<div className="detail-1">
        		<p>Opening hours</p>
        		<p>{hours}</p>
        	</div>
        	<div className="detail-1">
        		<p>Cuisine</p>
        		<p>{cuisine}</p>
        	</div>
        	<div className="detail-2">
               <RightOutlined className="right-out"/>
               <p>Explore More</p>
        	</div>
        </div>
		);
}
export default Popdetails;