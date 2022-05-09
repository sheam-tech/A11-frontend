import React, { Fragment } from 'react';
import Carousel from '../Carousel/Carousel';
import Dealership from '../Dealership/Dealership';
import Items from '../Items/Items';
import Accordion from '../accordion/accordion';


const Home = () => {
  return (
    <Fragment>
      <Carousel/>
      <Items/>
      <Accordion/>
    
      <Dealership/>
      
    </Fragment>
  );
};

export default Home;