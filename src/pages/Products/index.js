import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ButtonComp from "../../components/ButtonComp";
import { carouselImages } from "../../utils/constants";
import Footer from "../../components/Footer";
import TrustedPartners from "../../components/TrustedPartners";

const ProductsPage = () => {
  const [carouselImage, setCarouselImage] = useState(0);
  console.log(carouselImage);
  const featuresInfo = [
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
          <path d="M3.87 20.21v-9.03l-3.19 7.7 3.19 1.33zm18.92-2.43L16.31 2.14 5.26 6.71l6.48 15.64 11.05-4.57zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 13h3.45l-3.45-8.34v8.34z"></path>
        </svg>
      ),
      title: "Prompt Frameworks",
      desc: "Streamline the process of creating and refining AI prompts, ensure consistency, and enhance the quality of AI-generated responses",
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
          <path d="M17 20v-9h-2V4h7l-2 5h2l-5 11zm-2-7v7H2v-7h13zm-8.75 2.75h-1.5v1.5h1.5v-1.5zM13 4v7H2V4h11zM6.25 6.75h-1.5v1.5h1.5v-1.5z"></path>
        </svg>
      ),
      title: "AI Safeguard Controls",
      desc: "Mitigate risks by preventing harmful behavior, ensuring compliance with regulations, and protecting user data, fostering trust in your AI & data",
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
          <path d="M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path>
        </svg>
      ),
      title: "PII/PCI/PHI Obfuscation",
      desc: "Protect sensitive data from unauthorized access and ensure privacy and security while maintaining the utility of your datasets",
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
          <path d="M21.16 7.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm-4.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20v-9z"></path>
        </svg>
      ),
      title: "KPI Dashboards",
      desc: "Get real-time insights into operational performance and enable data-driven decision-making with complex data made simple",
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
          <path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z"></path>
        </svg>
      ),
      title: "Traceability Logs",
      desc: "Document the flow of data and operations within your AI ecosystem, ensuring transparency and accountability",
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
          <path d="M8 8H6v9h11v-2H8z"></path>
          <path d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z"></path>
        </svg>
      ),
      title: "Dynamic Test Suites",
      desc: "Ensure that your models and applications meet specified requirements and perform as expected under various conditions",
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
          <path d="M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"></path>
          <path d="M13 12.5v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-4.04-.85-1.21 1.23L10.13 23h8.97l1.09-7.64-6.11-2.86H13z"></path>
        </svg>
      ),
      title: "Model Switching",
      desc: "Optimize performance with the most suitable model for each task, improving the overall effectiveness of your AI solutions",
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
          <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
        </svg>
      ),
      title: "Predefined AI Integrations",
      desc: "Simplify the deployment process, and quickly leverage AI capabilities without extensive customization or development for faster time to value",
    },
  ];

  const trustedStartups = [
    "https://framerusercontent.com/images/hQR8FfhSIlkH1EmP18eNWCBaJkU.png?scale-down-to=1024",
    "https://framerusercontent.com/images/PhrTK7FTH9DrndbOwmFrfiA5E.png",
    "https://framerusercontent.com/images/jRFMO1AExQlZjYbcenAPeA1Grw.jpg",
    "https://framerusercontent.com/images/B3Lq3sWPowTvh44vtolteCKUk.svg",
    "https://framerusercontent.com/images/B3Lq3sWPowTvh44vtolteCKUk.svg",
    "https://framerusercontent.com/images/B3Lq3sWPowTvh44vtolteCKUk.svg",
  ];

  const videoRef = useRef(null);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, { replace: true }); // Force a full page reload
    window.scrollTo(0, 0); // Scroll to the top
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 2.0; // Set playback speed to 2x

      video.addEventListener("waiting", () => {
        console.log("Video is buffering...");
      });

      video.addEventListener("canplay", () => {
        console.log("Video can play");
      });

      video.addEventListener("error", (e) => {
        console.error("Error loading video:", e);
      });
    }
  }, []);

  // useEffect(() => {
  //   let unmount = setInterval(() => {
  //     console.log(carouselImage);
  //     if (carouselImage === 2) {
  //       setCarouselImage(0);
  //       return;
  //     } else {
  //       setCarouselImage((prev) => prev + 1);
  //     }
  //   }, 1000);

  //   return () => clearInterval(unmount, 1000);
  // }, []);

  // useEffect(() => {
  //   const video = document.getElementById("myVideo");
  //   if (video) {
  //     video.playbackRate = 2.0; // Set playback speed to 2x
  //   }
  // }, []);

  return (
    <div className="text-white relative top-[62px] w-full h-full desktop:px-[112px] tablet:px-[48px] px-[24px] ">
      <div className="flex flex-col gap-2 justify-center items-start my-20 desktop:w-[58%] tablet:w-[58%] mx-auto">
        <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
          OUR BREAD AND BUTTER
        </p>

        <div className="desktop:text-display-2 tablet:text-[45px] text-md text-textPrimary font-medium">
          AI Security & Governance
        </div>

        <div className="desktop:text-display-2 tablet:text-[45px] text-md text-textPrimary font-medium flex justify-center gap-4 desktop:items-baseline tablet:items-baseline">
          <div className="desktop:w-[80px] desktop:h-[80px] tablet:w-[64px] tablet:h-[64px] w-[48px] h-[48px] rounded-full bg-primary flex justify-center items-center">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                color="var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))"
                style={{
                  userSelect: "none",
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                  fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
                  flexShrink: 0,
                }}
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
          </div>

          <p>in a click</p>
        </div>

        <div className="desktop:ml-24 tablet:ml-20 mobile:ml-16 flex flex-col gap-6">
          <p className="desktop:text-p-xl tablet:text-p-xl text-p-lg text-start text-textSecondary">
            Kickstart your GenAI Journey and wow your clients with our
            beautifully crafted platform suites
          </p>
          <div className="flex gap-4">
            <button className="text-textOnPrimary text-p-lg bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-8 py-[14px] my-3">
              Get started
            </button>
            {/* <button
              // className="px-8 py-[14px] bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent rounded-full text-p-lg text-textPrimary font-semibold"
              className="text-textPrimary  text-p-lg bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent font-semibold rounded-full  px-8 py-[14px] my-3"
            >
              Learn more
            </button> */}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/2kqfi4XaBdfttMawA4GKRlvaEWM.webp)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="relative desktop:w-full tablet:max-w-[825px] mobile:max-w-[480px] small-mobile:max-w-[480px] mx-auto desktop:min-h-[675px] tablet:min-h-[500px] min-h-[300px]"
      >
        <div className="desktop:w-[75%] tablet:w-[80%] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-58%]">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dhj4gimub/video/upload/v1722966637/Screen_Recording_2024-08-03_at_12.18.41_AM_dlt0ls.mov"
            loop
            playsInline
            autoPlay
            muted
            preload="auto"
            className="cursor-auto w-full h-full rounded-none block object-contain bg-transparent object-center"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center desktop:gap-12 tablet:gap-12 gap-4 desktop:mt-20 tablet:mt-20 mt-6">
        <p className="text-p-lg font-semibold text-textPrimary mobile:text-center">
          Trusted by startups and established companies alike
        </p>
        <div className="w-full">
          {/* <ul className="w-full flex justify-between items-center">
            {trustedStartups.map((logo) => {
              return (
                <li>
                  <img className="w-[118px]" alt="" src={logo} />
                </li>
              );
            })}
          </ul> */}
          <TrustedPartners from="productsPage" />
        </div>
      </div>

      <div className="w-full flex desktop:flex-row flex-col gap-8 mx-auto justify-between items-center desktop:mt-52 tablet:mt-52 mt-24 pl-2">
        <div className="desktop:w-[50%] desktop:text-display-3 tablet:text-display-3 text-md font-medium desktop:text-start text-center ">
          <div className="text-textPrimary ">
            <span>The world of AI at your fingertips </span>
            <span className="text-textTertiary">with</span>
            <span className="text-textTertiary"> Arhasi</span>
          </div>
        </div>
        <div onClick={() => handleNavigation("/services")}>
          <ButtonComp buttonName="Learn More" />
        </div>
      </div>

      <div className="mb-24 mt-16 desktop:w-[1120px] h-auto overflow-hidden rounded-2xl border border-slate-700 flex flex-col justify-center items-center bg-[#0E1517] bg-opacity-[50%] desktop:py-20">
        <div className="desktop:w-[1074px]">
          <img
            className="w-full h-full"
            alt=""
            src="https://framerusercontent.com/images/3gSfgzwfRWoAzveRyKWeVQsXng.png"
          />
        </div>
        <div className="text-textPrimary desktop:text-sm tablet:text-sm text-xs font-medium desktop:mt-12 desktop:p-0 p-6 desktop:w-[40%] text-center">
          <span>Make your idea real. </span>
          <span className="text-textTertiary">
            {" "}
            Launch your AI Agents with the click of a button.
          </span>
        </div>
      </div>

      <div className="my-24">
        <ul className="flex justify-between flex-wrap gap-[60px]">
          {featuresInfo.map((feature) => {
            return (
              <li className="desktop:w-[21%] tablet:w-[45%] w-full flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-[16px] flex items-center">
                    {feature.icon}
                  </div>
                  <p className="text-p-md text-textPrimary">{feature.title}</p>
                </div>
                <p className="text-p-md text-textTertiary">{feature.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-24 desktop:my-52 tablet:my-52 my-32">
        <div className="tablet:max-w-[500px] mx-auto flex desktop:flex-row flex-col justify-center items-center desktop:gap-24 tablet:gap-24 gap-12">
          <div>
            <div className="desktop:w-[500px] h-auto rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-fit"
                alt=""
                src="https://framerusercontent.com/images/GmRfHQjrH5KK22uiY7wcDw3ohDI.png"
              />
            </div>
          </div>

          <div className="desktop:w-[32%] flex justify-center flex-col gap-4">
            <h1 className="desktop:text-display-2 tablet:text-display-2 text-md text-textPrimary font-bold desktop:leading-[1.2em] tablet:leading-[1.2em]">
              Savant Enterprise™
            </h1>
            <p className="text-textSecondary font-medium desktop:text-sm tablet:text-sm text-p-lg">
              Bring your own Bot, Bring your own Data, and Improve your
              Productivity with AI
            </p>

            <div className="flex gap-4 justify-center">
              <button className="text-[#FFFFFF]  text-p-sm bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent font-bold rounded-lg px-4 py-2 my-3">
                Get started
              </button>
              {/* <button className="text-[#333333] hover:text-[#FFFFFF] text-p-sm bg-[#EBEBEB] hover:bg-onBackground border border-[#EBEBEB] hover:border hover:border-surfaceAccent font-bold rounded-lg px-4 py-2 my-3">
                Learn more
              </button> */}
            </div>
          </div>
        </div>

        <div className="tablet:max-w-[500px] mx-auto flex desktop:flex-row-reverse flex-col justify-center items-center desktop:gap-24 tablet:gap-24 gap-12">
          <div>
            <div className="desktop:w-[500px] h-auto rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-fit"
                alt=""
                src="https://framerusercontent.com/images/kfkAWVkPpEvT1UFObTXUjAQfug.png"
              />
            </div>
          </div>

          <div className="desktop:w-[32%] flex justify-center flex-col gap-4">
            <h1 className="desktop:text-display-2 tablet:text-display-2 text-md text-textPrimary font-bold desktop:leading-[1.2em] tablet:leading-[1.2em]">
              Confidentiality Concierge™
            </h1>
            <p className="text-textSecondary font-medium desktop:text-sm tablet:text-sm text-p-lg">
              Headquarters for Security, Governance, Compliance, Observability
              and Red Teaming
            </p>
            {/* Needed Later on */}

            {/* <div className="flex gap-4 ">
              <button className="text-[#FFFFFF]  text-p-sm bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent font-bold rounded-lg px-4 py-2 my-3">
                Get started
              </button>
              <button className="text-[#333333] hover:text-[#FFFFFF] text-p-sm bg-[#EBEBEB] hover:bg-onBackground border border-[#EBEBEB] hover:border hover:border-surfaceAccent font-bold rounded-lg px-4 py-2 my-3">
                Learn more
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="tablet:max-w-[500px] mx-auto mb-24 mt-16 desktop:w-[1120px] h-auto rounded-2xl flex desktop:flex-row flex-col desktop:gap-24 justify-start items-center bg-primary desktop:py-10 relative">
        <div className="desktop:px-16 tablet:px-12 tablet:py-10 px-8 py-6 desktop:w-[50%] flex justify-center items-start flex-col gap-4">
          <h1 className="desktop:text-display-3 tablet:text-display-3 text-md text-textPrimary font-bold desktop:leading-[1.2em] text-center">
            Launch all your AI solutions in seconds
          </h1>
          <p className="text-textOnPrimary text-opacity-50 font-medium desktop:text-sm tablet:text-sm text-xs text-center">
            Easily make the necessary customizations, then launch an AI-platform
            to bring your solutions to the next level
          </p>

          <button className="w-fit text-[#FFFFFF]  text-p-md bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent font-bold rounded-full px-6 py-[10px] my-3 mx-auto">
            Get started
          </button>

          <div className="flex justify-center items-center desktop:gap-6 tablet:gap-6 gap-3">
            {["Instantly Secure", "Plug and Play", "Top Value"].map((each) => {
              return (
                <div className="flex desktop:gap2 tablet:gap-2 gap-1 justify-center desktop:items-center tablet:items-center items-baseline">
                  <div className="w-[8px] h-[8px] rounded-full bg-white " />
                  <p className="text-p-xs text-textOnPrimary">{each}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="desktop:absolute bottom-[0px] right-[-90px] desktop:w-[770px] w-full tablet:h-[410px] mobile:h-[280px] small-mobile:h-[290px] overflow-hidden mx-auto">
          <img
            className="mobile:w-[345px] small-mobile:w-[345px] w-full mx-auto h-full object-cover tablet:object-top mobile:object-top small-mobile:object-top"
            alt=""
            src="https://framerusercontent.com/images/aXA3usDpKaxKicmqJ8N0QFULyY.png"
          />
        </div>
      </div>

      <div className="desktop:w-[57%] tablet:max-w-[500px] mx-auto flex flex-col gap-4 justify-center items-center desktop:mt-44 tablet:mt-44 mt-28 desktop:mb-20 tablet:mb-20 mb-8">
        <h1 className="desktop:text-2xl tablet:text-2xl text-[40px] text-textPrimary font-medium text-center">
          Powerful features
        </h1>
        <p className="text-textTertiary desktop:text-p-xl tablet:text-p-xl text-[20px] text-center">
          Arhasi has all the features you might need to build and launch
          high-performing AI solutions & platforms
        </p>
      </div>

      <div className="flex desktop:flex-row tablet:flex-row flex-col desktop:gap-20 tablet:gap-8 gap-4 justify-between desktop:items-center tablet:items-center items-start mb-12">
        {[
          "Customizable RAG Agents for any use case",
          "Intelligence on the front & backend",
          "An entire AI control center at your fingertips",
        ].map((each) => {
          return (
            <div className="text-textSecondary desktop:text-sm tablet:text-sm text-xs flex flex-col jusrify-between gap-4">
              <div className="flex gap-3 items-baseline">
                <div className="w-[8px] h-[8px] rounded-full bg-white mobile:block hidden" />
                <p>{each}</p>
              </div>
              <div className="w-full h-1 bg-accent rounded desktop:block hidden" />
            </div>
          );
        })}
      </div>

      <div className="desktop:h-[500px] tablet:h-[500px] w-auto overflow-hidden mb-12 desktop:rounded-xl tablet:rounded-xl">
        <img
          className="w-full h-full object-cover object-center"
          alt=""
          src={carouselImages[carouselImage]}
        />
      </div>

      <div className="mb-24 desktop:mt-44 tablet:mt-44 mt-36 desktop:w-[1120px] h-auto overflow-hidden rounded-2xl border border-slate-700 flex flex-col desktop:gap-6 tablet:gap-6 gap-3 justify-center items-center bg-[#0E1517] bg-opacity-[50%] desktop:py-12 tablet:py-6 pt-3 pb-4">
        <div className="w-[48px] h-[48px] ml-auto desktop:mr-20 tablet:mr-20 mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
            color="#FF6666" // Use your secondary color variable
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "#FFA6D2", // Use your secondary color variable
              flexShrink: 0,
            }}
          >
            <path d="M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z" />
          </svg>
        </div>
        <div className="desktop:w-[240px] desktop:h-[240px] tablet:w-[240px] tablet:h-[240px] w-[160px] h-[160px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="https://framerusercontent.com/images/LQN81k6HgMJlQprffVrbZ8snOE.jpg"
          />
        </div>
        <div className="text-textPrimary desktop:text-md tablet:text-md text-sm font-medium desktop:w-[70%] tablet:w-[70%] w-[85%] text-center">
          Coupling Arhasi’s AI frameworks and tools is the accelerator pedal for
          rapid AI adoption.{" "}
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-p-md font-semibold text-textPrimary">
            Wendy Varnell
          </p>
          <p className="text-p-md text-textTertiary">Chief Strategy Officer</p>
        </div>
        <div className="w-[118px]">
          <img
            className="w-full h-full"
            alt=""
            src="https://framerusercontent.com/images/hQR8FfhSIlkH1EmP18eNWCBaJkU.png?scale-down-to=1024"
          />
        </div>
      </div>

      {/* <div className="relative w-full h-[520px] mx-auto">
        <div
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/LhvPn3nqjWjzU3nEqqDoEaxkFh0.webp)",
            backgroundSize: "cover",
          }}
          className="object-cover mt-24 mb-6 w-full h-full overflow-hidden rounded-2xl border border-white border-opacity-60 flex flex-col justify-center gap-8"
        >
          <div
            className="w-full h-full absolute inset-0 opacity-75 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, black, rgba(0, 0, 0, 0.5))",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center mx-auto px-48">
            <p className="text-p-subheading text-textAccent text-center font-semibold tracking-wider mb-6">
              20+ DIFFERENT PAGES
            </p>
            <h1 className="w-[120%] text-2xl text-center text-textPrimary font-medium">
              The best template for SaaS and Startups
            </h1>
            <div className="w-[110%] my-4">
              <p className="text-p-xl text-center text-textSecondary mx-12">
                We have been working hard to bring you a complete solution. For
                startups that want to get to market faster without sacrificing
                beauty and personality, here's Infinite.
              </p>
            </div>

            <div className="w-full mx-auto text-center">
              <button className="text-textOnPrimary text-p-lg bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-8 py-[14px] my-3">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-1/2 pl-6 bg-onBackground rounded-xl flex justify-between items-center border border-surfaceAccent mt-6 mb-44">
        <div className="w-[40%] flex flex-col gap-2">
          <h1 className="text-sm font-medium text-textPrimary">Pricing</h1>
          <p className="text-p-md text-textTertiary">
            Simple, fair pricing to help you build and launch better sites.
          </p>
        </div>
        <div className="w-[60%] h-full">
          <img
            className="w-full h-auto object-fit"
            alt=""
            src="https://framerusercontent.com/images/QqeCSuKp0fvzwY4TheR4Be6Pyg.webp"
          />
        </div>
      </div> */}

      <div className="">
        <Footer />
        <br className="py-4" />
      </div>
    </div>
  );
};

export default ProductsPage;
