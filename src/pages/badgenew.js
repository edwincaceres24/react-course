import React,{Component} from 'react';
import Badge from '../components/badge.js';
import Navbar from '../components/navbar.js';
import logo from '../images/badge-header.svg'
import '../styles/badge.css'

class BadgeNew extends Component {
    render(){
        return(
    <main>
        <Navbar />
        <div className="BadgeNew__hero">
            <img className="" src={logo} alt="Logo"/>
        </div>
        <section className="container">
            <div className="row">
                <div className="col">
                    <Badge 
                        firstName="Edwin"
                        lastName="Cáceres"
                        jobTitle="Ecommerce Consultant"
                        twitter="ecacerssilva"
                    />
                </div>
            </div>
        </section>
    </main>
            
        )

    }
}


export default BadgeNew