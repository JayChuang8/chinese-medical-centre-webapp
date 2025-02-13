import React from "react";
import { Link } from "react-router-dom";

type CardItemProps = {
  color?: string;
  imageSrc: string;
  label: string;
  path: string;
  text: string;
};

function CardItem({ color, imageSrc, label, text, path }: CardItemProps) {
  return (
    <>
      <li className="services-section-item">
        <Link className="services-section-item-link" to={path}>
          <figure
            className="services-section-item-pic-wrap"
            data-category={label}
          >
            <img className="services-section-item-img" src={imageSrc} />
          </figure>
          <div
            className="services-section-item-info"
            style={{ backgroundColor: color }}
          >
            <h5 className="services-section-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
