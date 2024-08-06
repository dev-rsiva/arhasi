import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "../../components/ButtonComp";
import TrustedPartners from "../../components/TrustedPartners";
import BlogpostCards from "../../components/BlogpostCards";
import Footer from "../../components/Footer";
import TestimonalRotator from "../../components/TestimonialRotator";

const OurCustomers = () => {
  const typesOfCustomers = [
    {
      imageUrl:
        "https://framerusercontent.com/images/sjfubrZwBJQ7HO8tbSfDm2NVooA.jpg",
      title: "Our Fintech Customers",
      desc: "Fintech clients use our secure and compliant AI to empower themselves in  the ever-changing digital finance markets",
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/eth6BrLFxca5uFC1Q2hiJcEEdY.jpg",
      title: "Our Healthcare Customers",
      desc: "Healthcare clients turn to our HIPAA compliant, PHI / PII masking AI to better protect and serve their patients",
    },
  ];

  const bestOfArhasi = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M7 3H4v3H2V1h5v2zm15 3V1h-5v2h3v3h2zM7 21H4v-3H2v5h5v-2zm13-3v3h-3v2h5v-5h-2zm-1 0c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM15 8H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z"></path>
        </svg>
      ),
      title: "AI Trust, Risk, & Security Management",
      desc: "With Confidentiality Concierge™ Security Cockpit",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
        </svg>
      ),
      title: "Continuous Threat Exposure Management",
      desc: "At your fingertips within the R.A.P.I.D. ecosystem",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
        </svg>
      ),
      title: "Sustainable and Scalable Technology",
      desc: "Foundational, customizeable, and scalable solutions",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
        </svg>
      ),
      title: "AI Development & Enhancements",
      desc: "Bleeding edge AI technology with constant adaptability",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
        </svg>
      ),
      title: "Intelligent Applications and Solutions",
      desc: "AI paired with our team's best-in-class inventive thinking",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M14 2H4v20h16V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"></path>
        </svg>
      ),
      title: "Democratized and Compliant Generative AI",
      desc: "Designed to meet compliance and regulatory policies",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      ),
      title: "Augmented Connected Workforce",
      desc: "AI agents and platforms to bring teams closer together",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-8C8.14 3 3 8.14 3 14s5.14 11 11 11 11-5.14 11-11S19.86 3 13 3zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"></path>
        </svg>
      ),
      title: "Machine Customers and New Demand",
      desc: "AI solutions to meet changing markets and demands",
    },
  ];

  // const testimonalsInfo = [
  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Coupling Arhasi’s AI frameworks and tools is the accelerator pedal for rapid AI adoption",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Wendy Varnell",
  //     role: "Chief Strategy Officer of LifeWorks",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },
  // ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, { replace: true }); // Force a full page reload
    window.scrollTo(0, 0); // Scroll to the top
  };

  return (
    <div className="text-white relative top-[62px] w-full h-full px-[112px] ">
      <div className="relative w-full h-full mx-auto mb-[90px]">
        <div
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/Pj07C9ziBYGTiVpxHPtHvd8fVg.jpg?scale-down-to=1024)",
            backgroundPosition: "center",
          }}
          className="mt-12 w-[1120px] h-[573px] overflow-hidden rounded-2xl border border-slate-700 shadow-surfaceAccent shadow-2xl flex flex-col justify-center"
        >
          {/* <img
            className="w-full h-full object-cover"
            alt=""
            src="https://framerusercontent.com/images/Pj07C9ziBYGTiVpxHPtHvd8fVg.jpg?scale-down-to=1024"
          /> */}
          <div
            className="w-[1120px] h-full absolute inset-0 opacity-75 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, black, rgba(0, 0, 0, 0.5))",
            }}
          ></div>
          <div className="absolute w-[33%] mx-24">
            <h1 className="text-xl text-textPrimary font-medium">
              How to deploy AI in record time
            </h1>
            <div className="w-full flex justify-between my-8">
              <div className="flex flex-col">
                <h1 className="text-lg font-medium text-textAccent">4 Week</h1>
                <p className="text-p-sm text-textPrimary">
                  custom AI deployment
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-medium text-textAccent">4 Week</h1>
                <p className="text-p-sm text-textPrimary">time to value</p>
              </div>
            </div>
            <div className="my-8">
              <p className="text-p-md text-textSecondary">
                With a{" "}
                <span className="text-center px-1">
                  <img
                    alt=""
                    src="./Image_20240711_224454_109-removebg-preview.png"
                    className="w-auto h-[14px] inline mb-[2px]"
                  />{" "}
                  <sup className="text-[10px]">™</sup>
                </span>{" "}
                deployment of Arhasi’s backend APIs and bringing CSO Wendy
                Varnell’s vision to life, LifeWorks was able to beta launch a
                GenAI Human Resources AI Agent 12x faster than usual
              </p>
            </div>
            <ButtonComp buttonName="Read the Story" />
          </div>
        </div>
      </div>

      {/* <div className="mt-[150px] mb-[90px]">
        <div className="mb-[-20px]">
          <TrustedPartners />
        </div>
        <BlogpostCards />
      </div> */}

      <div className="w-full flex justify-end mb-16 pr-14">
        <div className="w-[38%] text-display-3 font-medium text-end">
          <h1 className="text-textPrimary ">Industry Suites</h1>
          <p className="text-textTertiary">just got sweet</p>
        </div>
      </div>

      <ul className="w-full flex items-center justify-evenly mb-[90px]">
        {typesOfCustomers.map((customerType) => {
          return (
            <li className="w-[42%]">
              <div className="w-full h-[255px] rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src={customerType.imageUrl}
                />
              </div>
              <div className="pt-8">
                <h1 className="text-sm text-accent font-semibold">
                  {customerType.title}
                </h1>
                <p className="font-medium text-[#888888] text-p-lg py-6">
                  {customerType.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="w-full flex justify-between items-center mb-16 pl-2">
        <div className=" flex-1 text-display-3 font-medium text-start">
          <h1 className="text-textPrimary ">Get strategic with</h1>
          <p className="text-textTertiary">the best of Arhasi</p>
        </div>

        <div onClick={() => handleNavigation("/services")}>
          <ButtonComp buttonName="Learn More" />
        </div>
      </div>

      <div className="mb-24">
        <ul className="flex flex-wrap gap-4">
          {bestOfArhasi.map((eachInfo) => {
            return (
              <li className="w-[23%] flex flex-col gap-6 p-8 my-4 rounded-2xl border border-surfaceAccent bg-onBackground">
                <div className="w-[24px] flex justify-start">
                  {eachInfo.icon}
                </div>
                <div className="text-wrap text-p-md text-textSecondary">
                  {eachInfo.title}
                </div>
                <div className="text-p-xs text-textTertiary">
                  {eachInfo.desc}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full flex justify-between items-center mb-24 pl-2">
        <div className="w-[55%]">
          <div className=" flex-1 text-display-3 font-medium text-start">
            <h1 className="text-textPrimary ">Spotlight</h1>
            <p className="text-textTertiary">Testimonal</p>
          </div>
          <div className="">
            <p className="text-md text-textPrimary font-medium my-6">
              Helping LifeWorks employees better help those in need with
              Arhasi's{" "}
              <span className="px-2">
                <img
                  alt=""
                  src="./Image_20240711_224454_109-removebg-preview.png"
                  className="w-auto h-[24px] inline mb-1"
                />{" "}
                <sup className="desktop:text-[12px] tablet:text-[10px] text-[8px]">
                  ™
                </sup>
              </span>{" "}
              for Nonprofits
            </p>
          </div>

          <div>
            <p className="text-p-xl text-textPrimary font-medium my-6">
              "Coupling Arhasi’s AI frameworks and tools is the accelerator
              pedal for rapid AI adoption. The LifeWorks AI employee assistant
              offers our employees a superior alternative for policy and
              procedure guidance.” Wendy Varnell, LifeWorks CSO
            </p>

            <div className="w-full flex gap-3 justify-start items-center">
              <img
                className="w-[32px] rounded-md"
                alt=""
                src="https://framerusercontent.com/images/oHlOEqIKzyu3whGMmSxxvWlexMw.jpg"
              />

              <span className="text-p-sm text-textPrimary font-semibold my-6">
                Melody Roth
              </span>
              <p className="text-p-sm text-textTertiary">
                ― Executive Director, Arhasi
              </p>
            </div>

            <div className="text-p-md text-textSecondary my-6">
              LifeWorks is a leading nonprofit dedicated to improving the lives
              of those in Austin, Texas via housing, counseling, and education &
              career services. Facing similar challenges as nonprofits do with
              resource strain and effective employee onboarding, LifeWorks
              brought in Arhasi to deliver a low-cost, high-value GenAI Agent
              that would serve to help employees navigate a complex regulatory
              and logistical environment.
            </div>
          </div>
        </div>

        <div className="min-w-[350px] flex flex-col gap-24 bg-onBackground rounded-xl p-8 mr-10">
          <div>
            <img
              className="h-[32px] w-auto mb-12"
              alt=""
              src="https://framerusercontent.com/images/ooIBz0lqFywlBlO3XlXM0y2VQlY.png"
            />

            <div className="my-6">
              <p className="text-p-sm text-textPrimary font-semibold">
                Industry
              </p>
              <p className="text-p-sm text-textTertiary font-semibold">
                Nonprofit
              </p>
            </div>

            <div className="my-6">
              <p className="text-p-sm text-textPrimary font-semibold">
                Location
              </p>
              <p className="text-p-sm text-textTertiary font-semibold">
                Austin, Texas
              </p>
            </div>

            <div className="my-6">
              <p className="text-p-sm text-textPrimary font-semibold">Date</p>
              <p className="text-p-sm text-textTertiary font-semibold">
                From 1998
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                style={{
                  userSelect: "none",
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                  fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                  flexShrink: 0,
                  color:
                    "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                }}
              >
                <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8zm9-4h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"></path>
              </svg>
            </div>
            <Link to={"https://www.lifeworksaustin.org/"}>
              LifeWorks Homepage
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-40">
        <h1 className="text-md font-medium text-textPrimary">
          Faster Time to Value with the Power of Partners
        </h1>

        <p className="text-p-md text-textSecondary my-6">
          As a Google Startup Partner, Arhasi teamed up with Google to execute
          an exquisite Retrieval Augmented Generation (RAG) employee assistant
          with Gemini 1.5-Flash in VertexAI. Arhasi's dedicated industry suite
          "R.A.P.I.D. for Nonprofits" combines proprietary, foundational
          components of the Arhasi GenAI ecosystem to create a custom solution
          to help nonprofits seamlessly adopt GenAI and maneuver compliance and
          regulatory requirements with proficiency and ease. As part of this
          suite, LifeWorks' "GenAI Employee Assist" leverages Arhasi's
          quickstart platform for Autonomous AI Agents and Bots with a tailored
          twist.
        </p>
      </div>

      <div className="mb-48">
        <p className="text-md text-textPrimary font-medium mb-16">
          Why people love to love us.
        </p>

        {/* <ul className="horizontal-scroll flex gap-6 w-full py-8">
          {testimonalsInfo.map((testimonal) => {
            return (
              <li className="scroll-item min-w-[385px] border border-surfaceAccent rounded-2xl p-5 bg-onBackground">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <img
                      alt=""
                      src={testimonal.image}
                      className="w-[48px] rounded-md"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-p-md font-semibold text-textPrimary">
                        {testimonal.name}
                      </h3>
                      <p className="text-p-md text-textTertiary">
                        {testimonal.role}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <img
                      alt=""
                      src="https://framerusercontent.com/images/MfN5IY6irWR4u0LvOWYdWORDSw.svg"
                      className="w-[48px] rounded-md"
                    />
                  </div>
                </div>

                <p className="text-p-md text-textTertiary my-6">
                  "{testimonal.review}"
                </p>
              </li>
            );
          })}
        </ul> */}

        <TestimonalRotator />
      </div>

      <div className="relative w-full h-full mx-auto bg-onBackground">
        <div
          // style={{
          //   backgroundImage:
          //     "url(https://framerusercontent.com/images/Pj07C9ziBYGTiVpxHPtHvd8fVg.jpg?scale-down-to=1024)",
          //   backgroundPosition: "center",
          // }}

          className="my-24 w-[1120px] h-[573px] overflow-hidden rounded-2xl border border-slate-700 shadow-surfaceAccent shadow-2xl flex flex-col justify-center"
        >
          {/* <div
            className="w-[1120px] h-full absolute inset-0 opacity-75 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, black, rgba(0, 0, 0, 0.5))",
            }}
          ></div> */}
          <div className="w-full mx-auto px-48">
            <h1 className="text-xl text-center text-textPrimary font-medium">
              Learn how people like you are leveraging Arhasi to develop AI
              literacy and prowess.
            </h1>
            <div className="my-8">
              <p className="text-p-lg text-center text-textTertiary mx-12">
                Every Monday, you'll get a short article, offerings update, or
                fresh perspective that will help you achieve more with Arhasi.
              </p>
            </div>
            <div className="bg-black flex justify-between rounded-full px-6 py-3 mx-24">
              <input
                className="outline-none bg-transparent border-surfaceAccent"
                type="text"
                placeholder="Your email"
              />
              <button className="text-textPrimary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
        <br className="py-4" />
      </div>
    </div>
  );
};

export default OurCustomers;
