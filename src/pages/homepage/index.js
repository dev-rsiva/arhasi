import React from "react";
import BlogpostCards from "../../components/BlogpostCards";
import TrustedPartners from "../../components/TrustedPartners";
import Features from "../../components/Features";
import IntegrationsOverview from "../../components/IntegrationsOverview";
import Testimonals from "../../components/Testimonals";
import Footer from "../../components/Footer";
import ButtonComp from "../../components/ButtonComp";
import HoverButton from "../../components/HoverButton";

const HomePage = () => {
  const buttonList = [
    "I want to see use cases",
    "Can you show me value drivers?",
    "How do you reduce hallucinations?",
    "What you do?",
  ];
  return (
    <div className="">
      <div className="relative h-[425px]">
        <div className="absolute w-full h-full top-[62px]">
          <video
            src="https://framerusercontent.com/assets/Gqyk5GCpvnzXB3umf1NVOCOd5o.mp4"
            loop
            playsInline
            autoPlay
            muted
            className="cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center"
          />
        </div>
        <div className="relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-40%] z-10 flex flex-col items-center justify-center w-full h-full px-36 tablet:px-20 mobile:px-8 small-mobile:px-4 text-center">
          <h1 className="text-textPrimary text-[60px] tablet:text-[60px] mobile:text-[48px] small-mobile:text-[36px] font-medium text-center my-2">
            {/* From Concept to Secure AI: <br /> 4 Weeks to Operational MVP with
            Material Impact */}
            Welcome to Arhasi, <br />
            Your all-in-one Protected <br />
            AI control center.
          </h1>
          {/* Needed Later on */}
          {/* <p className="text-white text-md tablet:text-sm mobile:text-xs small-mobile:text-xs my-1">
            How can we help you today?
          </p> */}

          {/* <div className="flex gap-3 w-full my-6">
            <input
              type="text"
              value=""
              className="w-full flex-1 bg-[#EBEBEB] rounded-md p-3 text-textOnAccent px-4 py-1 tablet:py-0 mobile:py-0 small-mobile:py-0 outline-none"
              placeholder="Ask us anything!"
            />
            <button className="button bg-gray-700 py-3 px-4 mobile:p-4 small-mobile:p-4 text-white rounded-md">
              Enter
            </button>
          </div>

          <div className="my-2 flex justify-center flex-wrap">
            {buttonList.map((eachButton) => {
              return (
                // <button className="btn heroBtn text-white font-semibold px-5 py-3 mx-2">
                //   <span>{eachButton}</span>
                // </button>
                <HoverButton key={eachButton} label={eachButton} />
              );
            })}
          </div> */}
        </div>
      </div>
      <div className="desktop:mx-[112px] tablet:mx-[48px] mx-[24px] mt-28 desktop:mt-20">
        <BlogpostCards />
        <TrustedPartners />
        <div className="mt-10 ">
          <Features />
        </div>
        <IntegrationsOverview />
        <Testimonals />
      </div>
      <div className="relative my-24">
        <img
          className="w-full h-full"
          alt=""
          src="https://framerusercontent.com/images/tMLIYY04tYQyrf852TDJOHP0GUE.svg"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] desktop:translate-y-[-35%] tablet:translate-y-[-25%] translate-y-[10%] w-full desktop:px-64 tablet:px-32 px-6 text-center desktop:text-md tablet:text-md text-sm text-textPrimary font-medium font-sans">
          <p>
            Start building trusted, robust AI solutions faster than you ever
            imagined with Arhasi—the premier Secure AI Solutions Enterprise
            Marketplace.
          </p>
          <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] mx-2 my-10">
            Get Started
          </button>
        </div>
      </div>
      <div className="desktop:mx-[112px] tablet:mx-[48px] mx-4 mobile:mt-72 small-mobile:mt-[340px]">
        <Footer />
        <br className="desktop:py-4 tablet:py-4 py-4" />
      </div>
    </div>
  );
};

export default HomePage;
