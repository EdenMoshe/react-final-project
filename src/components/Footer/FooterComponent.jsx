import "./footerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const FooterComponent = () => {
  return (
    <footer className="my_footer">
      <div className="container">
        <FontAwesomeIcon icon={faCopyright} />
        <span className="text-muted">This site was built by Eden Moshe</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
