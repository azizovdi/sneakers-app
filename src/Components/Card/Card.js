import cardStyles from "./Card.module.scss";
import { useState } from "react";
import ContentLoader from "react-content-loader";

function Card({
  id,
  imageUrl,
  price,
  title,
  onPlus,
  onAddToFavourite,
  favourited = false,
  added = false,

  loading = true,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavourite, setIsFavourite] = useState(favourited);

  const handlePlus = () => {
    onPlus({ id, imageUrl, price, title });
    setIsAdded(!isAdded);
  };

  const handleFavourite = () => {
    onAddToFavourite({ id, imageUrl, price, title });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={cardStyles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="116" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="145" rx="10" ry="10" width="100" height="15" />
          <rect x="0" y="179" rx="10" ry="10" width="80" height="25" />
          <rect x="117" y="173" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="12" rx="10" ry="10" width="150" height="90" />
        </ContentLoader>
      ) : (
        <>
          <div className="favourite">
            <img
              onClick={handleFavourite}
              src={
                isFavourite
                  ? "/sneakers/heart-clicked.png"
                  : "/sneakers/heart-default.svg"
              }
              alt="Not liked"
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <button onClick={handlePlus} className={cardStyles.plus}>
              <img
                src={
                  isAdded ? "/sneakers/plus-clicked.svg" : "/sneakers/plus.svg"
                }
                alt="Plus Icon"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
