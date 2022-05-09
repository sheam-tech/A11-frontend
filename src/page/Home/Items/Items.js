import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import useItems from "../../../hooks/useItems/useItems";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items] = useItems();


  return (
    <Fragment>
      <div className="text-center our-style mt-5">
        <h1>IN STOCK</h1>
        <div className="align-items-center justify-content-center d-flex">
          <hr className="line" />
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <Row xs={1} md={3} className="g-4  mx-0 ">
          {items.slice(0, 6).map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </Row>
      </div>

      <div className="mb-5 mt-5  justify-content-center align-self-center d-flex">
        <Link to="manageItems">
          <button className="btn-style ">Manage Inventory</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Items;




// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div >
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//            {[1, 2, 3, 4,].map((item, index) => {
//              return <div key={index}> {item} </div>
//            })}
//         </Slider>
//       </div>
//     );
//   }
// }
