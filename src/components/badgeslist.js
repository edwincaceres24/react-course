import React,{Component} from 'react';
import '../styles/badgeslist.css';
import {Link} from 'react-router-dom';
import Gravatar from './gravatar.js';
import editIcon from '../images/edit.png';


class BadgesList extends Component{
 
  render(){
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
        <Gravatar email={this.props.badges.email}  userName={`${this.props.badges.firstName} ${this.props.badges.lastName}`} />
      </picture>
      <div className="badges--list-info">
        <h3 className="badges--list-title">{this.props.badges.firstName} {this.props.badges.lastName}</h3>
        <p> 
          <i className="badges--list-twitter-icon"></i>
          <Link className="badges--list-twitter" to={`https://twitter.com/${this.props.badges.twitter}`} target="_blank">@{this.props.badges.twitter}</Link>
          </p>
        <p>{this.props.badges.jobTitle}</p>
      </div>
      <Link to={`/badges/${this.props.badges.id}`} className="badges--list-link">
      <picture className="badges--edit-button"> 
        <img src={editIcon} alt="Edit Button" className="badges--edit-img"/>
      </picture>
      </Link>
    </article>    
      </>

    )
  }
}



export default BadgesList
