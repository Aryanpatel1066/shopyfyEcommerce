import {Routes,Route} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import Product from "./pages/Product";
import Header from "./component/Header";
import Router from "./component/Router";
export default function App(){
   
  return(
    <>
    <Header />
    
    <Router/>


     </>
  )
 }