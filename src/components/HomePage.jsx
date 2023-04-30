import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
        <div className="container">
                <img className="logo"
                    src={require("../assets/logo.png")}
                    alt="Pump-U-Up logo, a barbell with weights and a muscular arm busting through the middle saying 'Pump-U-Up'." />
      </div>
    {/* // <nav className="navbar">
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/" className="nav-link">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/loginPage" className="nav-link">
    //         log out
    //       </Link>
    //     </li>
    //   </ul>
    // </nav> */}
    </>
  );
};

export default HomePage;