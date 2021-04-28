import React,{Component} from 'react';
import '../styles/badge.css'; 


class BadgeForm extends Component { 
   state={}; //We initializa an empty object that will receive the props of each input tag
    handleChange= (e)=>{
    this.setState({ //we Stablish the setState function 
            [e.target.name] : e.target.value // e.target.name gets dinamycally the value of the field that user is usin`
          })
    //    console.log({
    //      name: e.target.name,   //Set the name atribute of input and assign to a new element in object
    //     value: e.target.value}) //Print the required event and equals to value, how is that possible? Is the same thing to let value = e.target.value
   };
   handleClick= (e)=>{

    console.log("Clicked")
};
handleSubmit= (e)=>{
    e.preventDefault(); //This prevent the form to be sent
    console.log("The form was submitted")
};
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>    
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.handleChange} className="form-control" type="email" name="email" placeholder="your@email.com" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" placeholder="Job Title" value={this.state.jobTitle}/>
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="twitter" placeholder="Twitter" value={this.state.Twitter}/>
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Save</button>   {/* Type submit es su valor por omisión */}
            </form>    
            </div>
           
        )
    }
}


export default BadgeForm;