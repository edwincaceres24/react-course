// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/badge';
import Badges from './pages/badges.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let myName= {
    name:'Edwin',
    lastname: 'Caceres',
    age: 30,
    portfolio: 'https://edwin-caceres.com/pages/portafolio',
};
let  { name:mainVar ,lastname, age , portfolio}=myName; //Desestructuramos el objeto para acceder facil y la asignamos a otra variable

const portfolioText = React.createElement('a',{href:portfolio, target: '-blank'}, `portfolio`);

// const element = React.createElement('h1',{},`Hello I'm ${mainVar} ${lastname}, I'm ${age} years old and here you can see my `);
// const jsx = 
// (<h1>Hi, my name is {mainVar} {lastname}.
// This is my <a href={portfolio} target='_blank'>portfolio</a> </h1>);

const container = document.getElementById('app');

// let allText = element ;


// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge 
//     firstName={`${mainVar}`} //This is from an object formerly defined
//     lastName="Cáceres"
//     jobTittle="Ecommerce Consultant"
//     twitter="edDev"

// />, container); //Add JSX of the component

ReactDOM.render(<Badges/>, container); 

console.log(portfolioText)