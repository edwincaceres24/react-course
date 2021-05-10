import React,{Component} from 'react';
import Badge from '../components/badge.js';
import LifeCycle from '../components/lifecycle.js';
import logo from '../images/badge-header.svg';
import BadgeForm from '../components/badgeform.js';
import '../styles/badge.css'

class BadgeNew extends Component {
    state={form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle:'',
        twitter:''
    }}; //Inicializamos el un nuevo state
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,

            }
        })
    }
    render(){
        return(
    <main>
        <div className="BadgeNew__hero">
            <img className="" src={logo} alt="Logo"/>
        </div>
        <section className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        jobTitle={this.state.form.jobTitle}
                        twitter={this.state.form.twitter}
                    />
                </div>
                <div className="col-6">
                    <BadgeForm 
                        onChange= {this.handleChange } 
                        formValues={this.state.form}
                    />
                </div>
            </div>
        </section>
        <LifeCycle/>
    </main>
            
        )

    }
}


export default BadgeNew