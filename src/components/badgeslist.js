import React,{Component} from 'react';
import '../styles/badgeslist.css';
import twitter from '../images/twitter.svg'


class BadgesList extends Component{
  render(){
    const {id,firstName,lastName,email,jobTitle,twitter,avatarUrl}=this.props;
    return(
	    <>
	  <article className="badges--list-container">
      <picture className="badges--list-image">
        <img src={avatarUrl} alt="logo" loading="lazy" />
      </picture>
      <div className="badges--list-info">
        <h3 className="badges--list-title">{firstName} {lastName}</h3>
        <p> 
          <i className="badges--list-twitter-icon"></i>
          <a className="badges--list-twitter" href={`https://twitter.com/${twitter}`} target="_blank">@{twitter}</a>
          </p>
        <p>{jobTitle}</p>
      </div>
    </article>
      </>

    )
  }
}



export default BadgesList
