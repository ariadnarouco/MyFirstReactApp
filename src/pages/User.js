import React from 'react';

export default class User extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='my-box'>
        <h3>Name: {this.props.name}</h3>
        <p>User name: {this.props.username}</p>
        <p>Email: {this.props.email}</p>
      </div>
    );
  }



}
