import React from 'react';
import './App.css';
import About from './Components/About';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import Login from './Components/Login';

import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './Components/Blog';
import Videos from './Components/Videos';
import Contact from './Components/Contact';
import Track from './Track';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className='App'>
        {user ? (
          <>
            <Header />
            <Switch>
              <Route path='/About'>
                <About />
              </Route>
              <Route path='/Blog'>
                <Blog />
              </Route>
              <Route path='/Videos'>
                <Videos />
              </Route>
              <Route path='/Contact'>
                <Contact />
              </Route>
              <Route path='/TrackCases'>
                <Track />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Header />
            <About />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
