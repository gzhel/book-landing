import React from 'react';
import { BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import HomePage from './components/pages/home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={HomePage} permitAll/>
        </Switch>
    </BrowserRouter>
);

export default Router;