import React,{Component} from 'react';
import '../styles/badgeslist.css';
import {Link} from 'react-router-dom';
import twitter from '../images/twitter.svg';
import Gravatar from './gravatar.js';


class BadgesList extends Component{
  render(){
    console.log("From BL",this.props.badges)
    if (this.props.badges.length===0){
      return (
      <>
        <h3>We didn't found any badge</h3>
        <Link className="btn btn-primary" to="/badges/new">Create a new Badge</Link>
      </>
      )
    }
    return(
	    <>
	  <article className="badges--list-container">
      <picture className="badges--list-image">
        <Gravatar email={this.props.badges.email} />
      </picture>
      <div className="badges--list-info">
        <h3 className="badges--list-title">{this.props.badges.firstName} {this.props.badges.lastName}</h3>
        <p> 
          <i className="badges--list-twitter-icon"></i>
          <Link className="badges--list-twitter" to={`https://twitter.com/${this.props.badges.twitter}`} target="_blank">@{this.props.badges.twitter}</Link>
          </p>
        <p>{this.props.badges.jobTitle}</p>
      </div>
    </article>
      </>

    )
  }
}



export default BadgesList
