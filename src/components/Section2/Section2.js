import React from 'react';
import { RightOutlined } from '@ant-design/icons';
const Section2 = () => {
    return (
        <section className="sec-2">
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
           </section>
    );
}
export default Section2;