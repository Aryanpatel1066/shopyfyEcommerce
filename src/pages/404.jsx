import { NavLink } from "react-router-dom";

import "../pages/404.css"
 export default function NotFound() {
    return (
      <>
      <main className="main">
      <div className="container">
       <h1 className="h1">404</h1>
    <p className="para">Oops! Page not found.</p>
    <p className="para">Sorry, but the page you are looking for might be in another castle.</p>
    <p className="para">Return to <NavLink className="a" to="/">home</NavLink>.</p>
    </div></main>
      </>
      
    );
  }
  