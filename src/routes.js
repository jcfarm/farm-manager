import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FieldAdd from './containers/FieldAdd';
import TablePage from './containers/Users';
import Dashboard from './containers/DashboardPage';
import Fields from './containers/Fields';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="index" component={Dashboard}/>
      <Route path="fields/">
        <IndexRoute component={Fields}/>
        <Route path="add" component={FieldAdd}/>
      </Route>
      <Route path="users" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
