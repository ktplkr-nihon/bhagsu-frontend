import React from "react";
import FadeIn from 'react-fade-in';
import AOS from 'aos';
import { RightOutlined } from '@ant-design/icons';
const Section = () => {
     AOS.init();
	return(
         <section className="sec-2" data-aos="fade-up">
              <div className="welcome-container">
                <div className="welcome-p-1">
                  <div className="wel-cont-1">
                    <p>0 1</p>
                    <div className="line-style"></div>
                    <p>Welcome</p>
                  </div>
                  <p className="wel-text">TO THE MAGICAL PLACE IN DHARAMSHALA</p>
                  <p className="wel-info">The Hotel Mirabeau is tranquilly situated, only a few minutes’ walk from the Zermatt main railway station, and the famous Gornergrat station. A traditional family resort, it is owned by the second and managed by the third generation of the Julen family. Le Mirabeau is famous for “l’art de vivre” or the “fine way of life”; with its extensive gastronomic offering featuring several restaurants and bars; and the superb wellness facilities, complemented by magnificent views of the Matterhorn.</p>
                  <div className="wel-exp-cont">
                    <RightOutlined className="arrow-wel" />
                    <p className="exp-wel-text">Explore More</p>
                  </div>
                </div>
                <div className="welcome-p-2">
                  
                </div>
              </div>
              <div className="line-container">
               <div className="flex">
                <p className="temp-line">10 <span className="inner-temp">MAY</span></p>
                <p className="temp-line-2">2021</p>
               </div> 
                <div className="line-1"></div>
                <div className="flex">
                <p className="temp-line">08:56 <span className="inner-temp">AM</span></p>
                <p className="temp-line-2">Current Time</p>
                </div>
                <div className="line-1"></div>
                <div className="flex">
                <p className="temp-line">3° <span className="inner-temp">C</span></p>
                <p className="temp-line-2">Overcast Clouds</p>
                </div>
              </div>
           </section>
		);
}
export default Section;