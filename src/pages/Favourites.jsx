import Card from "../Components/Card/Card"

function Favourites({id, items, onAddToCart, onAddToFavourite, isLoading}) {
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
           Закладки
          </h1>

          
        </div>

        <div className="d-flex flex-wrap">
        {items &&
            items
              .map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                  favourited={true}
                  onAddToFavourite={onAddToFavourite}
                  loading={false}
                  
                />
              ))}
        </div>
      </div>
    )
}

export default Favourites