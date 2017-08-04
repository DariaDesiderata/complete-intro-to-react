import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const App = () => // implicit return so no curly braces/return word necessary
(
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route
        path="/details/:id"
        component={props => (
          <Details
            show={preload.shows.find(
              show => props.match.params.id === show.imdbID
            )}
            {...props}
          />
        )}
      />
    </div>
  </BrowserRouter>
);
export default App;
