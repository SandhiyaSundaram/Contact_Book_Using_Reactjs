import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import contactReducer from './Redux/Reducer/contactReducer';

const store = createStore( contactReducer, composeWithDevTools() );

ReactDOM.render(

  <Provider store ={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  /*<div>
    <Newpage greet ="morning" owner= "This page belongs to Sandhiya.S"
    image ="https://i.pinimg.com/736x/4f/d1/af/4fd1afd068e46e96486d74a3a0ef6116.jpg"
    image1="https://images.pexels.com/photos/3014941/pexels-photo-3014941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    image2="https://i.pinimg.com/originals/86/90/14/869014ea87e157354d2326a5961b20e0.png"
    image3="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ></Newpage>
    </div>*/
  
  document.getElementById('root')
);
