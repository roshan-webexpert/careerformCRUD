import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from 'axios';
import '../css/CareerForm.css';


class CareerForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeResume = this.onChangeResume.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            mobile: '',
            email: '',
            position: '',
            resume: '',
            selected: false,
            rejected: false
        }
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeMobile(e) {
        this.setState({
            mobile: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePosition(e) {
        this.setState({
            position: e.target.value
        });
    }
    onChangeResume(e) {
        this.setState({
            resume: e.target.value
        });
    }
    // onChangeCompleted(e) {
    //     this.setState({
    //         resume: e.target.value
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Mobile: ${this.state.mobile}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Position: ${this.state.position}`);
        console.log(`Resume: ${this.state.resume}`);
        console.log(`Selected: ${this.state.selected}`);
        console.log(`Rejected: ${this.state.rejected}`);



        const newCareer = {
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            position: this.state.position,
            resume: this.state.resume,
            selected: this.state.selected,
            rejected: this.state.rejected
        }

        axios.post('http://localhost:5000/careers/add', newCareer)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/');
            })
            .catch(err => console.loog(err));

        this.setState({
            name: '',
            mobile: '',
            email: '',
            position: '',
            resume: '',
            selected: false,
            rejected: false
        });
    }


    render() {
        return (
            <div className="container">
                <h2>WORK @ QueBeta</h2>
                <div>
                    <h2 className="careerFormTitle">APPLY HERE</h2>
                </div>
                <div className="formContainer">
                    <Form className="form"
                        onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                placeholder="enter full-name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="mobile">Mobile</Label>
                            <Input
                                type="text"
                                name="mobile"
                                id="mobile"
                                value={this.state.mobile}
                                onChange={this.onChangeMobile}
                                placeholder="enter mobile number"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                placeholder="enter your email"></Input>
                        </FormGroup>
                        <Label for="position">Position</Label>
                        <Input type="select"
                            name="position"
                            id="position"
                            value={this.state.position}
                            onChange={this.onChangePosition}>
                            <option value="">Select</option>
                            <option>Android developer</option>
                            <option>Web developer</option>
                            <option>MERN Stack developer</option>
                            <option>UI/UX developer</option>
                            <option>IOS developer</option>
                            <option>Software tester</option>
                            <option>Full Stack developer</option>
                        </Input>
                        <Label for="resume">Upload Your Resume</Label>
                        <Input type="file"
                            name="resume"
                            id="resume"
                            value={this.state.resume}
                            onChange={this.onChangeResume}></Input>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.</FormText>
                        {/*<FormGroup check>
                        <Label check>
                          <Input type="radio" 
                          name="gender"
                          id="gender"
                          value="Male"
                          checked={this.state.gender === 'Male'}
                          onChange={this.onChangeGender}  
                          />
                          Male
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" 
                          name="female"
                          id="female"
                          value="Female"
                          checked={this.state.gender === 'Female'}
                          onChange={this.onChangeGender}  
                          />
                          Female
                        </Label>
    </FormGroup>*/}
                        <Button outline color="info" className="submitForm" type="submit">Send</Button>

    }
                    
                    </Form>
                </div>
            </div>
        );
    }
}

export default CareerForm;