import { Component } from './models/Component.js';

interface Props {
  name?: string;
  age?: number;
}

const component = new Component<Props>({ name: 'John', age: 25 });
console.log(component.get());

component.set({ name: 'Jane' });
console.log(component.get());

component.on('click', () => {
  console.log('clicked');
});

component.on('click', () => {
  console.log('clicked again');
});

component.on('change', () => {
  console.log('changed');
});

component.trigger('save');

console.log(component.events);
