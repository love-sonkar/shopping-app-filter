import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { UseStoreApi } from "./hooks/ContextApiHook";
import { HiShoppingCart } from "react-icons/hi";
const Header = () => {
  const {
    filterstate: { searchquery },
    filterdispatch,
  } = UseStoreApi();

  return (
    <>
      <header className="w-full flex items-center justify-between bg-gray-300 shadow-lg py-3 px-2 text-3xl gap-3">
        <Link to="/" className="logo">
          <h2>Love</h2>
        </Link>
        <div className="flex-1">
          <input
            type="text"
            value={searchquery}
            onChange={(e) =>
              filterdispatch({
                type: "SEARCH",
                payload: e.target.value.toLowerCase().trim(),
              })
            }
            className="outline-none py-1 px-2 text-xl w-full rounded "
          />
        </div>
        <Link to="/cart" className="cart">
          <HiShoppingCart />
        </Link>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
