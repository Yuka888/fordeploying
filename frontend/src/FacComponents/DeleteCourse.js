import React, { Component } from 'react';
import axios from "axios";
import Navbar from '../NavbarHR.js';

export default class DeleteCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            faculty: '',
            depid:'',
            courseid:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        const inputData = {
            facultyname: this.state.faculty,
            departmentid: this.state.depid,
            id: this.state.courseid
        }
        axios.post('/deletecourse', inputData, {headers: {
            'x-auth-token': localStorage.getItem('savedToken')
        }}).then(response =>{
            console.log(response.data);
            //maybe a pop up message with response.data
        }).catch(err =>{
            console.log(err);
        });
        event.preventDefault();
    };
    render() {
        return (
            <div>
            <Navbar />
             <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="Home">Home</a></li>
              <li className="breadcrumb-item"><a href="Home/Faculties">Faculties</a></li>
              <li className="breadcrumb-item"><a href="Home/Faculties/Departments">Departments</a></li>
              <li className="breadcrumb-item"><a href="Home/Faculties/Departments/Courses">Courses</a></li>
              <li className="breadcrumb-item active" aria-current="page">DeleteCourse</li>
            </ol>
          </nav>
            <h1>Delete Course</h1>
            <form onSubmit = {this.handleSubmit}>
            <div class="row">
                <label>
                    <input name="faculty" placeholder="Faculty Name..." type="text" faculty={this.state.faculty} onChange={this.handleChange}/>
                </label>
                <label>
                    <input name="depid" placeholder="Department ID..." type="text" depid={this.state.depid} onChange={this.handleChange}/>
                </label>
                <label>
                    <input name="courseid" placeholder="Course ID..." type="text" courseid={this.state.courseid} onChange={this.handleChange}/>
                </label>
            </div>
            <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
        )
    }
}
