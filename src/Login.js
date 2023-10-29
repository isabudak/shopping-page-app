import React, { Component } from 'react'
import {Button} from "reactstrap";


export default class Login extends Component {
    
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>Username</h3>
            <input type='text' name='userName'/>
            

            <h3>Password</h3>
            <input type='password'></input> <br/>
            <br/>
            <Button color='success'>Log in</Button>




        </form>
      </div>
    )
  }
}
