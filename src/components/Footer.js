import React from "react";
import { Link } from "react-router-dom";
import TrustedPartners from "./TrustedPartners";

const Footer = () => {
  const productPages = [
    "Homepage 1",
    "Homepage 2",
    "Homepage 3",
    "Comparison",
    "Customer 1",
    "Customer 2",
    "Features",
    "Integrations",
    "Pricing 1",
    "Pricing 2",
  ];

  const companyPages = [
    "About",
    "Blog",
    "Blog post",
    "Brand guidelines",
    "Careers",
    "Changelog",
    "Contact",
    "Media",
  ];

  const utilityPages = [
    "Faqs",
    "Help center",
    "Privacy policy",
    "Terms of service",
    "Error 404",
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <img
            alt=""
            src="./Untitled_design-removebg-preview.png"
            className="desktop:w-10 tablet:w-10 w-8"
          />
          <p className="font-medium text-textPrimary text-p-xl pt-[6px]">
            Arhasi Inc.
          </p>
        </div>

        <div className="desktop:w-[81vw] w-[90vw] desktop:my-12 tablet:my-12 my-3 desktop:py-5 tablet:py-5 border-b-[0.25px] border-t-[0.25px] border-surfaceAccent">
          <TrustedPartners />
        </div>

        <div className="flex gap-3">
          <Link to={"#"} target="_blank" rel="noopener noreferrer">
            <div className="w-[48px] h-[48px] rounded-full bg-onBackground flex justify-center items-center">
              <img
                className="w-[16px]"
                alt=""
                src="https://framerusercontent.com/images/YivEnKuP2F7qxblVWkeqScjKp0.svg"
              />
            </div>
          </Link>

          <Link
            to={"https://x.com/aiwithintegrity"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-onBackground flex justify-center items-center">
              <img
                className="w-[16px]"
                alt=""
                src="https://framerusercontent.com/images/CvjxavKKjJ9UbSeSMCYMHUzAmk.svg"
              />
            </div>
          </Link>
          <Link
            to={"https://www.linkedin.com/company/arhasi/posts/?feedView=all"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-onBackground flex justify-center items-center">
              <img
                className="w-[16px]"
                alt=""
                src="https://framerusercontent.com/images/kprlaYt9JHb1bNxVpXs26Yszc.svg"
              />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="flex gap-32 w-[60%]">
        <div>
          <h1 className="text-p-sm font-semibold text-textPrimary">
            Product pages
          </h1>
          <ul>
            {productPages.map((eachItem) => {
              return (
                <li className="text-p-sm text-textTertiary py-2">{eachItem}</li>
              );
            })}
          </ul>
        </div>

        <div>
          <h1 className="text-p-sm font-semibold text-textPrimary">
            Company pages
          </h1>
          <ul>
            {companyPages.map((eachItem) => {
              return (
                <li className="text-p-sm text-textTertiary py-2">{eachItem}</li>
              );
            })}
          </ul>
        </div>

        <div>
          <h1 className="text-p-sm font-semibold text-textPrimary">
            Utility pages
          </h1>
          <ul>
            {utilityPages.map((eachItem) => {
              return (
                <li className="text-p-sm text-textTertiary py-2">{eachItem}</li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
