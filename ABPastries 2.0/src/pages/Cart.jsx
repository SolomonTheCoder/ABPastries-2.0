import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import "../Styles/Cart.css"
import cartImg from "../assets/icons/mdi--cart.svg"
import Remove from "../assets/icons/pajamas--remove.svg"

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="Cart h-full flex flex-col p-20 -mt-[55px] gap-5">
      <div className="flex items-center">
       <div className="w-15" > 
        <img className="w-[100%]" src={cartImg} alt="" />
        </div>
        <h2 className="text-7xl">Cart</h2>
      </div>
      <div className="bg-[#DDCACA8C] rounded-2xl p-5">
        {cartItems.length === 0 ? <p className="text-4xl">Cart is empty</p> : (
          <ul className=" flex flex-col gap-10">
            {cartItems.map((item) => (
              <li className="bg-white p-5 rounded-2xl flex flex-row justify-between items-center" key={item.id}>
                <div className="w-[223px] h-[182px]">
                  <img className="w-full h-[182px]" src={item.image} alt="" />
                </div>
                <div className="space-y-3">
                  <p className="text-4xl font-bold">{item.name} </p>
                  <p className="text-4xl font-normal"> ${item.price.toFixed(2)}</p>
                  <div className="flex flex-row items-center space-x-25 ">
                    <div className="flex flex-row items-center gap-5">
                      <button className="bg-[#910F3F] text-white w-[25px] h-[25px]" onClick={() => removeFromCart(item.id)} disabled={item.quantity === 1}>-</button>
                      <span className="text-[40px]">{item.quantity}</span>
                      <button className="bg-[#910F3F] text-white w-[25px] h-[25px]" onClick={() => addToCart(item)}>+</button>
                    </div>
                    <button className="bg-[#910F3F] w-[35px] h-[35px] flex justify-center items-center rounded-3xl" onClick={() => removeFromCart(item.id, true)}>
                      <img className="" src={Remove} alt="" />
                    </button>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
