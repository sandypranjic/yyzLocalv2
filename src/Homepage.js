import React from 'react';

// Components
import GetStarted from "./GetStarted.js";
import GetStartedGraphics from "./GetStartedGraphics.js";

const Homepage = () => {
    return ( 
        <React.Fragment>
            <section className="homepageContainer">
                <GetStarted></GetStarted>
                <GetStartedGraphics></GetStartedGraphics>
            </section>
        </React.Fragment>
    );
}

export default Homepage;