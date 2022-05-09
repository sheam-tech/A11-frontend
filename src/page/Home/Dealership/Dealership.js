import { faTv, faDollarSign, faIndustry, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import './Dealership.css'


const Dealership = () => {
  return (
    <Fragment>

        <section  className='pb-5 pt-2 dealer-container bg-color ' >
          <h1 className='text-center mb-5 mt-5 header-style' >Our Dealership At a Glance</h1>

            <div className="row text-center mx-0 mb-5">
              <div className="col-md-3">
                 <FontAwesomeIcon className='icon-style' icon={faTv} />
                 
                 <h1><CountUp end={65000} delay={5} duration={2} /> Unit</h1>
                 <p>Product Sold</p>
              </div>
              <div className="col-md-3">
              <FontAwesomeIcon className='icon-style' icon={faDollarSign} />
                <h1>$<CountUp end={515000} delay={5} duration={2} /></h1>
                <p>Transaction Amount</p>
              </div>
              <div className="col-md-3">
              <FontAwesomeIcon className='icon-style' icon={faUsers} />
              <h1><CountUp end={100} delay={5} duration={2} />%</h1>
              <p>Satisfied Customers</p>
              </div>
              <div className="col-md-3">
              <FontAwesomeIcon className='icon-style' icon={faIndustry} />
              <h1><CountUp end={27} delay={5} duration={2} /></h1>
              <p>Successful Company Dealings</p>
              </div>
            </div>
<div className='containers'><div className='container'><h1 className='pay'>Pay Us or Support Us Via(❤)-</h1></div><img src="https://www.tetrahostbd.com/blog/wp-content/uploads/2020/01/SSLCommerz-Pay-With-logo-All-Size-05.png" className="d-block w-50" alt="..."/></div>

        </section>

    </Fragment>
  );
};

export default Dealership;