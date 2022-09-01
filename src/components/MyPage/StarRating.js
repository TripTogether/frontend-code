import React, { Component } from "react";
import EmptyStar from "./empty-star.svg";
import FilledStar from "./filled-star.svg";
import "./StarRating.css";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = { currRating: 0 };
    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onHover(e) {
    if (e.target.className === "star") {
      this.setRating(e.target.dataset.value);
    }
  }

  onClick(e) {
    if (e.target.dataset.value === this.state.currRating) {
      this.setRating(e.target.dataset.value - 1);
    }
  }

  setRating(value) {
    this.setState({ currRating: value });
  }

  render() {
    return [...Array(this.props.starCount).keys()].map((index) => {
      return (
        <img
          data-value={index + 1}
          className="star"
          onMouseOver={this.onHover}
          onClick={this.onClick}
          src={index + 1 <= this.state.currRating ? FilledStar : EmptyStar}
          alt={
            index + 1 <= this.state.currRating ? "filled star" : "empty star"
          }
        />
      );
    });
  }
}

const RatingSystem = (props) => {
  return (
    <div>
      <div className="rating">
        <Stars starCount={props.starCount} />
      </div>
    </div>
  );
};

export default function StarRating() {
  return (
    <div className="StarRating">
      <RatingSystem starCount={5} />
    </div>
  );
}
