'use client';

import useCartStore from '@/app/store/cartStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cart, clearCart, removeItem, updateQuantity } = useCartStore();
  const router = useRouter();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="flex-1 px-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      disabled={item.quantity === 1} // Disable if quantity is 1
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between text-lg font-medium mb-2">
              <p>Total Items:</p>
              <p>{cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </div>
            <div className="flex justify-between text-lg font-medium mb-4">
              <p>Total Price:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <button
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
