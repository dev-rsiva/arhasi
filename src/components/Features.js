import React, { useState } from "react";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

const Features = () => {
  const [scrollText, setScrollText] = useState(false);

  return (
    <div>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />

      <div
        className="text-scroll-container overflow-hidden w-full whitespace-nowrap text-center text-textPrimary font-medium desktop:text-2xl tablet:text-xl mobile:text-lg small-mobile:text-sm bg-onBackground desktop:py-[60px] tablet:py-[40px] mobile:py-[20px] small-mobile:py-[12px] rounded-full border border-surfaceAccent desktop:my-64 my-20 flex cursor-pointer mx-auto"
        onMouseEnter={() => setScrollText(true)}
        onMouseLeave={() => setScrollText(false)}
      >
        {!scrollText && (
          <h1 className="static-text w-full text-center">
            Launch faster with Arhasi
          </h1>
        )}
        {scrollText && (
          <div className="scroll-text-wrapper flex">
            <h1 className="scroll-text pr-[24px]">
              Security Governance Compliance Customization Accessibility
            </h1>
            <h1 className="scroll-text pr-[24px]">
              Security Governance Compliance Customization Accessibility
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
