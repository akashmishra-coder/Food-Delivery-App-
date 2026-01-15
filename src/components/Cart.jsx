import { useDispatch, useSelector } from "react-redux";
import ItemList, { CartItemList } from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  const handlerClearitem = () => {
    dispatch(clearItem());
  };

  // compute subtotal (uses same unit as items use for display)
  const subtotal = cart.reduce((s, item) => {
    const price = item?.card?.info?.price ?? item?.card?.info?.defaultPrice ?? 0;
    return s + Number(price || 0);
  }, 0);

 

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Items column (spans 2 on md+) */}
        <section className="md:col-span-2 bg-zinc-100 rounded-xl  shadow-md p-6 min-h-[60vh]">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold">Cart Items</h2>
              <p className="text-sm text-gray-500 mt-1">{cart.length} item{cart.length !== 1 ? "s" : ""} in cart</p>
            </div>

            <div className="flex items-center justify-end flex-wrap md:flex-nowrap gap-3">
              <button
                onClick={handlerClearitem}
                // disabled={cart.length === 0}
                className="bg-red-500 text-white px-3 py-2 rounded-md text-sm active:scale-95 transition cursor-pointer"
              >
                Clear all
              </button>

              <Link to="/" className="text-sm text-indigo-600 hover:underline">Continue shopping</Link>
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          {cart.length === 0 ? (
            <Emptycartbody />
          ) : (
            <div className="overflow-y-auto max-h-[56vh] pr-2">
              <CartItemList cardData={cart} />
            </div>
          )}
        </section>

        {/* Summary column */}
        <aside className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Order summary</h3>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-lg font-medium">₹ {subtotal.toLocaleString()}</span>
          </div>

          <div className="py-3">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Estimated delivery</span>
              <span>30-40 min</span>
            </div>
            <div className="mt-3 text-sm text-gray-600">Taxes and fees calculated at checkout</div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              disabled={cart.length === 0}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md disabled:opacity-60"
            >
              Proceed to Checkout
            </button>

            <Link to="/" className="w-full text-center text-indigo-600 px-4 py-2 rounded-md border border-indigo-100">Keep shopping</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Cart;

const Emptycartbody = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-28 h-28 rounded-full bg-indigo-50 flex items-center justify-center text-4xl">🛒</div>
      <h3 className="text-xl font-semibold">Your cart is empty</h3>
      <p className="text-sm text-gray-500">Add some delicious meals to get started.</p>
      <Link to="/" className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 active:scale-95 transition">Go to Home</Link>
    </div>
  );
}
