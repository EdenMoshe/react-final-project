import { useState } from "react";

import "./CardEditBiz.css";

const CardEditBiz = (props) => {
  const [name, setName] = useState(props.name); //name from father
  const [desc, setDesc] = useState(props.desc); //email from father
  const [phone, setPhone] = useState(props.phone); //email from father
  const [address, setAddress] = useState(props.address);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateCard(name, desc, phone, address, props.id);
  };

  return (
    <form className="popup-wrapper " onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Description</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={desc}
          onChange={handleChangeDesc}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={phone}
          onChange={handleChangePhone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={address}
          onChange={handleChangeAddress}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default CardEditBiz;
