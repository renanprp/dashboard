import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {Sidebar} from './components/index';
import {Header} from './components/Layout/Header';

function Routes(){
    return(
        <BrowserRouter basename="/">
            <Header/>
            <Sidebar/>
            <Switch>
                <Route path="/" exact={true} component={Dashboard}></Route>
                <Route path="/user-details" exact={true} component={ () => <div><h2>Detalhes do usuário</h2></div>}></Route>
                <Route path="/repos" exact={true} component={() => <div><h2>Detalhes dos repositórios</h2></div>}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;