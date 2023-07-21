import React from "react";

const Sidebar = () => {
  const FilterList = [
    { id: 1, title: "Price Low To High" },
    { id: 2, title: "Price High To Low" },
    { id: 3, title: "Highest Rated" },
    { id: 4, title: "Fast Delivery" },
  ];
  return (
    <div className="bg-gray-300 flex items-center px-3">
      <h2 className="text-2xl mr-2">Filter</h2>
      {FilterList &&
        FilterList?.map((item) => (
          <div className="cursor-pointer flex ">
            <input
              type="radio"
              name="filter"
              id=""
              className="cursor-pointer"
            />
            <p>{item.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
