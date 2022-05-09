import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
       <ScrollToTop smooth />
     <div className="footer-style " >
     <div className="row mx-0 justify-content-evenly">
        <div className="col-6 text-center">
          <h3>About Us</h3>
            <p>Apple Collection is an American multinational technology dealer that specializes in consumer electronics, software and online services headquartered in Cupertino, California, United States. Apple is the largest information technology dealer by revenue (totaling US$365.8 billion in 2021) and as of January 2021, it is the world's most valuable dealer, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology dealers, alongside Alphabet, Amazon, Meta, and Microsoft.</p>
            

        </div>
        
        <div className="col-6 text-center">
          <h3>Contact</h3>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> <strong>Address:</strong>{" "}
            3242 California, USA{" "}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong>{" "}
            928-34-54-65752{" "}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
            Apple.c@gmail.com{" "}
          </p>
        </div>
      </div>
        <div className="text-center cop-right mt-5" >
        <p>
          <small> Copyright © {year} Apple Collection Ltd. All rights reserved.</small>
        </p>
      </div>
     </div>
    
    </Fragment>
  );
};

export default Footer;
