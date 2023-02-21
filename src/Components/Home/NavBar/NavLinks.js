import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/vendor/dashboard"
          aria-label="Blog"
          title="Blog"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Dashboard
        </a>
      </li>
    </>
  );
};

export default NavLinks;
