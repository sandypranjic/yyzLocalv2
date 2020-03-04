import React from "react";

// Components
import SearchGraphics from "./SearchGraphics";

const Search = () => {
    return (
        <React.Fragment>
            <main>
                <SearchGraphics />
                <section className="search">
                    <div className="textContainer">
                        <div className="greetingContainer">
                            <h2>Hello, <span className="greeting">Toronto.</span></h2>
                        </div>
                        <div className="searchInfoText">
                            <p>YYZ Local is built using data provided by the City of Toronto from the last Canadian Census and strives to provide crucial housing info on every neighbourhood of Toronto, like the rate of unaffordable housing and how many condos are around.</p>
                            <p>Either search for a neighbourhood, or select an option from the drop-down.</p>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Search;