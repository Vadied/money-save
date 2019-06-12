import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import '../css/components/App.css';
import history from '../history';

import Header from './Header/Header'
import WalletList from './Wallets/WalletList';
import WalletEdit from './Wallets/WalletEdit';
import WalletCreator from './Wallets/WalletCreator';
import WalletDelete from './Wallets/WalletDelete';
import WalletShow from './Wallets/WalletShow';

import FluxCreator from './MoneyFluxes/MoneyFluxCreator';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <div className="App-body">
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Switch>
                                <Route path="/" exact component={WalletList}/>
                                <Route path="/wallets/new" exact component={WalletCreator}/>
                                <Route path="/wallets/edit/:walletId" exact component={WalletEdit}/>
                                <Route path="/wallets/delete/:walletId" exact component={WalletDelete}/>
                                <Route path="/wallets/:walletId" exact component={WalletShow}/>
                                <Route path="/wallet/:walletId/:op" exact component={FluxCreator}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
