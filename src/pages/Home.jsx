import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/oppdetails">Oppdetails</Link>
        </li>
        <li>
          <Link to="/hometwo">HomeTwo</Link>
        </li>
        <li>
          <Link to="/registerorg">RegisterOrg</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/username">Username</Link>
        </li>
        <li>
          <Link to="/registerfive">RegisterFive</Link>
        </li>
        <li>
          <Link to="/registertwo">RegisterTwo</Link>
        </li>
        <li>
          <Link to="/registerthree">RegisterThree</Link>
        </li>
        <li>
          <Link to="/registerfour">RegisterFour</Link>
        </li>
        <li>
          <Link to="/fornewpost">Fornewpost</Link>
        </li>
        <li>
          <Link to="/editpost">Editpost</Link>
        </li>
        <li>
          <Link to="/userdashboardtwo">UserDashboardTwo</Link>
        </li>
        <li>
          <Link to="/userdashboard">UserDashboard</Link>
        </li>
        <li>
          <Link to="/faqstwo">FAQsTwo</Link>
        </li>
        <li>
          <Link to="/fornewposttwo">FornewpostTwo</Link>
        </li>
        <li>
          <Link to="/userdashboardthree">UserDashboardThree</Link>
        </li>
        <li>
          <Link to="/emailsuccessfully">Emailsuccessfully</Link>
        </li>
        <li>
          <Link to="/deletesuccessfully">Deletesuccessfully</Link>
        </li>
        <li>
          <Link to="/posteditedsuccessfully">Posteditedsuccessfully</Link>
        </li>
        <li>
          <Link to="/postsuccessfully">Postsuccessfully</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
