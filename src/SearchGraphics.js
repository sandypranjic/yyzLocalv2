import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

// Images
import searchBackground from "./assets/searchBackground.svg";
import searchMiddleGround from "./assets/searchMiddleGround.svg";
import searchForeground from "./assets/searchForeground.svg";

const SearchGraphics = () => {
    let background = useRef(null);
    let middleground = useRef(null);
    let foreground = useRef(null);

    useEffect( () => {
        gsap.from(background, 1, {
            delay: 2,
            ease: "Linear.easeNone",
            y: "100vh",
        })
        gsap.from(middleground, 1, {
            delay: 3,
            ease: "none",
            y: "110vh",
        },)
        gsap.from(foreground, 2, {
            delay: 4,
            ease: "none",
            y: "110vh",
        })
    }, [background, middleground, foreground]);

    return (
        <React.Fragment>
            <div className="searchGraphicsContainer">
                <div className="searchBackground">
                    <img src={searchBackground} alt="" ref={el => (background = el)} />
                </div>
                <div className="searchMiddleGround">
                    <img src={searchMiddleGround} alt="" ref={el => (middleground = el)} />
                </div>
                <div className="searchForeground">
                    <img src={searchForeground} alt="" ref={el => (foreground = el)} />
                </div>

            </div>
        </React.Fragment>
    );
}

export default SearchGraphics;