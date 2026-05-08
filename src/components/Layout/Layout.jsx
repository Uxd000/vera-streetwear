import { Outlet } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <CartDrawer />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}