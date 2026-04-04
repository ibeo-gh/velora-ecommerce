import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import SearchOverlay from "../components/SearchOverlay";
import CartDrawer from "../components/CartDrawer";
import AuthModal from "../components/AuthModal";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnnouncementBar />
      <Navbar />
      <SearchOverlay />
      <CartDrawer />
      <AuthModal />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
