import React from "react";
import { Nav } from "../common";

export default function MainLayout(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 bg-secondary py-2 text-white">
                    <Nav />
                </div>
            </div>
            <div className="row">
                <div className="col-4 bg-info text-white text-center py-5">
                    <h2>Sidebar</h2>
                </div>
                <div className="col-8 bg-white">
                    {props.children}
                </div>
            </div>
        </>
    )
}