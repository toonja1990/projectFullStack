import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';
//import App from './App';
import App2 from './components/App2';
import reportWebVitals from './reportWebVitals';
// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />

  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
