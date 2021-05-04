import React,{Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from './navbar.js'


function LayoutComponent(props){
    // const children = props.children;
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    )
}

export default LayoutComponent;