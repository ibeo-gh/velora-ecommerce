import { categories } from "../data/categories";

const CategorySection = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
        Shop Collections
      </h2>

      <div className="grid md:grid-cols-3 gap-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover object-[center_top] transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <p className="text-sm opacity-80">Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
