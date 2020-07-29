import React  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from './customer/Registration';
import Login from './customer/Login';
import Dashboard from './customer/Dashboard';

function Routes()
{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Registration} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Registration} />
            <Route path="/loan" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Dashboard} />
            <Route path="/list" component={Dashboard} />
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;