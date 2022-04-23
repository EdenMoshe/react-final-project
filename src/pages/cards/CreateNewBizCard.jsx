import axios from "axios";
import Joi from "joi-browser";
import newCardSchema from "../../validation/newCardValidation";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatNewBizCard = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateNewBizCard = (event) => {
    event.preventDefault();
    const validatedValue = Joi.validate(
      { name, description, address, phone },
      newCardSchema,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedValue;
    if (error) {
      alert(error);
    } else {
      axios
        .post("/cards/", { name, description, address, phone })
        .then((res) => {
          console.log("res.data", res.data);
          history.push("/cardPanel");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  return (
    <form className="formWrapper" onSubmit={handleCreateNewBizCard}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputName4">Name</label>
          <input
            type="name"
            className="form-control"
            id="inputName4"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputDescription4">description</label>
          <input
            type="description"
            className="form-control"
            id="inputDescription4"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
        </div>
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Address"
          value={address}
          onChange={handleAddress}
        />
      </div>
      <div className="form-group  col-md-4">
        <label htmlFor="inputPhone">Phone</label>
        <input
          type="text"
          className="form-control"
          id="inputPhone"
          placeholder="Phone"
          value={phone}
          onChange={handlePhone}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create New Card
      </button>
    </form>
  );
};

export default CreatNewBizCard;
