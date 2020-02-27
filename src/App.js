import React from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import './App.css';

export default class App extends React.Component {
  render() {
      return (
          <div className="class">
              <Header />
              <div className="app-wrapper">
                  <Nav />
                  <div className="main-content">
                      {this.props.children}
                  </div>
              </div>
          </div>
      );
  }
};

