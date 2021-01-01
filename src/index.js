import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Op-stateprovider';
// import { StateContext } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    {/* <StateContext.Provider> */}
    <UserProvider>
      <App />
    </UserProvider>
      
    {/* </StateContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
