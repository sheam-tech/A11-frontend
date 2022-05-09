import React, { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  const { _id, img, name, description, price, quantity, supplier } = item;
  
  const navigate = useNavigate();

  const handleNavigate = id => {
    navigate(`/inventory/${id}`);
  }

  return (
    <Fragment>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col >
          <Card className="card-style shadow-sm">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h3>{name}</h3>
              </Card.Title>

              <div>
                <p>{description.slice(0, 117)} ...</p>
                <h6> <strong>Price:</strong> ${price}</h6>
                <h6> <strong>Quantity:</strong> {quantity}</h6>
                <h4> <strong>Supplier:</strong> {supplier}</h4>
                <button onClick={() => handleNavigate(_id)} className="btn-style">Update Item</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default Item;
