import { useUI } from "../context/UIContext";

const SearchOverlay = () => {
  const { isSearchOpen, closeAll } = useUI();

  if (!isSearchOpen) return null;

  return (
    <div
      onClick={closeAll}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-24"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-2xl rounded-xl p-6 shadow-2xl animate-slideDown"
      >
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <p className="text-sm text-graay-500 mt-4">
          Try searching for "hoodie", "jacket"...
        </p>
      </div>
    </div>
  );
};

export default SearchOverlay;
