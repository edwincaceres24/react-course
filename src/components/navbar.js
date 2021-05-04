import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import logoImage from '../images/logo.svg';
import '../styles/navbar.css';

class Navbar extends Component {
    render(){
        return(
            <header className='Navbar'>

            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                   <img className="Navbar__brand-logo" src={logoImage} alt="logo"/>
                   <span className="font-weight-light">Platzi</span>
                   <span className="font-weight-bold">Conf</span>
                 </Link>
                </div>
            </header>

            
        )

    }
}


export default Navbar