import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { render } from 'react-dom';

class App extends React.Component {

constructor() {
    super();
    this.state = {
      estados: [],
  
    };
  }


  componentDidMount() {
    fetch('http://localhost:8081/')
      .then(response => response.json())
      .then(res => this.setState({estados: res.states}) )
  }


   render() {
      return (
   		<div>
   		<ul>
   		{this.state.estados.map((dynamicComponent, i) =>
   		<li key={i} id={dynamicComponent.id}>
   			{dynamicComponent.name}
   		</li>)}
   		</ul>
   		</div>
      );
   }

}

export default App