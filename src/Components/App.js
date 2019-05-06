import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'country=us'
      },
      news2: {
        type: 'everything',
        query: 'q=country=us'
      },
      news3: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="Navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-3">
              <a href="/" className="brand-logo center">News Portal</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
