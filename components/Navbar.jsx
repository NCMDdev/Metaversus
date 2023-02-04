"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { navLinks } from "../constants";
import { navVariants } from "../utils/motion";
import styles from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 navbar-gradient">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative `}
      >
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            METAVERSUS
          </h2>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-violet-300"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? "/close.svg" : "/menu.svg"}
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 menu-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-violet-300"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </nav>
  );
};

export default Navbar;
