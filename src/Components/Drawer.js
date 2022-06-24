import CartTotal from "./CartTotal";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/sneakers/delete-hover.svg"
            alt="Delete Icon"
          />
        </h2>
        <div className="drawerItems ">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center  mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="Sneaker"
              />
              <div className="mb-10 mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} rub.</b>
              </div>
              <img
                className="removeBtn"
                src="/sneakers/delete-hover.svg"
                alt="Delete Icon"
                onClick={() => onRemove(obj.id)}
              />
            </div>
          ))}
        </div>

        <CartTotal />
      </div>
    </div>
  );
}

export default Drawer;
