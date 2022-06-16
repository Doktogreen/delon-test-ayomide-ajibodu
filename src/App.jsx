import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from './_state';
import { Nav, Alert, PrivateRoute } from './_components';
import { history } from './_helpers';
import { Users } from './users';
import { Account } from './account';
import { Home } from './home';
import { SideBar } from '_components/SideBar';

export { App };

function App() {
    const auth = useRecoilValue(authAtom);

    return (
        <div className={'app-container' + (auth ? ' bg-light' : '')}>
            <div classNameName="container">
            <Router history={history}>
                <Nav />
                <SideBar />
                <div id="main-wrapper">
                        <div className="page-wrapper">
                            <div className="container-fluid">
                                <Alert />
                                <Switch>
                                    <PrivateRoute exact path="/" component={Home} />
                                    <PrivateRoute path="/verifiers" component={Users} />
                                    <Route path="/account" component={Account} />
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
}
