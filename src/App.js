import React from "react"
import { Link } from "react-router-dom";
import logo from "./logo.svg"
import "./App.css"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<Link to="/" className="btn btn-info">Home</Link>

				<p>REACT_APP_PROJECT_NAME : {process.env.REACT_APP_PROJECT_NAME}</p>
				<p>NODE_ENV : {process.env.NODE_ENV}</p>
				<p>REACT_APP_ENV_NAME : {process.env.REACT_APP_ENV_NAME}</p>
				<p>REACT_APP_API_END_POINT : {process.env.REACT_APP_API_END_POINT}</p>
			</header>
		</div>
	)
}

export default App
