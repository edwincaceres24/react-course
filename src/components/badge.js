import React, {Component} from 'react'; //Desestructuramos React.Compontent
import logo from '../images/badge-header.svg';
import edwinLogo from '../images/edwincaceres_img.jpeg';
import '../styles/badge.css'; 

class Badge extends Component{  //Creamos la clase extendemos la propieadad de ReactComponent
    render(){
        const {firstName,lastName,jobTitle,twitter}=this.props; // similar to this.props.LastName etc...
        return(
            <section className="Badge">
                <figure className="Badge__header">
                        <img src={logo} alt="img" />
                </figure>
                <figure className="Badge__section-name">
                        <img src={edwinLogo} alt={`${firstName} ${lastName}`} className="Badge__avatar" />
                        <figcaption>
                <h1>{firstName} {lastName}</h1>
                        </figcaption>
                </figure>
                <div className="Badge__section-container">
                    <p className="Badge__section-info">I'm an {jobTitle}</p>
                    <p className="Badge__section-info">@{twitter}</p>
                </div>
            </section>
        )
    }

}


export default Badge;