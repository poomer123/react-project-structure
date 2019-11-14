import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>REACT_APP_PROJECT_NAME : {process.env.REACT_APP_PROJECT_NAME}</p>
				<p>NODE_ENV : {process.env.NODE_ENV}</p>
			</header>
		</div>
	)
}

export default App
