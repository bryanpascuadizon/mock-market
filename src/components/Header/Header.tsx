"use client";

import React from "react";

const Header = () => {
  const onChange = () => {};

  return (
    <div className="product_container">
      <div className="header_left_panel self-center">
        <input
          type="text"
          onChange={onChange}
          placeholder="bags, chairs..."
          className="border-2 border-black p-2 text-sm w-full"
        />
      </div>
      <div className="header_right_panel flex flex-row-reverse">
        <div className="header_sort self-center">
          <input
            type="text"
            placeholder="Default Sorting"
            className="border-2 border-slate-700 p-2 text-sm w-52"
          />
        </div>
        <div className="results_counter mr-5 self-center text-xs text-blueGrey-600 font-semibold">
          {`Showing 20 - 20 of 20 results`.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Header;
