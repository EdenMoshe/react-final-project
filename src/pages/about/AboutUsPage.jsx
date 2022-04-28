import { Fragment } from "react";
import "./aboutUsComponent.css";
import lawyerDesk from "../../assets/lawyerDesk.jpg";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="aboutContainer">
        <img
          className="card-img-top ladyJustice"
          src={lawyerDesk}
          alt="Card image cap"
        />
        <h1>About Calderon & Co. Law Office</h1>
        <p>
          Calderon & Co. Law Office is one of the leading and oldest law firms
          in Israel, according to a rating by BDI. The firm specializes in
          high-level legal advice and litigation, in the areas of real estate,
          planning and construction law, and notary services.
        </p>

        <div className="aboutCardsContainer">
          <div className="card aboutCard">
            <img
              className="card-img-top-about"
              src={services1}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>Real Estate Law</h4>
                Accompanying and representing buyers, sellers and tenants in
                real estate transactions, real estate, urban renewal, NAP 38,
                review of agreements and contracts, real estate taxation,
                registration of rights, management of negotiations and
                representation in all instances
              </p>
            </div>
          </div>

          <div className="card aboutCard">
            <img
              className="card-img-top-about"
              src={services2}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>Planning and construction</h4>
                Legal advice on planning and construction issues, legal and
                creative solutions, providing opinions, submitting objections
                and representation before the various courts
              </p>
            </div>
          </div>

          <div className="card aboutCard">
            <img
              className="card-img-top-about"
              src={services3}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>Notary services</h4>
                Notary services, for the purpose of verifying documents of legal
                significance, intended to be used as evidence in court or before
                other authorities in Israel and abroad
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
