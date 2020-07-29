import React, { Component } from 'react'
import axios from 'axios';
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class EditCareer extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeResume = this.onChangeResume.bind(this);
        this.onChangeSelected = this.onChangeSelected.bind(this);
        this.onChangeRejected = this.onChangeRejected.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
// this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            // careers:[],
            name: '',
            mobile: '', 
            email: '',
            position: '',
            resume: '',
            selected: false,
            rejected: false
        }
    }

    componentWillMount() {
        this.getCareerDetails();
    }

    getCareerDetails() {
        let careerId = this.props.match.params.id;
        axios.get('http://localhost:5000/careers/' + careerId)
            .then((response) => {
const data = response.data;
                console.log(response.data);
                
                // yesterday on 27 July 2020 working from here


// this.setState({name:response.data.name});
// this.setState({mobile:response.data.mobile});
// this.setState({email:response.data.email});
// this.setState({position:response.data.position});
// this.setState({resume:response.data.resume});
// this.setState({selected:response.data.selected});
// this.setState({rejected:response.data.rejected});
                this.setState({
                    // [e.target.name]: e.target.value,
                    name: response.data.name,
                    mobile: response.data.mobile,
                    email: response.data.email,
                    position: response.data.position,
                    resume: response.data.resume,
                    selected: response.data.selected,
                    rejected: response.data.rejected

                });
                // console.log(this.setState.value);
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    onChangeName(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        // console.log("Value>>", value);
        // console.log("id>>", id);
        this.setState({
            // name: e.target.value
            [name]: value
        });
    }

    onChangeMobile(e) {
        const target = e.target;
        const value = target.value;
        const mobile = target.name;
        this.setState({
            // name: e.target.value
            [mobile]: value
        });
    }

    onChangeEmail(e) {
        const target = e.target;
        const value = target.value;
        const email = target.name;
        this.setState({
            // name: e.target.value
            [email]: value
        });
    }

    onChangePosition(e) {
        const target = e.target;
        const value = target.value;
        const position = target.name;
        this.setState({
            // name: e.target.value
            [position]: value
        });
    }
    onChangeResume(e) {
        const target = e.target;
        const value = target.value;
        const resume = target.name;
        this.setState({
            // name: e.target.value
            [resume]: value
        });
    }
    onChangeSelected(e) {
        this.setState({
            selected: !this.state.selected
        });
    }
    onChangeRejected(e) {
        this.setState({
            rejected: !this.state.rejected
        });
    }
// onEdit(id){
//     this.setState({
//         editMode:id
//     })
//     let editingItem = this.state.careers.find(career=>{
//         return career.id === id;
//     })
//     this.setState({
//         name:editingItem.name,
//         mobile:editingItem.mobile,
//         email:editingItem.email,
//         position:editingItem.position,
//         resume:editingItem.resume,
//         selected:editingItem.selected,
//         rejected:editingItem.rejected
//     })
// }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            position: this.state.position,
            resume: this.state.resume,
            selected: this.state.selected,
            rejected: this.state.rejected,


        };
        axios.post('http://localhost:5000/careers/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }

// onUpdate(e) {
//         console.log('event', e);
//         id=this.state.editMode;

//         const obj = {
//             name: this.state.name,
//             mobile: this.state.mobile,
//             email: this.state.email,
//             position: this.state.position,
//             resume: this.state.resume,
//             selected: this.state.selected,
//             rejected: this.state.rejected,


//         };
//         axios.post('http://localhost:5000/careers/update/' + id, obj)
//             .then(res => {
//                 console.log(res.data)
// this.setState({
//     name:'',
//     mobile:'',
//     email:'',
//     position:'',
//     resume:'',
//     selected:'',
//     rejected:''
// })
//             });
//         this.props.history.push('/');
//     }

    onDelete() {
        let careerId = this.props.match.params.id;
        axios.delete('http://localhost:5000/careers/delete/' + careerId)
            .then(response => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            // this.state.careers.map((currentCareer, i)=>{

            // }
            // this.props.match.params.id((data)){
            <div>
                <h3>Update Career</h3>
                <div className="formContainer">
                    <Form className="form"
                        onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                name="name"
                                id="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="mobile">Mobile</Label>
                            <Input
                                type="text"
                                name="mobile"
                                id="mobile"
                                value={this.state.mobile}
                                onChange={this.onChangeMobile}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            ></Input>
                        </FormGroup>
                        <Label htmlFor="position">Position</Label>
                        <Input type="select"
                            name="position"
                            id="position"
                            value={this.state.position}
                            onChange={this.onChangePosition}>
                            <option>Select</option>
                            <option>Android developer</option>
                            <option>Web developer</option>
                            <option>MERN Stack developer</option>
                            <option>UI/UX developer</option>
                            <option>IOS developer</option>
                            <option>Software tester</option>
                            <option>Full Stack developer</option>
                        </Input>
                        <Label htmlFor="resume">Uploaded Resume</Label>
                        <Input type="text"
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
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="selected"
                                id="selected"
                                onChange={this.onChangeSelected}
                                value={this.state.selected}
                                checked={this.state.selected} />
                            <label className="form-check-label" htmlFor="selected">
                                Selected
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox"
                                name="rejected"
                                id="rejected"
                                onChange={this.onChangeRejected}
                                value={this.state.rejected}
                                checked={this.state.rejected} />
                            <label className="form-check-label" htmlFor="rejected">
                                Rejected
                                </label>
                        </div>
                        <br></br>
                        <Button outline color="info" className="updateForm" type="submit">Update Form</Button>
                        <Button outline color="danger" className="deleteForm" onClick={this.onDelete.bind(this)}>Delete Form</Button>

                    </Form>
                </div>
            </div>
        )
    }
}


export default EditCareer;
