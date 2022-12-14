import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
import { useSelector } from "react-redux";
const CartItem = ({ imgURL }) => {
  const cartItems = useSelector((list) => list.cart.itemlist);
  const showcard = useSelector((list) => list.cart.showcart);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(
      cartActions.addtoCart({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    );
  };
  return (
    <>
      {showcard && (
        <div className="cart-container">
          {showcard &&
            cartItems.map((item) => {
              return (
                <>
                <div className="cartItem" key={item.id}>
                  <img className="img" src={item.imgURL} />
                  <h2> {item.name}</h2>
                  <p>${item.price} /-</p>
                  <p>x{item.quantity}</p>

                  <button
                    className="cart-actions"
                    onClick={() =>
                      dispatch(cartActions.removeFromCart(item.id))
                    }
                  >
                    -
                  </button>
                  <button
                    className="cart-actions"
                    onClick={() => addHandler(item)}
                  >
                    +
                  </button>
                  
                </div>
                <br/>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default CartItem;
