import React, { Component} from 'react';
import logo from '../images/platziconf-logo.svg';
import '../styles/badge.css';

class BadgeLogo extends Component {

    render(){
        return(
            <div className="BadgeNew__hero">
            <picture className="col-6">
             <img  src={logo} alt="Logo" className="BadgeNew__img"/>
            </picture>
             {this.props.data !="" &&<h1>{this.props.data}</h1>}
            </div>
        )
    }
}


export default BadgeLogo;