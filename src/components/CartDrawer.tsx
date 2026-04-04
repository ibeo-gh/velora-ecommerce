import { useUI } from "../context/UIContext";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const { isCartOpen, closeAll } = useUI();
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div onClick={closeAll} className="flex-1 bg-black/40 backdrop-blur-sm" />

      <div className="w-[350px] bg-white h-full shadow-2xl p-6 animate-slideInRight flex flex-col">
        <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 text-sm mt-10">
              <p className="mb-2">🛒 Your cart is empty.</p>
              <p className="text-xs">Add some items to your cart!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-3">
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.name} x {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t pt-4 space-y-3">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Total</span>
            <span className="font-semibold">₦{total.toLocaleString()}</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
