import React from 'react';
import { Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Home from "./Component/Home";
import AddContact from './Component/AddContact';
import EditContact from './Component/EditContact';
import Navbar from "./Component/Navbar";

const App = () => {
  return(
    <div className ="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element ={<Home> </Home>}>

        </Route>
        <Route path="/add" element={<AddContact/>}> 
          
        </Route>
        <Route path="/edit/:id"element={<EditContact/>}>
               
        </Route>
      </Routes>

    </div>
  );
};

export default App;
