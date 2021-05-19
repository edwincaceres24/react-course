import React, { Component} from 'react';
import Loader from './loader.js'; 
import'../styles/pageloading.css';




class PageLoading extends Component {
    render(){
        return(
            <>
            <div className="PageLoading">
                <Loader/>
            </div>
            </>
        )
    }
}

export default PageLoading;