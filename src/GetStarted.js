import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { NavLink } from "react-router-dom"

// Images
import logo from "./assets/logo.svg";

const GetStarted = () => {
    let logoImage = useRef(null);

    // useEffect( () => {
    //     gsap.from(logoImage, 0.8, {
    //         delay: .8,
    //         ease: "Linear.easeNone",
    //         y: "500px",
    //         zIndex: "-100",
    //         stagger: {
    //             amount: 1
    //         }
    //     })
    
    // }, [logoImage])

    return(
        <React.Fragment>
            <header className="homepageHeader">
                <div className="logoContainer" ref={el => (logoImage = el)}>
                    <img src={logo} alt="YYZ Local" />
                </div>
                <NavLink className="startLink" to="/search" exact>
                    Let's get started.
                </NavLink>
            </header>
        </React.Fragment>
    )
}

export default GetStarted;