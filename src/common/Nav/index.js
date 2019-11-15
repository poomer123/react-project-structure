import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link to="/" className="btn btn-info mr-2">Home</Link>
            <Link to="/users" className="btn btn-info mr-2">Users</Link>
            <Link to="/userslist" className="btn btn-info mr-2">Users List</Link>
        </div>
    )
}