import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './componets/homepage/Homepage';
import Book from './componets/book/Book';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/book" component={Book} />
      </Switch>
    );
  }

}

export default Routes;