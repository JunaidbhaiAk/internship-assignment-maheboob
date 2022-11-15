import React from "react";

const Card = ({title,info,image}) => {
  return (
    <div className="featurecard__card">
      <div className="card__image">
        <img src={`assests/${image}.png`} alt="c" />
      </div>
      <div className="card__info">
        <span className="card__title">{title}</span>
        <span className="card__para">
            {info}
        </span>
      </div>
    </div>
  );
};

export default Card;
