import React, {Component} from 'react';
import './App.css';
import Card from './Card.js';

class Body extends Component {
  createContent() {
    const cards = [];
    window.storage.cards.forEach((card, index) => {
      if(card.section === this.props.selectedSection) {
        cards.push(<Card content={card.content} key={index}/>);
      }
    });

    return (
      <div>
        {cards}
      </div>
    )
  }

  render() {
    return (
      <div className="Body">
        {this.createContent()}
      </div>
    );
  }
}

export default Body;
