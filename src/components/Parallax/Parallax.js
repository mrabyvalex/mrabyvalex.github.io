import React from 'react';
import "./Parallax.scss";
import background from "../../assets/bg_img_v2.jpg";
import Typewriter from '../TypeWriter/Typewriter';


const Parallax = () => {
    const getBg = ()=>  `url(${background})`
    return (<>

        <section class="parallax-container" style={{backgroundImage:getBg("home")  }}>
        <Typewriter/>

        </section>

        <section class="buffer"></section>

        <section class="parallax-container parallax-container2">
            <div class="card">
                <div class="card-img"></div>
                <h3>Hiking</h3>
                <p>
                    Explore the myriad of trails through the mountaineous. Choose the
                    difficulty appropriate to your fitness level.
                </p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <div class="card-img"></div>
                <h3>Rock climbing</h3>
                <p>
                    The goal is to reach the summit of a formation or the endpoint of a
                    usually pre-defined route without falling
                </p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <div class="card-img"></div>
                <h3>Caving</h3>
                <p>
                    Exploring underground through networks of tunnels and passageways,
                    which can be natural or artificial.
                </p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <div class="card-img"></div>
                <h3>Paragliding</h3>
                <p>
                    Get lift off from the mountain and enjoy through the splendor of the
                    surrounding landscape by parachute.
                </p>
                <a href="#">Learn more</a>
            </div>
        </section>

        <section class="buffer"></section>
    </>)
}

export default Parallax;