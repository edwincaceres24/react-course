import React,{Component} from 'react';
import Badge from '../components/badge.js';
import LifeCycle from '../components/lifecycle.js';
import logo from '../images/platziconf-logo.svg';
import BadgeForm from '../components/badgeform.js';
import '../styles/badge.css';
import api from '../api.js';
import md5 from 'md5';

class BadgeNew extends Component {
    state={form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle:'',
        twitter:'',
        avatarUrl: ''
    }}; //Inicializamos el un nuevo state
    handleChange=e=>{

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,

            }
        })
    }
  
    handleSubmit=async e=>{
        e.preventDefault();
        this.setState({
            loading: true,
            error: null
        })
        try {
            await api.badges.create(this.state.form);
            this.setState({
                loading: false})
        }
        catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
     }
    
    render(){
        return(
    <main>
        <div className="BadgeNew__hero">
            <img  src={logo} alt="Logo"/>
        </div>
        <section className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName={this.state.form.firstName || "Name"}
                        lastName={this.state.form.lastName || "Lastname"}
                        jobTitle={this.state.form.jobTitle || "Job title"}
                        twitter={this.state.form.twitter || "twitter"}
                        email={this.state.form.email || "emailUser"}
                        // avatarUrl={this.state.form.avatarUrl || "avatarURL"}  //We setup the ID but we aren't sending it
                        
                    />
                </div>
                <div className="col-6">
                    <BadgeForm 
                        formValues={this.state.form}
                        onChange= {this.handleChange} 
                        onSubmit= {this.handleSubmit} 

                    />
                </div>
            </div>
        </section>
        {/* <LifeCycle/> */}
    </main>
            
        )

    }
}


export default BadgeNew