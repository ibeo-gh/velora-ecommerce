import { FaTruck, FaLock, FaHeadset, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck size={20} />,
    title: "Free Shipping",
    desc: "On all orders over ₦50,000",
  },
  {
    icon: <FaLock size={20} />,
    title: "Secure Payment",
    desc: "100% protected transactions",
  },
  {
    icon: <FaHeadset size={20} />,
    title: "24/7 Support",
    desc: "We are here to help anytime",
  },
  {
    icon: <FaCheckCircle size={20} />,
    title: "Quality Guarantee",
    desc: "Premium materials only",
  },
];

const Services = () => {
  return (
    <section className="px-6 md:px-12 py-16 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm p-6 h-[280px] flex flex-col justify-between items-center text-center hover:shadow-md transition"
          >
            <div className="bg-black text-white p-3 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
