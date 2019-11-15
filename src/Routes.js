import React from "react"
import { Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export default function Routes() {
    return (
        <>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
        </>
    )
}
