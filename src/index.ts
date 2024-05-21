import { Component } from './models/Component.js';

interface Props {
  name?: string;
  age?: number;
}

const component = new Component<Props>({ name: 'John', age: 25 });
console.log(component.get());

component.set({ name: 'Jane' });
console.log(component.get());

