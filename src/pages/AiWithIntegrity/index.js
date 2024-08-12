import { useState, useEffect, useRef } from "react";
import TestimonalRotator from "../../components/TestimonialRotator";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const data1 = [
    {
      title: "AI Integrity Assurance with Model Evaluation Testing",
      desc: "We work with you to understand your organizational & industry requirements to build a sustainable, scalable solution. Model evaluation testing uncovers the optimal model and build specifications for you & the solution",
    },

    {
      title: "AI Maturity Assessment and AI Risk Mitigation",
      desc: "We determine  maturity and adoption readiness via stakeholder interviews and develop AI risk mitigation controls & measures to ensure there are no business disruptions for AI implementation",
    },

    {
      title: "Strategic Roadmap for Privacy & Integrity",
      desc: "We provide a roadmap to fortify AI solutions in both architecture and execution. With consideration to business imperatives, we work with you to uncover the best path forward for AI solutions with secure and governed AI solutions.",
    },

    {
      title: "Security Checks with Benchmarks and AI Best Practices",
      desc: (
        <div>
          Provided our
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
          framework, your AI solution & system will be supplied with a
          repertoire of benchmarks for performance and compliance, as well as
          security checks to ensure everything in your AI ecosystem is safe and
          sound.
        </div>
      ),
    },
  ];

  const data2 = [
    {
      title: "R.A.P.I.D. Framework and Governance Metrics & Milestones",
      desc: "Leverage our tried-and-true framework to accelerate your AI journey with a methodology proven towards secure and performant AI deployments. We ensure your ongoing regulatory compliance with industry-specific requirements & metrics at the ready.",
    },

    {
      title: "Prototyping Compliant Solutions",
      desc: "We work with you to prototype solutions that not only demonstrate the art of the possible (all the way to full production-ready launch) but also abide by AI and industry standards from inception. All Arhasi components are inherently compliant, and our team of consultants and engineers are well-versed in best development, design, and delivery practices.",
    },

    {
      title: "Regulated Outcomes and Expectations",
      desc: "Before embarking on your AI journey, we dedicate ourselves to understanding the intended solution and commit our due diligence towards assuring the best path forward is one that adheres to defined governance protocols and security guidelines.",
    },

    {
      title: "Post-Delivery AI Monitoring and Appraisals",
      desc: "We are pleased to provide you with hypercare and ongoing support as your sidekick in deploying AI solutions with Integrity. We assess that your AI solutions and / or systems continue to operate seamlessly and provide you with the tools and frameworks to continue to appraise its performance and health over time.",
    },
  ];

  const gradientBackgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#263A3F", // Fallback color
    backgroundImage:
      "radial-gradient(circle at right, #000000 0%, #000D0F 50%, transparent 90%)",
    filter: "blur(48px)",
    opacity: 0.5,
    zIndex: 0,
  };
  const [hasInteracted, setHasInteracted] = useState(false);
  const [paused, setPaused] = useState(true);
  console.log(paused);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current.paused) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  }, [paused]);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        console.log("interacted");
        videoRef.current.play().catch((error) => {
          console.error("Error trying to play the video:", error);
        });
        setHasInteracted(true);
        setPaused(false);
      }
    };

    // Add event listeners for user interactions
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [hasInteracted]);

  // const [videoKey, setVideoKey] = useState(Date.now()); // Initial key based on timestamp

  // useEffect(() => {
  //   // Update key to force remount on refresh or other events
  //   setVideoKey(Date.now());
  // }, []); // Empty dependency array ensures it runs on component mount

  const handleVideoClick = () => {
    console.log("handle");
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setPaused(true);
    } else {
      videoRef.current.play();
      setPaused(false);
    }
  };

  return (
    <div className="relative top-[62px] w-full h-full desktop:px-[112px] tablet:px-[48px] px-[24px]">
      <div className="relative mx-auto px-auto mt-20">
        <h1 className="desktop:text-[120px] tablet:text-[96px] mobile:text-[64px] small-mobile:text-[64px] text-textPrimary font-medium font-sans desktop:leading-[124px] tablet:leading-[110px] leading-[68px] text-center tracking-[-0.045em] px-12">
          AI with Integrity online and offline
        </h1>

        <div className="w-full h-full relative desktop:mt-[-55px] tablet:mt-[-55px] mt-[-30px] desktop:px-[84px] mobile:overflow-hidden">
          <div className="mobile:w-[130%] mobile:translate-x-[-11%] h-full mobile:overflow-hidden">
            <img
              className="w-full h-full mobile:object-cover "
              alt=""
              src="https://framerusercontent.com/images/4h0dMzaaEGlJaHplhrDtkUoc1E.webp"
            />
          </div>
          <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-130%] text-[90px] text-textPrimary font-medium font-sans leading-[124px] text-center tracking-[-0.045em]">
            <div
              className="desktop:w-[55%] tablet:w-[68%] mobile:w-[88%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-lg overflow-hidden cursor-pointer"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/dhj4gimub/video/upload/v1722966691/What_is_Arhasi___AI_with_Integrity_Learn_how_to_operationalize_GenAI_fast_and_meet_regulations._qh4xdf.mp4"
                // src="./What_is_Arhasi_&_AI_with_Integrity_Learn_how_to_operationalize_GenAI_fast_and_meet_regulations.mp4"
                // key={videoKey} // Unique key to force reloadloop
                playsInline
                autoPlay
                // muted
                preload="auto"
                className="cursor-pointer w-full h-full rounded-none block object-cover bg-transparent object-center"
              />
              {/* <button
                // onClick={(e) => {
                //   e.stopPropagation();
                //   setPaused(!paused);
                // }}
                className="absolute bottom-4 right-4 p-2 bg-white rounded-lg"
              >
                {paused ? "Play" : "Pause"}
              </button> */}
            </div>

            {!hasInteracted && (
              <div
                className={`desktop:w-[55%] tablet:w-[68%] mobile:w-[88%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-lg overflow-hidden cursor-pointer`}
              >
                <img alt="" src="./videoframe_5693.png" />
              </div>
            )}

            <div
              className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-120%] mobile:translate-y-[-100%] small-mobile:translate-y-[-100%]"
              onClick={handleVideoClick}
            >
              {!paused && (
                <FontAwesomeIcon
                  icon={faPause}
                  className="text-onBackground text-sm cursor-pointer"
                />
              )}
              {paused && (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-onBackground text-sm cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="absolute desktop:bottom-0 tablet:bottom-0 bottom-[-70px] left-0 w-full h-48 bg-gradient-to-t from-background to-transparent from-45% flex justify-center items-center pt-24 text-center">
          <p className="text-p-xl text-accent">
            ARHASI IS YOUR AI INTEGRITY & RISK MANAGEMENT TEAM
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-[20px] desktop:mb-52 tablet:mb-44 mb-24 mobile:mt-24">
        <div className="flex flex-wrap gap-[20px] mobile:mx-auto mobile:max-w-[380px]">
          <div className="desktop:h-[350px] tablet:h-[350px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full tablet:min-w-[45%] tablet:flex-1 bg-onBackground rounded-2xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary desktop:pl-8 tablet:pl-8 desktop:pr-16 tablet:pr-16 px-8 pt-[28px] pb-4 leading-[24px]">
              AI Integrity Assurance with Model Evaluation Testing
            </h1>

            <div className="w-full h-full overflow-hidden">
              <img
                className="w-[90%] h-full mx-auto object-cover object-bottom tablet:object-contain"
                alt=""
                // src="https://framerusercontent.com/images/DxkgHWaibaSdj0R0LQYDVswP3w.png?scale-down-to=512"
                src="./Group_1000004309.png"
              />
            </div>
          </div>

          <div className="desktop:h-[350px] tablet:h-[350px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full tablet:flex-1 bg-onBackground rounded-2xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary desktop:pl-8 tablet:pl-8 desktop:pr-16 tablet:pr-16 px-8 pt-[28px] pb-4 leading-[24px]">
              AI Maturity Assessment and AI Risk Mitigation
            </h1>

            <div className="w-full tablet:w-[75%] h-full">
              <img
                className="w-full h-full object-cover p-2 tablet:object-contain"
                alt=""
                // src="https://framerusercontent.com/images/GYbFniO2U078eY9M02XE2K3dWw.svg"
                src="./Frame_1000004494.png"
              />
            </div>
          </div>

          <div className="desktop:h-[350px] tablet:h-[405px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full bg-onBackground rounded-2xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary desktop:pl-8 tablet:pl-8 desktop:pr-16 tablet:pr-16 px-8 pt-[28px] pb-4 leading-[24px]">
              Strategic Roadmap for Privacy & Integrity
            </h1>

            <div className="w-[100%] tablet:w-[70%] h-full">
              <img
                className="w-full h-full object-contain px-2 py-10"
                alt=""
                // src="https://framerusercontent.com/images/flxVbzuOP1KvtuA2eMMuHoi3Joc.jpg"
                src="./Frame_1000004493.png"
              />
            </div>
          </div>

          <div
            className="relative desktop:h-[505px] tablet:h-[350px] mobile:w-[100%] mobile:min-h-[467px] small-mobile:min-h-[300px] mobile:max-h-[530px] desktop:min-w-[45%] tablet:min-w-[45%] desktop:flex-1 tablet:flex-1 bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto"
            style={{
              backgroundImage:
                "url(https://framerusercontent.com/images/4RfAdSr0usa6YjXdds31JHQ0e8E.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent to-background">
              <div className="w-full h-full">
                <h1 className="desktop:w-[60%] tablet:w-[60%] text-left text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
                  Security Checks with Benchmarks and AI Best Practices
                </h1>
              </div>
            </div>
          </div>

          <div className="desktop:h-[505px] tablet:h-[350px] desktop:min-w-[45%] tablet:min-w-[45%] desktop:flex-1 tablet:flex-1 bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <div className="w-full">
              <h1 className="desktop:w-[60%] tablet:w-[60%] text-left text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
                RAPID Framework and Governance Metrics & Milestones
              </h1>
            </div>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-contain object-bottom"
                alt=""
                // src="https://framerusercontent.com/images/Kq2S2G1XvWr8YTMtf8ch9u09GjY.jpg"
                src="./Framework_arhasi.png"
              />
            </div>
          </div>
          <div className="desktop:h-[350px] tablet:h-[405px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full  bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Prototyping Compliant Solutions
            </h1>

            <div className="desktop:w-[60%] tablet:w-[30%] w-[70%] h-full">
              <img
                className="w-full h-full object-contain"
                alt=""
                // src="https://framerusercontent.com/images/flxVbzuOP1KvtuA2eMMuHoi3Joc.jpg"
                src="./prototype_image-removebg-preview.png"
              />
            </div>
          </div>

          <div className="desktop:h-[350px] tablet:h-[350px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full tablet:min-w-[45%] tablet:flex-1 bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Regulated Outcomes and Expectations
            </h1>

            <div className="w-full h-full overflow-hidden">
              <img
                className="w-[85%] h-full mx-auto object-cover object-bottom tablet:object-contain"
                alt=""
                // src="https://framerusercontent.com/images/GYbFniO2U078eY9M02XE2K3dWw.svg"
                src="./Group_1000004310.png"
              />
            </div>
          </div>

          <div className="desktop:h-[350px] tablet:h-[350px] desktop:min-w-[30%] desktop:flex-1 tablet:w-full tablet:min-w-[45%] tablet:flex-1 bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden mobile:mx-auto">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Post-Delivery AI Monitoring & Appraisals
            </h1>

            <div className="w-full h-full overflow-hidden">
              <img
                className="w-[85%] h-full mx-auto object-cover object-bottom tablet:object-contain"
                alt=""
                // src="https://framerusercontent.com/images/xrPQKbM5NKX9SpUbER35DWIl5jY.png?scale-down-to=512"
                src="./Group_1000004310_0001.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full tablet:max-w-[500px] tablet:mx-auto desktop:h-[808px] flex desktop:flex-row flex-col-reverse desktop:gap-12 tablet:gap-6 gap-8 items-center desktop:my-48 my-36">
        <div
          // style={containerStyle}
          className="relative desktop:w-[143%] h-full desktop:pr-16 tablet:pt-10"
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded desktop:bg-gradient-to-r bg-gradient-to-t from-slate-50 to-transparent from-90% opacity-[0.03] desktop:rounded-bl-2xl desktop:rounded-tl-2xl rounded-br-2xl"
            // style={gradientBackgroundStyle}
          ></div>
          <img
            // style={imageStyle}
            className="w-full h-full object-cover relative z-1 desktop:rounded-2xl tablet:rounded-2xl"
            alt=""
            src="https://framerusercontent.com/images/Bv3p6wYlR1qoHjGiLBjzNtIxyLQ.webp"
          />
        </div>
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col gap-6 justify-between">
            {data1.map((eachData) => {
              return (
                <div>
                  <h1 className="text-xs font-medium text-textAccentHover">
                    {eachData.title}
                  </h1>
                  <div className="text-p-lg text-textSecondary leading-[24px]">
                    {eachData.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full tablet:max-w-[500px] tablet:mx-auto desktop:h-[950px] flex desktop:flex-row flex-col tablet:gap-8 gap-8 items-center desktop:my-48 my-32">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col gap-6 justify-between">
            {data2.map((eachData) => {
              return (
                <div>
                  <h1 className="text-xs font-medium text-textAccentHover">
                    {eachData.title}
                  </h1>
                  <p className="text-p-lg text-textSecondary leading-[24px]">
                    {eachData.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          // style={containerStyle}
          className="relative desktop:w-[143%] h-full py-6 desktop:pl-16 flex items-center"
        >
          <div style={gradientBackgroundStyle}></div>
          <img
            // style={imageStyle}
            className="w-full desktop:h-[760px] tablet:h-[760px] h-[500px] object-cover relative z-1 desktop:rounded-2xl tablet:rounded-2xl"
            alt=""
            src="./arhasi_image.png"
          />
        </div>
      </div>

      <div className="mb-44 w-full  ">
        <p className="desktop:w-[40%] tablet:max-w-[500px] text-md tablet:mx-auto text-textPrimary font-medium mb-16 text-left tablet:text-center mobile:text-center small-mobile:text-center">
          Why people are switching from competitors to us.
        </p>
        <TestimonalRotator />
      </div>

      <div className="">
        <Footer />
        <br className="py-4" />
      </div>
    </div>
  );
};

export default Services;
