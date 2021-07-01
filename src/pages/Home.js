import React, { useEffect, useState } from 'react';
import '../assets/styles/home.css';
import { RightOutlined } from '@ant-design/icons';
import { Popdetails, Section, Section2 } from '../components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
  var det = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  const[value, setValue] = useState(0);
  const[name, setName] = useState("");
  const[detail, setDetail] = useState("");
  const[hours, setHours] = useState("");
  const[cuisine, setCuisine] = useState("");
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.7,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "2px"

    };
    useEffect(() => {
        document.getElementsByClassName("sec-3-con-3")[0].addEventListener("mouseenter", function() {
            document.getElementsByClassName("img-container")[0].style.width = "350px";
        });
        document.getElementsByClassName("sec-3-con-3")[0].addEventListener("mouseleave", function() {
            const style = getComputedStyle(document.getElementsByClassName("img-container")[0]);
            if (style.width <= "350px") {
                document.getElementsByClassName("img-container")[0].style.width = "0px";
            }
        });
        document.getElementsByClassName("sec-3-con-3")[0].addEventListener("click", function() {
            document.getElementsByClassName("img-container")[0].style.minWidth = "500px";
            document.getElementsByClassName("parent-sec-con")[0].style.display = "none";
            document.getElementsByClassName("res-img-1")[0].style.opacity = "1";
            document.getElementsByClassName("pop-container")[0].style.display = "flex";
            setName("Restaurant Veranda");
            setDetail(det);
            setHours("7:00am – 10:30 am | 6:30pm – 21:30pm (last order)");
            setCuisine("Casual alpine dining");
            setValue(0);
        });
        document.getElementsByClassName("sec-3-con-3")[1].addEventListener("mouseenter", function() {
            document.getElementsByClassName("img-container")[1].style.width = "350px";
        });
        document.getElementsByClassName("sec-3-con-3")[1].addEventListener("mouseleave", function() {
            const style1 = getComputedStyle(document.getElementsByClassName("img-container")[1]);
            if (style1.width <= "350px") {
                document.getElementsByClassName("img-container")[1].style.width = "0px";
            }
        });
        document.getElementsByClassName("sec-3-con-3")[1].addEventListener("click", function() {
            document.getElementsByClassName("img-container")[1].style.minWidth = "500px";
            document.getElementsByClassName("parent-sec-con")[0].style.display = "none";
            document.getElementsByClassName("res-img-1")[1].style.opacity = "1";
            document.getElementsByClassName("pop-container")[0].style.display = "flex";
             setName("Le Bar");
            setDetail(det);
            setHours("7:00am – 11:30 am | 5:30pm – 21:30pm (last order)");
            setCuisine("Casual alpine dining");
            setValue(1);
        });
        document.getElementsByClassName("sec-3-con-3")[2].addEventListener("mouseenter", function() {
            document.getElementsByClassName("img-container")[2].style.width = "350px";
        });
        document.getElementsByClassName("sec-3-con-3")[2].addEventListener("mouseleave", function() {
            const style2 = getComputedStyle(document.getElementsByClassName("img-container")[2]);
            if (style2.width <= "350px") {
                document.getElementsByClassName("img-container")[2].style.width = "0px";
            }
        });
        document.getElementsByClassName("sec-3-con-3")[2].addEventListener("click", function() {
            document.getElementsByClassName("img-container")[2].style.minWidth = "500px";
            document.getElementsByClassName("parent-sec-con")[0].style.display = "none";
            document.getElementsByClassName("res-img-1")[2].style.opacity = "1";
            document.getElementsByClassName("pop-container")[0].style.display = "flex";
            setName("Marie's Deli");
            setDetail(det);
            setHours("7:00am – 11:30 am | 5:30pm – 21:30pm (last order)");
            setCuisine("Casual alpine dining");
            setValue(2);
        });
        document.getElementsByClassName("sec-3-con-3")[3].addEventListener("mouseenter", function() {
            document.getElementsByClassName("img-container")[3].style.width = "350px";
        });
        document.getElementsByClassName("sec-3-con-3")[3].addEventListener("mouseleave", function() {
            const style3 = getComputedStyle(document.getElementsByClassName("img-container")[3]);
            if (style3.width <= "350px") {
                document.getElementsByClassName("img-container")[3].style.width = "0px";
            }
        });
        document.getElementsByClassName("sec-3-con-3")[3].addEventListener("click", function() {
            document.getElementsByClassName("img-container")[3].style.minWidth = "500px";
            document.getElementsByClassName("parent-sec-con")[0].style.display = "none";
            document.getElementsByClassName("res-img-1")[3].style.opacity = "1";
            document.getElementsByClassName("pop-container")[0].style.display = "flex";
            setName("In Room Dinning");
            setDetail(det);
            setHours("7:00am – 11:30 am | 5:30pm – 21:30pm (last order)");
            setCuisine("Casual alpine dining");
            setValue(3);
        });
    });
    const placeImages = () => {
         const array = [];
         for(var i =0; i<10; i++)
         {
           array.push(
               <img className={`gallery-img gallery-img-${i}`} alt="" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
            );
         }
         return array;
    }
    return (
        <div className="homepage-container">
           <section className="header-img-holder">
              <div className="heading">
                <div className="left-line"></div>
                <p className="header-text">the</p>
                <div className="right-line"></div>
              </div>
              <div className="sub-heading">
                <p className="header-sub-heading"><span className="t-1">Magical Place</span><br/> <span className="inner-sub">in</span> McLeodGanj</p>
                <div className="header-exp">
                <p className="exp-btn">Explore More</p>
                <RightOutlined className="right-arrow"/>
                </div>
              </div>
           </section>
           <section className="max-parent-container">
           <Section/>
           <section className="room-container">
             <div>
               <div className="room-header">
                  <p>0 2</p>
                    <div className="line-style"></div>
                    <p>Explore</p>
               </div>
               <p className="main-r-heading">ROOMS & SUITE</p>
             </div>
             <div className="text-r-container">
             <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
             </div>
             <div className="carousel-container">
            <Slider 
            className="slider"
            {...settings}>
      <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
       <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
       <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
       <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
       <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
       <div className="room-card">
        <div className="room-img-container">
        <img className="room-img" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="room-info">
          <div className="line-room"></div>
          <p className="room-type">Standard Room</p>
        </div>
      </div>
    </Slider>
             </div>
           </section>
           <section className="sec-3">
           <div className="img-container">
             <img  className="res-img-1" src="https://images.unsplash.com/photo-1549455663-fcc2db26bc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
           </div>
           <div className="img-container">
             <img  className="res-img-1" src="https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=281&q=80" />
           </div>
           <div className="img-container">
             <img  className="res-img-1" src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
           </div>
           <div className="img-container">
             <img  className="res-img-1" src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=303&q=80" />
           </div>
           <div className="parent-sec-con">
             <div className="sec-3-con-2">
               <p>0 3</p>
               <div className="sec-3-line"></div>
               <p>RESTAURANTS & BARS</p>
             </div>
             <div className="sec-3-con-3" >
               <div className="k-1"></div>
               <p>Restaurant Veranda</p>
             </div>
             <div className="sec-3-con-3">
               <div className="k-1"></div>
               <p>Le Bar</p>
             </div>
             <div className="sec-3-con-3">
               <div className="k-1"></div>
               <p>Marie's Deli</p>
             </div>
             <div className="sec-3-con-3">
               <div className="k-1"></div>
               <p>In Room Dinning</p>
             </div>
           </div>
           <Popdetails name={name} details={detail} hours={hours} cuisine={cuisine} value={value}/>
           </section>
           <Section2/>
           <section className="contact-section">
             <div className="contact-parent-container">
               <p className="contact-line">If you have any<br/> question feel free to<br/> contact us!</p>
               <button className="contact-btn">Contact Us</button>
             </div>
           </section>
           <section className="gallery-section">
             <div className="gallery-header">
               <p>0 5</p>
                    <div className="line-style"></div>
                    <p>Gallery</p>
             </div>
             <p className="gallery-heading">Checkout Our Images</p>
             <div className="grid-parent">
               {placeImages()}
             </div>
           </section>
           </section>
        </div>
    );
}
export default Home;