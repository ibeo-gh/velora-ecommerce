import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const relatedProducts = products
    .filter((p) => p.id !== product?.id)
    .slice(0, 4);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    setSelectedImage(product.image);
    setQuantity(1);
  }, [product]);

  return (
    <>
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[500px] md:h-[550px] object-cover rounded-xl shadow-lg"
            />
            <div className="flex justify-center gap-3 mt-4">
              {[product.image, product.image, product.image].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 hover:scale-105 transition object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? "border-black" : "border-transparent"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold mt-4 text-black">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Premium quality hoodie designed for comfort and everyday wear.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addToCart(product, quantity);
                setAdded(true);
                setTimeout(() => setAdded(false), 1500);
              }}
              className="mt-8 w-full bg-black text-white py-4 rounded-full transition duration-300 hover:bg-gray-800 hover:shadow-xl active:scale-95"
            >
              {added ? "Added ✓" : `Add ${quantity} to Cart`}
            </button>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-12 pb-16 bg-white">
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-xl font-semibold mb-6">Related products</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover group-hoverr:scale-105 transition duration-300"
                />

                <div className="p-3">
                  <p className="text-sm text-gray-700 font-medium">
                    {item.name}
                  </p>
                  <p className="text-sm font-semibold">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
