import React from 'react';
import { Switch, useLocation, Route } from "react-router-dom";
import Routes from 'constants/routes';

import Home from 'scenes/home';
import Contacts from 'scenes/contact';


function Navigations() {
    return (
        <Switch>
            <Route exact path={Routes.Home}  component={Home} />
            <Route exact path={Routes.Contacts}  component={Contacts} />
        </Switch>
    )
}

export default Navigations
