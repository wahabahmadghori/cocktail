import React from "react";
import {Link} from "react-router-dom"

export default function Cocktail({ id, info, category, image, glass }) {
  return (
    <article className="cocktail">
      <img src={image} alt={category} className="img-container" />
      <div className="cocktail-footer">
        <h3>{category}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`SingleCocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
      </div>
    </article>
  );
}
