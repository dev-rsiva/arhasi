import React from "react";

const FeatureOne = () => {
  const gradientBackgroundStyle = {
    backgroundImage: "conic-gradient(#000000, #C10104)",
    filter: "blur(48px)",
  };

  return (
    <div className="flex desktop:flex-row flex-col justify-center items-center gap-12 desktop:my-48 my-24">
      <div className="desktop:w-[50%] max-w-[550px] mx-auto">
        <p className="text-p-subheading text-textAccent font-sans font-semibold tracking-wider my-3">
          OUR PLATFORM
        </p>
        <h1 className="desktop:text-display-3 tablet:text-display-3 text-md my-5">
          Unleash the full power{" "}
          <span className="text-textTertiary">of Arhasi's </span>
          <span>
            <img
              alt=""
              src="./feature1_bg_removed.png"
              className="w-auto h-[32px] my-4 inline"
            />{" "}
            <sup className="text-sm">™</sup>
          </span>
        </h1>

        <h2 className="text-textSecondary desktop:text-p-lg tablet:text-p-lg text-p-md my-5">
          Our trademarked{" "}
          <span className="px-2">
            <img
              alt=""
              src="./Image_20240711_224454_109-removebg-preview.png"
              className="w-auto h-[16px] inline mb-1"
            />{" "}
            <sup className="desktop:text-[8px] tablet:text-[8px] text-[6px]">
              ™
            </sup>
          </span>{" "}
          platform is an end to end platform for faster GenAI Development,
          Validation and Integrity Assurance.
        </h2>
        <ul className="text-p-md text-textPrimary my-5">
          <li className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              style={{
                marginRight: "6px",
                userSelect: "none",
                width: "16px",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                flexShrink: 0,
              }}
            >
              <path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42C20.18 17.27 21 15.23 21 13c0-2.74-1.23-5.19-3.16-6.84l-1.42 1.42C17.99 8.86 19 10.82 19 13zm-3-8l-4-4v3c-4.97 0-9 4.03-9 9 0 2.23.82 4.27 2.16 5.84l1.42-1.42C5.59 16.21 5 14.68 5 13c0-3.86 3.14-7 7-7v3l4-4z"></path>
            </svg>
            15+ AI Libraries{" "}
            <span className="text-textTertiary">evaluated and validated</span>
          </li>

          <li className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              style={{
                marginRight: "6px",
                userSelect: "none",
                width: "16px",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                flexShrink: 0,
              }}
            >
              <path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path>
            </svg>{" "}
            13 Integrations{" "}
            <span className="text-textTertiary">
              with the most commonly used platforms
            </span>
          </li>

          <li className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              style={{
                marginRight: "6px",
                userSelect: "none",
                width: "16px",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                flexShrink: 0,
              }}
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>{" "}
            10+ AI Libraries{" "}
            <span className="text-textTertiary">
              integrated and ready to use
            </span>
          </li>

          <li className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              style={{
                marginRight: "6px",
                userSelect: "none",
                width: "16px",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                flexShrink: 0,
              }}
            >
              <path d="M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path>
            </svg>{" "}
            16 Security Controls{" "}
            <span className="text-textTertiary">
              pre-verified and deployable
            </span>
          </li>

          <li className="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              style={{
                marginRight: "6px",
                userSelect: "none",
                width: "16px",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                flexShrink: 0,
              }}
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
            </svg>{" "}
            20+ Integrity Metrics & KPIs{" "}
            <span className="text-textTertiary">
              built-in for inherent compliance{" "}
            </span>
          </li>
        </ul>
      </div>

      <div className="relative max-w-[500px] max-h-[500px]">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#ff0000] z-0 opacity-50"
          style={gradientBackgroundStyle}
        ></div>
        <img
          className="flex justify-center items-center relative z-[1]"
          alt=""
          src="https://framerusercontent.com/images/w7eFnTf9EH3zszbEQh7kTKjsWY.png"
        />
      </div>
    </div>
  );
};

export default FeatureOne;
