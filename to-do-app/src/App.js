import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import ListToDo from './components/ListToDo'
import CreateToDo from './components/CreateToDo'
import EditToDo from './components/EditToDo'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">To Do App</Link>
            {/* Route linking */}
            <ul className='navbar-nav'>
              <li className='nav-item'><Link to='/' className='nav-link'>ToDo</Link ></li>
              <li className='nav-item'><Link to='/create' className='nav-link' >Create</Link></li>
            </ul>
          </nav>
          {/* Route mapping */}
          <Route exact path='/' component={ListToDo} />
          <Route path='/create' component={CreateToDo} />
          <Route path='/edit/:id' component={EditToDo} />
        </div>
      </Router>
    );
  }

}

export default App;
