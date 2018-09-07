import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './hoc/hoc'
import Todolist from './containers/todolist';

class App extends Component {
  render() {
    return (
     <Aux>
         <Todolist/>

     </Aux>
    );
  }
}

export default App;
