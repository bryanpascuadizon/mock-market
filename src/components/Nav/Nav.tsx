import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="main_nav flex p-5">
      <div className="nav_left_panel flex-grow">
        <Link href="/" className="nav_group font-bold text-xl text-blueGrey-900">
          Mock Market
        </Link>
      </div>
      <div className="nav_right_panel font-bold">
        <p>Login</p>
      </div>
    </div>
  );
};

export default Nav;
