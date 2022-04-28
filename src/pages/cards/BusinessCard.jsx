import "./BusinessCard.css";
import userIconMen from "../../assets/userIconMen.png";

const BusinessCard = (props) => {
  const handleDeleteClick = () => {
    props.onDeleteCard(props.id);
  };

  const handleEditClick = () => {
    props.onEditCard(props.id);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={userIconMen} className="card-img-top" alt="userImage" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <h6 className="card-subtitle mb-2 font-bolder">{props.phone}</h6>
          <h6 className="card-subtitle mb-2">{props.address}</h6>
        </div>
        {props.userIdCard === props.LoggedInUserData._id ? (
          <div className="card-footer">
            {props.LoggedInUserData.biz && (
              <button
                type="button"
                className="btn btn-danger btns"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            )}
            {props.LoggedInUserData.biz && (
              <button
                type="button"
                className="btn btn-info btns"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
