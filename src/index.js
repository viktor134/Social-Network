import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: "Hi ,how are you ?", likeCount: 4 },
  { id: 1, message: "My first Post ? ?", likeCount: 5 }



]

let dialogs = [
  { id: "1", name: "Victor" },
  { id: "2", name: "Arsen" },
  { id: "3", name: "Karina" },
  { id: "4", name: "Tanya" },
  { id: "5", name: "Lucy" }

];


let messages = [
  { id: "1", message: "Hi" },
  { id: "2", message: "You" },
  { id: "3", message: "How are you " }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} messages = {messages} dialogs = {dialogs}/>
    
  </React.StrictMode>
);

reportWebVitals();


