import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Main from "../screens/Main";
import Members from "../screens/Members";
import Mypage from "../screens/Mypage";
import Groups from "../screens/Groups";

import Header from "./Header";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/members" exact component={Members} />
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/groups" exact component={Groups} />
            <Redirect from={"*"}  to={"/"} />
        </Switch>
    </Router>
)

