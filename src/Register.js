import React, { Component } from 'react';
import {Button, Form,FormGroup,Input, Label} from "reactstrap";

export default class Register extends Component {

    state={name:"name",surname:"",email:"",password:""}

    onChangeHandler=(event)=>{
        let name =event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }

    onSubmitHandler=(event)=>{
        event.preventDefault()
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
            
            <FormGroup>
            <Label for="name">Name</Label>
            <Input type='text' name='name' placeholder="Enter Name"onClick={this.onChangeHandler}></Input>
            <h6>Your name is {this.state.name}</h6>
            </FormGroup>
            <br/>

            <FormGroup>
            <Label for="surname">Surname</Label>
            <Input type='text' name='surname' placeholder='Enter Surname' onClick={this.onChangeHandler}></Input>
            <h6>Your name is {this.state.surname}</h6>
            </FormGroup>
            <br/>
            <FormGroup>
            <Label for="email">Email</Label>
            <Input type='text' name='email' placeholder='Enter E-mail' onClick={this.onChangeHandler}></Input>
            <h6>Your name is {this.state.email}</h6>
            </FormGroup>
            <br/>
            <FormGroup>
            <Label for="password">Password</Label>
            <Input type='password' name='password' placeholder='Password' onClick={this.onChangeHandler}></Input>
            </FormGroup>

            <FormGroup>
            <Label for="password">Again Password</Label>
            <Input type='password' name='password' placeholder='Again Password' onClick={this.onChangeHandler}></Input>
            </FormGroup>

            <br/>
            <FormGroup>
            <Label for="city">City</Label>
            <Input type='select' name='city' id='city' placeholder='Enter City'>
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
            </Input>
            </FormGroup>
            <Button type='sıbmit'>Register</Button>
            

        </Form>
      </div>
    )
  }
}
