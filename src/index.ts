import { Component } from './models/Component.js';
import { getData } from './core/requestHandler.js';

interface Props {
  name?: string;
  age?: number;
}

const component = new Component<Props>({ name: 'John', age: 25 });
console.log(component.get());

component.set({ name: 'Jane' });
console.log(component.get());

component.on('click', () => {
  getData('http://localhost:3000/users');
});

component.trigger('click');

console.log(component.events);
