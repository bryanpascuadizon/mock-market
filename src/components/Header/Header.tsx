"use client";

import React from "react";

const Header = () => {
  const onChange = () => {};

  return (
    <div className="flex">
      <div className="header_left_panel flex-grow">
        <div>
          <input
            type="text"
            onChange={onChange}
            placeholder="bags, chairs..."
            className="border-4 border-black p-2 text-sm w-[25%]"
          />
        </div>
      </div>
      <div className="header_right_panel flex">
        <div className="results_counter mr-5 self-center text-sm text-blueGrey-600 font-semibold">Showing 1 - 16 of 111 results</div>
        <div className="header_sort self-center">
          <input
          type="text"
          placeholder="Default Sorting"
          className="border-4 border-slate-700 p-2 text-sm w-52"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
