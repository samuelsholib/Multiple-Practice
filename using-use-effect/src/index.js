import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseEffectDemo from './UseEffectDemo';
 import UseEffectTwo from './UseEffectTwo';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectDemo />
   {/* <UseEffectTwo /> */}
  </React.StrictMode>
);

//reportWebVitals();
