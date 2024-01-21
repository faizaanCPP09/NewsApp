import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" apiKey={apiKey} country="in" category="general" />}
          />
          <Route
            exact
            path="/general"
            element={<News key="general" apiKey={apiKey} country="in" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" apiKey={apiKey} country="in" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" apiKey={apiKey} country="in" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" apiKey={apiKey} country="in" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" apiKey={apiKey} country="in" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" apiKey={apiKey} country="in" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" apiKey={apiKey} country="in" category="technology" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
