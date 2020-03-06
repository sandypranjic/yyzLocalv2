import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header() {

    return(
        <React.Fragment>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/search" exact>Search</NavLink></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header;