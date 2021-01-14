import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "../NavbarHR.js";

export default class SubmitACompensationLeaveRequest extends Component{

    constructor(){
        super();
       
       this.onAddDate=this.onAddDate.bind(this);
       this.onAddDay=this.onAddDay.bind(this);
       this.onAddReason=this.onAddReason.bind(this);
       this.onAddMonth=this.onAddMonth.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state={

            date:0,
            day:'',
            month:0,
            reason:""
            
        }
    }

   

onAddDate(e){
   this.setState({
       date: e.target.value
   })
}
onAddDay(e){
    this.setState({
        day: e.target.value
    })
 }
 onAddMonth(e){
    this.setState({
        month: e.target.value
    })
 }


 onAddReason(e){
    this.setState({
        reason: e.target.value
    })
 }


onSubmit(e){
    e.preventDefault();
    const request ={
        date:this.state.date,
        day:this.state.day,
        month:this.state.month,
        reason:this.state.reason

    }
    axios.post('/requestCompensationLeave',request,{headers:{'x-auth-token':localStorage.getItem('savedToken')}})
        .then((res)=>{
            console.log(res.data);
        }).catch((error)=> { 
    console.log(error);
})
window.location="/Success"



}

    render(){
        return(
            <div>
                <Navbar/>
            <div className='container'>
                <nav aria-label="breadcrumb">
            <ol className="breadcrumb alert alert-warning">
              <li className="breadcrumb-item text-warning"><a className="text-warning"href="HomeHR">Home</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="Attendance">Attendance</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="Leaves">Leaves</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="SubmitALeaveRequest">Submit A Leave Request</a></li>
              <li className="breadcrumb-item active text-danger" aria-current="page">Submit a compensation leave request</li>
            </ol>
          </nav>
          </div>
          <div className='container'>
          <h3>Compensation leave Request</h3>
               <form onSubmit={this.onSubmit}>
                   <div className='form-group'>
                       <label>Date </label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.date}
                       onChange={this.onAddDate}
                       placeholder="example: 19 "/>    
                   </div>

                   <div className='form-group'>
                       <label>Day</label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.day}
                       onChange={this.onAddDay}
                       placeholder="example: Sunday"/>    
                   </div>

                   <div className='form-group'>
                       <label>Month</label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.month}
                       onChange={this.state.onAddMonth}
                       placeholder="example: 4"/>    
                   </div>

                   <div className='form-group'>
                       <label>Reason</label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.reason}
                       onChange={this.onAddReason}
                       placeholder="example: aho keify keda"/>    
                   </div>
                   
                   

            <div className="form-group">
                <input type="submit" value="Submit request" className="btn btn-warning"/>
            </div>
           
               </form>
            </div>
            </div>
        )
    }
}