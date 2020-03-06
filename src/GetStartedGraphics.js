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
    // Rolling hills
    let background = useRef(null);
    let middleground = useRef(null);
    let foreground = useRef(null);

    // Sun and clouds
    let sunAnimation = useRef(null);
    let cloud1Animation = useRef(null);
    let cloud2Animation = useRef(null);

    useEffect( () => {
        gsap.from(sunAnimation, 2, {
            delay: 4,
            ease: "Linear.easeNone",
            y: "500px",
            x: "500px",
        })
        gsap.from(cloud1Animation, 90, {
            delay: 5,
            ease: "SlowMo.ease",
            x: "-110vw",
            repeat: -1, 
            yoyo: false, 
            repeatDelay: 2,
        })
        gsap.from(cloud2Animation, 120, {
            delay: 6,
            ease: "SlowMo.ease",
            x: "-110vw",
            repeat: -1, 
            yoyo: false, 
            repeatDelay: 2,
        })
        gsap.from(background, 1, {
            delay: 1,
            ease: "Linear.easeNone",
            y: "100vh",
        })
        gsap.from(middleground, 1, {
            delay: 2,
            ease: "none",
            y: "110vh",
        },)
        gsap.from(foreground, 2, {
            delay: 3,
            ease: "none",
            y: "110vh",
        })
    }, [sunAnimation, cloud1Animation, cloud2Animation, background, middleground, foreground]);

    return(
        <React.Fragment>
            <div className="graphicsContainer">
                <div className="backgroundLayer">
                    <img src={backgroundLayer} alt="" ref={el => (background = el)} />
                </div>
                <div className="middleGroundLayer">
                    <img src={middleGroundLayer} alt="" ref={el => (middleground = el)} />
                </div>
                <div className="foregroundLayer">
                    <img src={foregroundLayer} alt="" ref={el => (foreground = el)} />
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