import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

export default class Form extends React.Component {
  state = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
  };


  // Display the user input stored in the state into the console.log
  onSubmit = () => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    //console.log(this.state)
  };

  render(){
    return (
      <form>
        <input 
        // The Value here goes in whatever we set it up in the sate
        placeholder='firstName'
        // Setting the value of the input as what the user types
        value={this.state.firstName}
        onChange={e=> this.setState({ firstName: e.target.value})}
/>
        <br />
        <input 
        placeholder='lastName'
        value={this.state.lastName}
        onChange={e=> this.setState({ lastName: e.target.value})}
/>
      <br />
      <input 
        placeholder='email'
        value={this.state.email}
        onChange={e=> this.setState({ email: e.target.value})}
/>
        <br />
        <button onClick={() =>  this.onSubmit()}>Submit</button>
              </form>
      );
  }
}  