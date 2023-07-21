import { Link } from "react-router-dom";
import { HiMenuAlt1, HiShoppingCart } from "react-icons/hi";
import { UseStoreApi } from "./hooks/ContextApiHook";
import Sidebar from "./components/Sidebar";
const Header = () => {
  const { state } = UseStoreApi();
  console.log(state);
  return (
    <>
      <header className="sticky top-0 w-full flex items-center justify-between bg-gray-300 shadow-lg py-3 px-2 text-3xl">
        <div className="md:hidden block cursor-pointer">
          <HiMenuAlt1 />
        </div>
        <Link to="/" className="logo">
          <h2>Love</h2>
        </Link>
        <Link to="/cart" className="cart">
          <HiShoppingCart />
        </Link>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
