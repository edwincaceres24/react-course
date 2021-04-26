import React,{Component} from 'react';
import logoImage from '../images/logo.svg';
import '../styles/navbar.css';

class Navbar extends Component {
    render(){
        return(
            <header className='Navbar'>

            <div className="container-fluid">
                <a className="Navbar__brand" href="./">
                   <img className="Navbar__brand-logo" src={logoImage} alt="logo"/>
                   <span className="font-weight-light">Platzi</span>
                   <span className="font-weight-bold">Conf</span>
                 </a>
                </div>
            </header>

            
        )

    }
}


export default Navbar