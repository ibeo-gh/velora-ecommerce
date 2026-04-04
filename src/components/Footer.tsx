const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Velora</h2>
          <p className="text-gray-400 text-sm">
            Premium hoodies designed for comfort and style. Elevate your Style.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition duration-200 cursor-pointer">
              All Products
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              New Arrivals
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Best Sellers
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition duration-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get latest updates and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-black rounded-l-lg"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Velora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
