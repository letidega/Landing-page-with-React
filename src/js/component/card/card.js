import React from "react";
import PropTypes from "prop-types";
import "../card/card.css";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} class="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text text-center">{props.description}</p>
        <div className="button d-flex justify-content-center mt-auto">
          <button className="btn btn-dark">Find out more!</button>
        </div>
      </div>
    </div>
  );
}

Card.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};
