import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';

class TodoApp extends Component{
  render(){
  return(
    <div>
        <Todos />
        <Filter />
    </div>);
    }
}


export default TodoApp;
