import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './layout/Root.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import About from './pages/About.js';
import Users from './pages/UserList.js';
import Register from './Register.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {


    return (
      <div className="App">
        <div>
          <Root>
            <Router >
              <div>
                <Header>
                  Im a header
                </Header>

                <Sidebar>
                  Im the Sidebar
                    <li><Link to="./about">About</Link></li>
                    <li><Link to="./users">Users</Link></li>
                    <li><Link to="./users/register">Users</Link></li>
                </Sidebar>
                <Main>
                  <Route path="/about" component={About} />
                  <Route path="/users" exact={true} component={Users} />
                  <Route path="/users/register"  exact={true} component={Register} />
                </Main>
              </div>
            </Router>


          </Root>
        </div>
      </div>
    );
  }
}

export default App;
