import Card from "../Components/Card/Card"
import Skeleton from "../Components/Card/Skeleton"

function Home({items, cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavourite,
    onAddToCart,
isLoading}) {
        const filtereditems = items
        .filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        
        const renderItems = () => {
           
            
            return (isLoading ? <Skeleton /> : filtereditems
              .map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                  onAddToFavourite={(obj) => onAddToFavourite(obj)}
                  added = {cartItems.some(obj => Number(obj.id) === Number(item.id) )}
                  loading = {isLoading}
                />
              ))
            )
        }
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}" `
              : "Все кроссовки"}
          </h1>

          <div className="search-block d-flex ">
            <img src="/search-icon.svg" alt="search icon" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn clearBtn cu-p"
              src="/sneakers/delete-hover.svg"
              alt="Delete Icon"
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
            
          {renderItems()}
        </div>
      </div>
    )
}

export default Home