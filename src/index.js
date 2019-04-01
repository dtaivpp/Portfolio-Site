import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import AboutPage from './pages/About'
import ResumePage from './pages/Resume'
import ProjectPage from './pages/Project'
import * as serviceWorker from './serviceWorker';

class RouterNavigation extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/projects" component={ProjectPage} />
        </>
      </Router>
    );
  }
}

ReactDOM.render(<RouterNavigation />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
