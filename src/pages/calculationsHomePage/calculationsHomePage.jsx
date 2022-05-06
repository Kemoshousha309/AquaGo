import { PureComponent } from "react";
import OperationCard from "../../components/operationCard/operationCard";
import "./calculationsHomePage.scss";
import feedImg from "../../assests/feed.jpeg";
import paddelImg from "../../assests/airation.jpg";

class CalculationsHomePage extends PureComponent {
  state = {
    cards: {
      oxygen: {
        imgSrc: paddelImg,
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
      feed: {
        imgSrc: feedImg,
        backgroundColor: "#f4a261",
        header: "Feed",
        content:
          "The sufficient feed intake is a must to keep your stock in a good health and to achieve growth. Also, help to prevent bad water conditions.",
        route: "/feed-intake",
      },
    },
  };
  render() {
    const {
      state: {
        cards: { oxygen, feed },
      },
    } = this;
    return (
      <main className="calculationsHomePage container">
        <h2 className="heading-1">Do your calculations fast</h2>
        <p className="paragraph">
          Choose the operation you want to calculate and let Aqua Go to take the
          lead.
        </p>
        <div className="calculationsHomePage__operations">
          <OperationCard {...oxygen} />
          <OperationCard {...feed} />
        </div>
      </main>
    );
  }
}

export default CalculationsHomePage;
