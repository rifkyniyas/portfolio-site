"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="fixed inset-x-0 z-50 flex flex-wrap items-center justify-between 
    border-b border-opacity-50 border-white"
    >
      <div className="container flex flex-wrap items-center justify-between ">
        <div
          className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
        "
        >
          <a
            className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-primary"
            href="/"
          >
            Rifky Niyas
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon icon="ci:hamburger-md" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center py-3" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4 text-sm list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 
                hover:underline underline-offset-8"
                href="/"
              >
                <Icon icon="majesticons:home-line" />
                <span className="ml-2 ">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 
                hover:underline underline-offset-8"
                href="https://findrifky.netlify.app/"
                target="_blank"
              >
                <Icon icon="bytesize:link" />
                <span className="ml-2">View All Links</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 
                hover:underline underline-offset-8"
                href="mailto:rifkyniyas@gmail.com"
              >
                <Icon icon="mingcute:code-line" />
                <span className="ml-2">Work With Me</span>
              </a>
            </li>
            <li className="nav-item pb-3 md:py-5 ">
              <a
                href="https://www.buymeacoffee.com/rifkyniyas"
                target="_blank"
                class="flex items-center justify-center gap-x-2 px-5 py-3 font-medium text-center 
            text-white rounded-lg bg-primary hover:bg-opacity-75"
              >
                <Icon icon="cib:buy-me-a-coffee" />
                <span>Support My work</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
