import { useState } from "react";
import { useUI } from "../context/UIContext";

const AuthModal = () => {
  const { isAuthOpen, closeAll } = useUI();
  const [isLogin, setIsLogin] = useState(true);

  if (!isAuthOpen) return null;

  return (
    <div
      onClick={closeAll}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-2xl animate-scaleIn"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">
          {isLogin ? "welcome Back" : "create account"}
        </h2>

        <div className="space-y-4">
          {isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-black font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
