import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

// Images
import backgroundLayer from "./assets/backgroundLayer.svg";
import middleGroundLayer from "./assets/middleGroundLayer.svg";
import foregroundLayer from "./assets/foregroundLayer.svg";
import sun from "./assets/sun.svg";
import cloud1 from "./assets/cloud1.svg";
import cloud2 from "./assets/cloud2.svg";

function GetStartedGraphics() {
    let sunAnimation = useRef(null);
    let cloud1Animation = useRef(null);
    let cloud2Animation = useRef(null);

    useEffect( () => {
    gsap.from(sunAnimation, 2, {
        delay: 1,
        ease: "Linear.easeNone",
        y: "500px",
        x: "500px",
    })
    gsap.from(cloud1Animation, 60, {
        delay: 3,
        ease: "none",
        x: "-110vw",
    },)
    gsap.from(cloud2Animation, 120, {
        delay: 5,
        ease: "none",
        x: "-110vw",
    })
    }, [sunAnimation, cloud1Animation, cloud2Animation]);

    return(
        <React.Fragment>
            <div className="graphicsContainer">
                <div className="backgroundLayer">
                    <img src={backgroundLayer} alt="" />
                </div>
                <div className="middleGroundLayer">
                    <img src={middleGroundLayer} alt="" />
                </div>
                <div className="foregroundLayer">
                    <img src={foregroundLayer} alt="" />
                </div>
                <div className="sunAndClouds">
                    <img src={sun} alt="" className="sunImage" ref={el => (sunAnimation = el)} />
                    <img src={cloud1} alt="" className="cloudImage cloud1" ref={el => (cloud1Animation = el)} />
                    <img src={cloud2} alt="" className="cloudImage cloud2" ref={el => (cloud2Animation = el)} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default GetStartedGraphics;