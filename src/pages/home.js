import React from 'react';
import {Link} from 'react-router-dom';
import './styles/home.css';

function HomePage(){
    return(
    <>
    <main className="home--background-image">
        <div className="container-xl home--info-container">
            <h1 className="home--main-text">Welcome to our site</h1>
            <Link to="./badges"><button className="btn btn-success">See more</button></Link>
        </div>

    </main>

    </>
    )
}

export default HomePage;