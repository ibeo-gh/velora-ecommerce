import { useState, useEffect } from "react";

const images = [
  "/images/hoodie-sales2.avif",
  "/images/hoodie-sales6.webp",
  "/images/hoodie-sales4.jpg",
  "/images/hoodie-sales5.avif",
];

const PromoBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  //auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black">
      <div className="bg-[#222222] text-white overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-16 py-4 text-sm font-medium">
          <span>Free shipping on all orders over ₦50,000!</span>
          <span>New arrivals just dropped 🔥</span>
          <span>Premium quality hoodies only</span>
          <span>Limited stock available</span>
        </div>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Hoodie ${i + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover md:object-contain bg-black transition-opacity duration-1000 ease-in-out ${current === i ? "opacity-100" : "opacity-0 z-0"}`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full opacity-70 hover:opacity-100 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full opacity-70 hover:opacity-100 transition"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${current === i ? "bg-white" : "bg-gray-500"}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="bg-black text-white text-center py-10 px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Get Updates & News
        </h2>
        <p className="text-gray-300 mb-6">
          Sign up for our newsletter to receive latest releases and offers
        </p>

        <form className="flex justify-center max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg text-black"
          />
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-r-lg transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default PromoBanner;
