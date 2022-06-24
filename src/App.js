import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
import { useState, useEffect } from "react";
import axios from "axios";
import Favourites from "./pages/Favourites";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartRes = await axios.get(
        "https://62990690bf77b6025825e57a.mockapi.io/cart"
      );

      const favouritesRes = await axios.get(
        "https://62990690bf77b6025825e57a.mockapi.io/favourites"
      );

      const itemsRes = await axios.get(
        "https://62990690bf77b6025825e57a.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(cartRes.data);
      setFavourite(favouritesRes.data);
      setItems(itemsRes.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://62990690bf77b6025825e57a.mockapi.io/cart/${obj.id}`
      );
      setCartItems(
        (prev) => (prev = prev.filter((item) => item.id !== obj.id))
      );
    } else {
      axios.post(`https://62990690bf77b6025825e57a.mockapi.io/cart/`, obj);
      setCartItems((prev) => (prev = [...prev, obj]));
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://62990690bf77b6025825e57a.mockapi.io/favourites/${obj.id}`
        );
        setFavourite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://62990690bf77b6025825e57a.mockapi.io/favourites",
          obj
        );

        setFavourite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error");
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://62990690bf77b6025825e57a.mockapi.io/cart/${id}`);
    setCartItems((prev) => (prev = prev.filter((item) => item.id !== id)));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          cartItems={cartItems}
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavourite={onAddToFavourite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favourites" exact>
        <Favourites
          items={favourite}
          onAddToCart={onAddToCart}
          onAddToFavourite={onAddToFavourite}
        />
      </Route>
    </div>
  );
}

export default App;
