import React, { Fragment } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import useItems from "../../hooks/useItems/useItems";
import "./MangeItems.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ManageItems = () => {
  const [items, setItems] = useItems();
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure item is deleted");
    if (proceed) {
      const url = `https://boiling-lake-18195.herokuapp.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
      toast("Deleted Successfully");
    }
  };
  return (
    <Fragment>
      <div className="text-center w-md-50 our-style mt-5">
        <h1>Manage Inventory {items.length} </h1>
        <div className="align-items-center justify-content-center d-flex">
          <hr className="line" />
        </div>
      </div>

      <Table
        className="text-center mx-0 table-container mt-5 mb-5"
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            {/* <th>Supplier Name</th> */}
            <th>Update Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item?.img} alt="" />{" "}
              </td>
              <td>{item?.name}</td>
              <td> ${item?.price}</td>
              <td>{item?.quantity}</td>
              {/* <td>{item?.supplier}</td> */}
              <td>
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="update-btn"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteItem(item._id)}
                  className="remove-icon"
                >
                  {" "}
                  <FontAwesomeIcon icon={faTrashCan} />{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Fragment>
  );
};

export default ManageItems;
