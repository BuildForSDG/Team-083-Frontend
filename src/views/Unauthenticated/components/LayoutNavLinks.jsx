import React from "react";
import { Link } from '@reach/router';


const LayoutNavLinks = () => {
  return (
    <>
      <a href="/#what-we-do">What we do</a>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </>
  );
};

export default LayoutNavLinks
