import { Link } from "react-router-dom";
import "./operationCard.scss";

function OperationCard({ imgSrc, backgroundColor, header, content, route }) {
  return (
    <Link to={route} style={{backgroundColor: backgroundColor}} className="operationCard">
      <figure className="operationCard__figure">
        <img
          src={imgSrc}
          alt="water airation"
        />
      </figure>
      <div className="operationCard__content">
        <h3 className="operationCard__header">
          {header}
        </h3>
        <p className="operationCard__paragraph">
         {content}
        </p>
      </div>
    </Link>
  );
}

export default OperationCard;
