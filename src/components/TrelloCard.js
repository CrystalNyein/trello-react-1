import React, { useContext } from "react";
import { CardView } from "../App";
import "./TrelloCard.css";

function TrelloCard({ card }) {
  const setCardView = useContext(CardView);
  return (
    <div
      className="trello-card p-2 pb-3 mb-2"
      onClick={() => {
        setCardView(true);
      }}
    >
      <span className="overlay-edit-button">
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </span>
      <p>{card.title}</p>
      <div className="card-buttons d-flex flex-row ml-1 small">
        <span className="mr-4">
          <i className="fas fa-align-justify" aria-hidden="true"></i>
        </span>
        <span className="mr-4">
          <i className="fas fa-paperclip" aria-hidden="true"></i> 1
        </span>
        <span className="mr-4">
          <i className="fab fa-github" aria-hidden="true"></i> 1
        </span>
      </div>
    </div>
  );
}

export default TrelloCard;
