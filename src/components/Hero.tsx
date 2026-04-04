const Hero = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10 bg-[#f1ebeb]">
      <div className="max-w-lg animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.05] tracking-tight mb-4">
          Elevate Your Style
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Premium hoodies crafted for comfort, confidence, and everyday wear.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 active:scale-95">
          Shop Now
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <img
          src="/images/hero-hoodie.jpeg"
          alt="Hoodie"
          className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover object-[center_top] rounded-2xl shadow-xl transition duration-700 hover:scale-[1.05]"
        />
      </div>
    </section>
  );
};

export default Hero;
