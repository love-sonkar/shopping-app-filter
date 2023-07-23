import { UseStoreApi } from "../hooks/ContextApiHook";

const Sidebar = () => {
  const {
    filterstate: { fastdelivery, sort, rating },
    filterdispatch,
  } = UseStoreApi();

  return (
    <div className="bg-gray-300 flex items-center px-3 py-2 flex-col md:flex-row sticky top-0">
      <h2 className="text-2xl mr-2">Filter</h2>
      <div className="flex cursor-pointer flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center justify-center gap-2">
          <label className="cursor-pointer" htmlFor="fastdelivery">
            fast delivery
          </label>
          <input
            type="radio"
            id="fastdelivery"
            onChange={() => filterdispatch({ type: "FAST_DELIVERY" })}
            checked={fastdelivery}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <label className="cursor-pointer" htmlFor="sortinghigh">
            Sort High To Low
          </label>
          <input
            type="radio"
            id="sortinghigh"
            onChange={() =>
              filterdispatch({ type: "SORT", payload: "High_to_low" })
            }
            checked={sort === "High_to_low" ? true : false}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <label className="cursor-pointer" htmlFor="sortinglow">
            Sort Low To High
          </label>
          <input
            type="radio"
            id="sortinglow"
            onChange={() =>
              filterdispatch({ type: "SORT", payload: "low_to_high" })
            }
            checked={sort === "low_to_high" ? true : false}
          />
        </div>
        <div>
          <button
            className="bg-yellow-400 py-1 px-3  text-white rounded-lg"
            onClick={() =>
              filterdispatch({
                type: "RATING",
                payload: rating == 5 ? rating - 4 : rating + 1,
              })
            }
          >
            Rating {rating}
          </button>
        </div>
        <div>
          <button
            className="bg-red-500 py-1 px-3  text-white  rounded-lg"
            onClick={() => filterdispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
