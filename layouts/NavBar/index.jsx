import React, { useState, useEffect } from "react";
import CrossButton from "./CrossButton";
import InvertedButton from "./InvertedButton";
import Logo from "./Logo";
import Button from "./Button";
import Toggle from "./ThemeToggle";
import { ThemeProvider } from "./ThemeToggle/ThemeContext";
import Link from "next/link";
import { BsLayoutTextSidebar } from "react-icons/bs";

const navbar = [
  { page: "ຮ້ານຄ້າ", href: "/", order: 0 },
  { page: "ວິທິການສັ່ງຊື້", href: "/", order: 1 },
  { page: "ກ່ຽວກັບຮ້ານເຮົາ", href: "/", order: 2 },
];

export default function Navbar({ Children }) {
  const [scrollY, setScrollY] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [active, setActive] = useState(0);
  function showButton() {
    setScrollY(window.pageYOffset);
  }
  function watchScroll() {
    window.addEventListener("scroll", showButton);
  }
  useEffect(() => {
    watchScroll();
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  });

  return (
    <ThemeProvider>
      <p className="rotate-90">test</p>
      <div
        className={`sticky top-0 z-50 transition-all ${
          scrollY > 10 ? "bg-yellow-400" : "bg-white"
        } dark:bg-black`}
      >
        <nav id="navbar" className="flex justify-between p-2 px-4">
          <div className="flex items-center justify-between w-full">
            <Logo onClick={() => setActive(0)} />
            <ul className="hidden lg:flex lg:justify-center w-full">
              {navbar.map((item) => {
                return (
                  <>
                    <li className="mr-7" onClick={() => setActive(item.order)}>
                      <Link href={item.href}>
                        <a
                          className={`font-medium ${
                            active === item.order
                           ? "bg-yellow-500 rounded-lg" : ""
                          } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                        >
                          {item.page}
                        </a>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="gap-1 hidden w-48 xl:flex">
              <InvertedButton>ເຂົ້າສູ່ລະບົບ</InvertedButton>
              <Button>ລົງທະບຽນ</Button>
            </div>
          </div>

          <BsLayoutTextSidebar
            className="m-auto xl:hidden mr-5  h-8 w-8"
            // className="m-auto xl:hidden mr-5 dark:text-white white:text-dark bg-yellow:text-white h-8 w-8 text-yellow-500"
            aria-label="humburger"
            onClick={() => setOpenNav((val) => !val)}
          />
          <Toggle className="m-auto" />
        </nav>
        <div
          className={`xl:hidden fixed top-0 left-0 z-40 ${
            !openNav ? "hidden" : "inline-block"
          }  w-full h-full bg-opacity-50 bg-coolGray-900`}
        >
          <div className="fixed top-0 bottom-0 left-0 w-2/3 max-w-xs bg-white dark:bg-black">
            <nav className="relative h-full p-6 overflow-y-auto">
              <div className="flex flex-col justify-between h-full">
                <Logo onClick={() => setActive(0)} />
                <ul className="py-6">
                  {navbar.map((item) => {
                    return (
                      <>
                        <li className="mr-12" onClick={() => setActive(item.order)}>
                          <Link href={item.href}>
                            <a
                              className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === item.order ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                            >
                              {item.page}
                            </a>
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div className="flex flex-wrap">
                  <div className="w-full mb-2">
                    <InvertedButton className="w-full text-center">
                      Login
                    </InvertedButton>
                  </div>
                  <div className="w-full">
                    <Button className="w-full text-center">Sign Up</Button>
                  </div>
                </div>
              </div>
            </nav>
            <CrossButton onClick={() => setOpenNav((val) => !val)} />
          </div>
        </div>
      </div>
      {Children}
    </ThemeProvider>
  );
}
