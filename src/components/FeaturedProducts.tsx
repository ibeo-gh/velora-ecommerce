import { FaStar } from "react-icons/fa";
import { useState } from "react";
import type { Product } from "../types/product";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [addedId, setAddedId] = useState<number | null>(null);

  const { addToCart } = useCart();

  return (
    <>
      <section className="px-6 md:px-12 py-20 md:28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Featured Products
            </h2>
            <button className="text-sm text-gray-600 hover:text-black transition">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] object-cover object-[center_top] transition duration-500 group-hover:scale-1.08"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
                        Sale
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product);
                      setAddedId(product.id);
                      setTimeout(() => setAddedId(null), 1500);
                    }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-300"
                  >
                    {addedId === product.id ? "Added ✓" : "Add to Cart"}
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="absolute top-3 right-3 bg-white text-xs px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
                  >
                    View
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        className={
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {product.name}
                  </p>
                  <p className="text-base font-semibold text-black mt-1">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl"
          >
            <img
              src={selectedProduct.image}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-900">
              {selectedProduct.name}
            </h3>

            <p className="text-gray-600 mt-1">
              ₦{selectedProduct.price.toLocaleString()}
            </p>

            <button
              onClick={() => {
                addToCart(selectedProduct!);
                setAddedId(selectedProduct.id);
                setTimeout(() => setAddedId(null), 1500);
              }}
              className="mt-4 w-full bg-black text-white py-2 rounded-lg"
            >
              {addedId === selectedProduct.id ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
