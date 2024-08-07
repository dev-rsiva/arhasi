import React from "react";

const FeatureThree = () => {
  const savingsInfo = [
    { percent: "30%", itemName: "GenAI App Development Cost" },
    { percent: "38%", itemName: "GenAI Use Case Activation Timeline" },
    { percent: "40%", itemName: "GenAI Model Testing Time" },
    {
      percent: "32%",
      itemName: "Regulatory, Security and Compliance Processes",
    },
  ];

  const gradientBackgroundStyle = {
    backgroundColor: "red", // Fallback color
    backgroundImage: "conic-gradient(#000000, #C10104)",
    filter: "blur(48px)",
  };

  return (
    <div className="flex desktop:flex-row flex-col justify-center items-center gap-12 desktop:my-48 my-24">
      <div className="desktop:w-[50%] max-w-[550px] mx-auto">
        <p className="text-p-subheading text-textAccent font-sans font-semibold tracking-wider my-3">
          IMMEDIATE RESULTS
        </p>
        <h1 className="desktop:text-display-3 text-md my-5">
          Achieve Savings{" "}
          <span className="text-textTertiary">at the click of a button</span>
        </h1>
        <h2 className="text-textSecondary desktop:text-p-lg tablet:text-p-lg text-p-md my-5">
          Our AI Marketplace is designed to bring you plug-and-play solutions
          all while reducing the overhead costs and resourcing required,
          allowing you to move fast and make waves.
        </h2>
        <div
          className="bg-onBackground rounded-2xl desktop:px-10 px-4 desktop:pt-10 desktop
        :pb-6 py-4 border border-surfaceAccent"
        >
          <h3 className="desktop:mb-6 tablet:mb-8 mb-4 text-p-lg text-textPrimary font-semibold">
            Reductions & Improvements
          </h3>
          <ul>
            {savingsInfo.map((eachItem) => {
              return (
                <li>
                  <p className="desktop:text-md tablet:text-md text-sm text-accent">
                    {eachItem.percent}
                  </p>
                  <p className="text-p-sm text-textPrimary">
                    {eachItem.itemName}
                  </p>
                  <hr className="h-[0.25px] bg-surfaceAccent border-none desktop:my-3 my-3" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="relative max-w-[500px] max-h-[800px]">
        <div
          style={gradientBackgroundStyle}
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#ff0000] z-0 opacity-50"
        ></div>
        <img
          className="flex justify-center items-center relative z-[1]"
          alt=""
          src="./feature3_bg_removed.png"
        />
      </div>
    </div>
  );
};

export default FeatureThree;
