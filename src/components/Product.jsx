import { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";



export const Product = ({ product }) => {
    const {cart,setCart}=useContext(cartContext)
  const addCart = () => {
    setCart([...cart,product])
  };
  const removeCart = () => {
    setCart(cart.filter((c)=>c.id !== product.id))
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3> {product.name} </h3>
        <p>Price Rs: {product.amt} </p>
        {cart.includes(product) ? (
          <button className="btnRemove" onClick={removeCart}>Remove from Cart</button>
        ) : (
          <button onClick={addCart}>Add Cart</button>
        )}
      </div>
    </div>
  );
};
