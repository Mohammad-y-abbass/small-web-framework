import { Component } from './models/Component.js';

const root = document.getElementById('root');
let title = 'TODO';

// Function to generate the content string based on the current title
const generateContent = () => `
  <div>
    <h1>${title}</h1>
    <input id="inputField"/>
    <button id="clickButton">Click</button>
  </div>
`;

const firstComponent = new Component(root!, generateContent());

const onChange = (event: Event) => {
  title = (event.target as HTMLInputElement).value;
  return title;
};

const onCLick = () => {
  firstComponent.rerender(generateContent());
};

// Bind the event to the input field
firstComponent.bindEvent('#inputField', 'input', onChange);
firstComponent.bindEvent('#clickButton', 'click', onCLick);
