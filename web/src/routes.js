import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pokedex from './pages/Pokedex';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Pokedex} />
        </Switch>
        </BrowserRouter>
    );
}