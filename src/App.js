import React, { Component } from 'react';
import './App.scss';
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

// Components
import Header from "./Header.js";
import Homepage from "./Homepage.js";
import Search from "./Search.js";

const routes = [
  {path: "/", name: "homepage", Component: Homepage},
  {path: "/search", name: "search", Component: Search},
];

function App() {
  return (
    <React.Fragment>
      <Header />
        {routes.map(({ path, name, Component }) => (
          <Route key={name} exact path={path}>

            {({match}) => (
              <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              unmountOnExit>
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
    

    </React.Fragment>
  );
}

export default App;
