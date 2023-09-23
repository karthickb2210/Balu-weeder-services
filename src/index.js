import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="826789295112-2ka1nq63ons9fnoi26qqqlto5vqglgbs.apps.googleusercontent.com">
  <App />
  </GoogleOAuthProvider>;
   
  </React.StrictMode>
);

