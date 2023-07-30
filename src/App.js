import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/testimonial" exact>
            <Testimonial />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
