import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link to="/" className="btn btn-info">Home</Link>
            |
            <Link to="/users" className="btn btn-info">Users</Link>
        </div>
    )
}