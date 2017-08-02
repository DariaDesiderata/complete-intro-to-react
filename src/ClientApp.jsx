import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
const App = () => // implicit return so no curly braces/return word necessary
(
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
