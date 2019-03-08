import React, {Component} from 'react';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import ApetMenu from './ApetMenu';
import AddApet from './AddApet';
import ApetHome from './ApetHome';

export default class ApetRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={ApetHome}/>
                    <Route path='/all' exact={true} component={ApetMenu}/>
                    <Route path='/add' exact={true} component={AddApet}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
