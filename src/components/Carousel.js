import React from "react";
import Card from "../components/Card";
import creative from "../assets/images/creativeproj.png";
import stickup from "../assets/images/stickup.png";
import mendoza from "../assets/images/mendoza.png";
import expense from "../assets/images/expenseTrack.png";
import evverest from "../assets/images/evverest.png";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "StickUp",
          subTitle: "A simple note taking app",
          imgSrc: stickup,
          link: "https://github.com/emilabz/StickUp",
          selected: false,
        },
        {
          id: 1,
          title: "Mendoza",
          subTitle: "A 2D shooter arcade iOS game",
          imgSrc: mendoza,
          link: "https://github.com/emilabz/Mendoza-iOS",
          selected: false,
        },
        {
          id: 2,
          title: "Expense Tracker",
          subTitle: "All your expenses in one place",
          imgSrc: expense,
          link: "https://github.com/emilabz/ExpenseTracker",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
