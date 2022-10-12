import React from "react";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            GitHub Topic Explorer
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
