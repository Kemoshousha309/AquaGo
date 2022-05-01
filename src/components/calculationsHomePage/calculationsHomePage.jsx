import { PureComponent } from "react";
import OperationCard from "../operationCard/operationCard";
import "./calculationsHomePage.scss";

class CalculationsHomePage extends PureComponent {
  state = {
    cards: {
      oxygen: {
        imgSrc:
          "https://www.aquacultureinafrica.com/wp-content/uploads/2019/08/a-image-paddle-officielle-300x156.jpg",
        backgroundColor: "#1565c0",
        header: (
          <span>
            O<sub>2</sub>
          </span>
        ),
        content:
          " you should provide a sufficient amount of dissolved oxygen to keep your aquarium healthy and your fish in a good health",
        route: "/dissolved-oxygen",
      },
      
    },
  };
  render() {
    const {state: {cards: {oxygen}}} = this;
    return (
      <main className="calculationsHomePage container">
        <h2 className="heading-1">
          Do your calculations fast
        </h2>
        <p className="paragraph">
          Choose the operation you want to calculate and let Aqua Go to take the
          lead.
        </p>
        <div className="calculationsHomePage__operations">
          <OperationCard {...oxygen} />
        </div>
      </main>
    );
  }
}

export default CalculationsHomePage;
