import { Fragment } from "react";
import attorney1 from "../../assets/attorney1.jpg";
import attorney2 from "../../assets/attorney2.jpg";
import attorney3 from "../../assets/attorney3.jpg";
import LadyJustice from "../../assets/LadyJustice.jpg";
import "./homePage.css";

const HomePage = () => {
  return (
    <Fragment>
      <div className="homePageContainer">
        <div className="homeBanner">
          <img
            className="card-img-top ladyJustice"
            src={LadyJustice}
            alt="Card image cap"
          />
          <h1 className="mainHeder">
            Calderon & Co.
            <br /> lawyer office
          </h1>
          <br />
          <br />
        </div>

        <h1>Meet our team</h1>

        <div className="cardsContainer">
          <div className="card attorneyCard">
            <img
              className="card-img-top"
              src={attorney1}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>lawyer Oren Israel</h4>
                Graduate (M.A.) in Law (Bar-Ilan University)
              </p>
            </div>
          </div>

          <div className="card attorneyCard">
            <img
              className="card-img-top"
              src={attorney2}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>lawyer Ofir Bar-El</h4>
                Bachelor of Laws (L.LB) from the Faculty of Law at Tel Aviv
                University
              </p>
            </div>
          </div>

          <div className="card attorneyCard ">
            <img
              className="card-img-top"
              src={attorney3}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <h4>lawyer Orit Aviv</h4>
                Bachelor of Laws (L.LB) from Kiryat Ono College, and has had a
                law license since 2010.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
