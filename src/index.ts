import { Component } from './models/Component.js';

const root = document.getElementById('root');


const firstComponent = new Component(root!, '<h1>Hello World</h1>');
firstComponent.render();
