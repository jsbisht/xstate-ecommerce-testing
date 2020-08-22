import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
  location,
}) => {
  return (
    <div
      data-testid={`menu-item-${title.toLowerCase()}`}
      className={` ${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

// withRouter is a super(Higher Order) component, one can get access to the history object's properties
// and the closest <Route>'s match via the withRouter higher-order component. withRouter will
// pass updated match, location, and history props to the wrapped component whenever it renders.
// It is a component which takes a component as a argument and returns a tranformed component

// Concretely, a higher-order component is a function that takes a component and returns a new component.
