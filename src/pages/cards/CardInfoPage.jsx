import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./cardInfo.css";

const CardInfo = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get(`/cards/card/${id}`)
      .then((res) => {
        console.log("res:", res.data);
        setName(res.data.name);
        setDesc(res.data.description);
        setAddress(res.data.address);
        setPhone(res.data.phone);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  const handleChange = () => {
    return;
  };

  return (
    <form className="info-form my-info-form">
      <div className="form-row my-form-row ">
        <div className="form-group col-md-6 form-info-row my-form-info-row info">
          <label htmlFor="inputEmail4">Name:</label>
          <input
            type="text"
            className="form-control form-info-row my-form-info-row"
            id="inputEmail4"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-md-6 form-info-row my-form-info-row info">
          <label htmlFor="inputPassword4">Description:</label>
          <input
            type="text"
            className="form-control form-info-row my-form-info-row"
            id="inputPassword4"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6 form-info-row my-form-info-row info">
          <label htmlFor="inputPassword4">Address:</label>
          <input
            type="text"
            className="form-control form-info-row my-form-info-row"
            id="inputPassword5"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6 form-info-row my-form-info-row info">
          <label htmlFor="inputPassword4">Phone:</label>
          <input
            type="text"
            className="form-control form-info-row my-form-info-row"
            id="inputPassword6"
            value={phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group"></div>
    </form>
  );
};

export default CardInfo;
