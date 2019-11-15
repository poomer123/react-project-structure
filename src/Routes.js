import React from "react"
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import UserPage from "./pages/Users/Users";
import NotFound from "./pages/NotFound/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
        </Switch>
    )
}
