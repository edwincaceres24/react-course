import React, {Component} from 'react'; //Desestructuramos React.Compontent
import logo from '../images/badge-header.svg';
import GravatarImage from './gravatar.js';
import '../styles/badge.css'; 

class Badge extends Component{  //Creamos la clase extendemos la propieadad de ReactComponent
    render(){
        const {firstName,lastName,jobTitle,email,twitter}=this.props; // similar to this.props.LastName etc...
        return(
            <section className="Badge">
                <figure className="Badge__header">
                        <img src={logo} alt="img" />
                </figure>
                <figure className="Badge__section-name">
                        <GravatarImage email={email} />
                        <figcaption>
                <h1>{firstName} {lastName}</h1>
                        </figcaption>
                </figure>
                <div className="Badge__section-container">
                    <p className="Badge__section-info">I'm an {jobTitle}</p>
                    <p className="Badge__section-info">@{twitter}</p>
                    {/* <p className="Badge__section-info">My email is {email}</p> */}
                </div>
            </section>
        )
    }

}


export default Badge;