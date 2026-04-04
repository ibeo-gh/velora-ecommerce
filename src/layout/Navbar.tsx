import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useUI } from "../context/UIContext";

const Navbar = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { openSearch, openCart, openAuth } = useUI();

  return (
    <>
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-[32px] left-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">Velora</h1>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <div
              onMouseEnter={() => setOpen("home")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              {open === "home" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="bg-white shadow-lg rounded-lg py-2 w-40 text-sm">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Hompage 1
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Hompage 2
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setOpen("about")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">About</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              {open === "about" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="bg-white shadow-lg rounded-lg py-2 w-40 text-sm">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Our Story
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Team
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setOpen("shop")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">Shop</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {open === "shop" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="w-[600px] bg-white shadow-2xl rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <img
                          src="./images/hoodie2.webp"
                          className="rounded-lg object-cover h-full"
                        />
                      </div>

                      <div className="col-span-2 grid grid-cols-2 gap-6 text-sm">
                        <div className="px-6 border-l border-gray-200 flex flex-col items-center justify-center">
                          <h4 className="font-semibold mb-2">Shop</h4>
                          <ul className="space-y-1 text-gray-600">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              All Products
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              New Arrivals
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Trending
                            </li>
                          </ul>
                        </div>

                        <div className="pl-6 border-l border-gray-200 flex flex-col items-center justify-center">
                          <h4 className="font-semibold mb-2">Categories</h4>
                          <ul className="space-y-1 text-gray-600">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Hoodies
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              T-Shirts
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Jackets
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setOpen("sale")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">Sale</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>

              {open === "sale" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="w-[600px] bg-white shadow-2xl rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <img
                          src="./images/hoodie-discount4.jpeg"
                          className="rounded-lg object-cover h-full"
                        />
                      </div>

                      <div className="col-span-2 grid grid-cols-2 text-sm">
                        <div className="px-6 border-l border-gray-200 flex flex-col items-center justify-center">
                          <h4 className="font-semibold mb-2">Seasonal</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Sales
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Flash Sales
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Bundle Deals
                            </li>
                          </ul>
                        </div>

                        <div className="px-6 border-l border-gray-200 flex flex-col items-center justify-center">
                          <h4 className="font-semibold mb-2">Offers</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Discount
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              First Timer
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Referral
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setOpen("review")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">Review</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {open === "review" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="bg-white shadow-lg rounded-lg py-2 w-40 text-sm">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Recommendations
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Ratings
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setOpen("contact")}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <button className="relative group">
                <span className="hover:text-black transition">Contact</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
              {open === "contact" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="bg-white shadow-lg rounded-lg py-2 w-40 text-sm">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Contact us
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Email us
                    </p>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-5 text-gray-700">
            <FiSearch
              onClick={openSearch}
              className="cursor-pointer hover:text-black transition"
              size={18}
            />
            <div className="relative">
              <FiShoppingCart
                onClick={openCart}
                className="cursor-pointer hover:text-black transition"
                size={18}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-[2px] rounded-full animate-scaleIn">
                  {cart.length}
                </span>
              )}
            </div>
            <FiUser
              onClick={openAuth}
              className="cursor-pointer hover:text-black transition"
              size={18}
            />
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-800"
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-6 text-gray-500"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-5 text-gray-800 font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Sale</a>
            <a href="#">Review</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
