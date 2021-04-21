// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

let myName= {
    name:'Edwin',
    lastname: 'Caceres',
    age: 30,
};
let  { name:mainVar ,lastname, age}=myName; //Desestructuramos el objeto para acceder facil y la asignamos a otra variable

const element = <h1>Hello I'm <i>{mainVar}</i>, this is my first project in React!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
