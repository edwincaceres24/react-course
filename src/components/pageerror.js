import React,{Component} from 'react';
import '../styles/pageerror.css'

class PageError extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h4 className="PageError">{this.props.error.message}</h4>
    )
  }

}

export default PageError;
