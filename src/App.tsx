import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <CartProvider>
      <UIProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </MainLayout>
      </UIProvider>
    </CartProvider>
  );
}

export default App;
