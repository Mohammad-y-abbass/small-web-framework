import { Component } from './models/Component.js';
const component = new Component({ name: 'John', age: 25 });
console.log(component.get());
component.set({ name: 'Jane' });
console.log(component.get());
