function CartTotal() {
  return (
    <div className="cartCheckOut">
      <ul>
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>

        <li className="d-flex">
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className="greenButton">
        Оформить заказ <img src="/sneakers/arrow.svg" alt="Arrow" />
      </button>
    </div>
  );
}

export default CartTotal;
