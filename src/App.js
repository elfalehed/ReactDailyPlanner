// Follow along. File issues in case of any bugs. 
import React, {component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from './Form';

document.title = "ReactJS DailyP"

// a display function on hold

/* 
function App() {
  //return null;
  const hello = <h1 id="hellw"> Hello World, Welcome to ReactJS Daily Planner </h1> 
  return hello;
 } 
 export default App;
*/ 

export default class App extends component {
	onSubmit = fields => {
		console.log('The Form GOT:', fields )
	}
	render(){
		return (
				<div className="App">
				<Form onSubmit={fields => this.onSubmit(fields)} />
				</div>
			);
 }
}