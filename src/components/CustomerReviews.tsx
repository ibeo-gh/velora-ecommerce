import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "James Okoro",
    text: "Absolutely love the quality, fits perfectly and feels premium.",
    image: "/images/hoodie-review-img5.jpeg",
    rating: 5,
  },
  {
    name: "Adaeze Nwosu",
    text: "Fast delivery and amazing material. I'll definitely order again.",
    image: "/images/hoodie-review-img1.jpeg",
    rating: 5,
  },
  {
    name: "David Mensah",
    text: "Very stylish hoodie. Got compliments the first day I wore it.",
    image: "/images/hoodie-review-img4.jpeg",
    rating: 4,
  },
  {
    name: "Chinelo Eze",
    text: "Good value for money. The fabric is soft and comfortable.",
    image: "/images/hoodie-review-img3.jpeg",
    rating: 4,
  },
  {
    name: "Emeka Obi",
    text: "The hoodie is great but the sizing runs a bit small. Consider sizing up.",
    image: "/images/hoodie-review-img2.jpeg",
    rating: 3,
  },
];

const CustomerReviews = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Customer Reviews</h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marqueeSlow w-max">
          {reviews.concat(reviews).map((review, i) => (
            <div key={i} className="flex">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 w-[260px] h-[340px] text-center flex flex-col justify-between flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full mx-auto mb-3 object-cover"
                />

                <p className="text-gray-500 text-sm leading-relaxed">
                  {review.text}
                </p>
                <h4 className="font-semibold text-gray-900 mt-4">
                  {review.name}
                </h4>

                <div className="flex justify-center mt-4 gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      size={12}
                      className={
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
