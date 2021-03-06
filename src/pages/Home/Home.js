import React from "react"
import { Nav } from "../../common";
import logo from "../../assets/logo/logo.svg"
import "./Home.css"

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />

                <p>REACT_APP_PROJECT_NAME : {process.env.REACT_APP_PROJECT_NAME}</p>
                <p>NODE_ENV : {process.env.NODE_ENV}</p>
                <p>REACT_APP_ENV_NAME : {process.env.REACT_APP_ENV_NAME}</p>
                <p>REACT_APP_API_END_POINT : {process.env.REACT_APP_API_END_POINT}</p>
            </header>
        </div>
    )
}
