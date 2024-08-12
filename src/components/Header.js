import React, { useState, useEffect, useRef } from "react";
import { button, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [hideNavMenu, setHideNavMenu] = useState(true);
  console.log(hideNavMenu);
  const navigate = useNavigate();
  const mobileNavRef = useRef(null);
  const menuBtnRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path, { replace: true }); // Force a full page reload
    window.scrollTo(0, 0); // Scroll to the top
  };

  useEffect(() => {
    console.log("useEffect in header");
    const handleResize = () => {
      console.log("resize");
      if (window.innerWidth > 1200) {
        console.log("making false");

        setHideNavMenu(true);
      }
      return;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      e.stopPropagation();
      if (
        !menuBtnRef?.current?.contains(e.target) &&
        !mobileNavRef?.current?.contains(e.target) &&
        !hideNavMenu
      ) {
        setHideNavMenu(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  useEffect(() => {
    if (!hideNavMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hideNavMenu]);

  return (
    <div>
      <header className="header-blur fixed top-0 z-50 w-full py-2 bg-gradient-to-b from-[#5f5b5bb2] to-[#000d0f] border-b border-surfaceAccent">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex items-center desktop:gap-16">
            <div>
              <button
                onClick={() => {
                  setHideNavMenu(true);
                  handleNavigation("/");
                }}
              >
                <img
                  className="w-24 mb-1"
                  alt=""
                  src="./Arhasi_new_website_logo-removebg-preview.png"
                />
              </button>
            </div>

            <div
              ref={mobileNavRef}
              className={`absolute desktop:static z-50 desktop:min-h-fit min-h-[60vh] left-0 ${
                hideNavMenu
                  ? "bottom-[100%] -z-[10]"
                  : "top-[100%] bg-onBackground bg-opacity-85"
              } w-full desktop:w-auto flex items-center px-5`}
            >
              <ul
                className="flex flex-col desktop:flex-row desktop:items-center desktop:gap-[4vw] gap-8"
                onClick={() => setHideNavMenu(true)}
              >
                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/about-us")}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/our-customers")}
                  >
                    Our Customers
                  </button>
                </li>
                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/products")}
                  >
                    Products
                  </button>
                </li>

                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/services")}
                  >
                    Services
                  </button>
                </li>

                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/ai-with-integrity")}
                  >
                    {/* AI with Integrity™ */}
                    AI with Integrity
                  </button>
                </li>

                <li>
                  <button
                    className="text-textPrimary hover:text-textAccentHover"
                    onClick={() => handleNavigation("/contact-us")}
                  >
                    Contact us
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* <button className="button text-textPrimary px-5 py-2 rounded-full">
              Login
            </button> */}
            <div ref={menuBtnRef}>
              <FontAwesomeIcon
                icon={hideNavMenu ? faBars : faXmark}
                onClick={() => {
                  console.log(hideNavMenu);
                  setHideNavMenu(!hideNavMenu);
                }}
                className="w-[22px] text-sm desktop:hidden cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
