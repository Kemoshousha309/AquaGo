import { Link } from "react-router-dom";
import CalculationsHomePage from "../calculationsHomePage/calculationsHomePage";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page container">
        <h1 className="heading-1 home-page__header">
          Boost your aquaculture decisions
        </h1>
        <p className="home-page__text">
        Use Aqua Go to do your daily calculations precisely
        </p>
        <Link to="/calculations" className="home-page__button">use now</Link>
      </div>
      <CalculationsHomePage />
    </div>
  );
}

export default HomePage;
