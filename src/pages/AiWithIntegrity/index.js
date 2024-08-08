import { useState, useEffect } from "react";
import TestimonalRotator from "../../components/TestimonialRotator";
import Footer from "../../components/Footer";

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

  // const [videoKey, setVideoKey] = useState(Date.now()); // Initial key based on timestamp

  // useEffect(() => {
  //   // Update key to force remount on refresh or other events
  //   setVideoKey(Date.now());
  // }, []); // Empty dependency array ensures it runs on component mount

  return (
    <div className="relative top-[62px] w-full h-full px-[112px] ">
      <div className="relative mx-auto px-auto mt-20">
        <h1 className="text-[120px] text-textPrimary font-medium font-sans leading-[124px] text-center tracking-[-0.045em] px-12">
          AI with Integrity online and offline
        </h1>

        <div className="relative mt-[-55px] px-[84px]">
          <img
            alt=""
            src="https://framerusercontent.com/images/4h0dMzaaEGlJaHplhrDtkUoc1E.webp"
          />
          <h1 className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-130%] text-[90px] text-textPrimary font-medium font-sans leading-[124px] text-center tracking-[-0.045em]">
            <div className="w-[600px] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-lg overflow-hidden">
              <video
                src="https://res.cloudinary.com/dhj4gimub/video/upload/v1722966691/What_is_Arhasi___AI_with_Integrity_Learn_how_to_operationalize_GenAI_fast_and_meet_regulations._qh4xdf.mp4"
                // src="./What_is_Arhasi_&_AI_with_Integrity_Learn_how_to_operationalize_GenAI_fast_and_meet_regulations.mp4"
                // key={videoKey} // Unique key to force reloadloop
                playsInline
                autoPlay
                // muted
                preload="auto"
                className="cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center"
              />
            </div>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent from-45% flex justify-center items-center pt-24">
          <p className="text-p-xl text-accent">
            ARHASI IS YOUR AI INTEGRITY & RISK MANAGEMENT TEAM
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-[20px] mb-52">
        <div className="flex gap-[20px] h-[350px]">
          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary pl-8 pr-16 pt-[28px] pb-4 leading-[24px]">
              AI Integrity Assurance with Model Evaluation Testing
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/DxkgHWaibaSdj0R0LQYDVswP3w.png?scale-down-to=512"
              />
            </div>
          </div>

          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary pl-8 pr-20 pt-[28px] pb-4 leading-[24px]">
              AI Maturity Assessment and AI Risk Mitigation
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/GYbFniO2U078eY9M02XE2K3dWw.svg"
              />
            </div>
          </div>

          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary pl-8 pr-20 pt-[28px] pb-4 leading-[24px]">
              Strategic Roadmap for Privacy & Integrity
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/flxVbzuOP1KvtuA2eMMuHoi3Joc.jpg"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[505px] flex gap-[20px]">
          <div
            className="relative flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "url(https://framerusercontent.com/images/4RfAdSr0usa6YjXdds31JHQ0e8E.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute w-full h-full bg-gradient-to-t from-transparent to-background">
              <div className="w-full">
                <h1 className="w-[60%] text-left text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
                  Security Checks with Benchmarks and AI Best Practices
                </h1>
              </div>
            </div>
          </div>

          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <div className="w-full">
              <h1 className="w-[60%] text-left text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
                RAPID Framework and Governance Metrics & Milestones
              </h1>
            </div>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/Kq2S2G1XvWr8YTMtf8ch9u09GjY.jpg"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[20px] h-[350px]">
          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Prototyping Compliant Solutions
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/flxVbzuOP1KvtuA2eMMuHoi3Joc.jpg"
              />
            </div>
          </div>

          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Regulated Outcomes and Expectations
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/GYbFniO2U078eY9M02XE2K3dWw.svg"
              />
            </div>
          </div>

          <div className="flex-1 h-full bg-onBackground rounded-2xl flex flex-col gap-3 justify-between items-center border border-surfaceAccent overflow-hidden">
            <h1 className="text-p-lg font-medium text-textPrimary px-8 pt-[28px] pb-4 leading-[24px]">
              Post-Delivery AI Monitoring & Appraisals
            </h1>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/xrPQKbM5NKX9SpUbER35DWIl5jY.png?scale-down-to=512"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[808px] flex items-center my-48">
        <div
          // style={containerStyle}
          className="relative w-[143%] h-full py-6 pr-16"
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded bg-gradient-to-r from-slate-50 to-transparent from-90% opacity-[0.03]"
            // style={gradientBackgroundStyle}
          ></div>
          <img
            // style={imageStyle}
            className="w-full h-full object-cover relative z-1 rounded-2xl"
            alt=""
            src="https://framerusercontent.com/images/Bv3p6wYlR1qoHjGiLBjzNtIxyLQ.webp"
          />
        </div>
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col justify-between">
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

      <div className="w-full h-[950px] flex items-center my-48">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col justify-between">
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
          className="relative w-[143%] h-full py-6 pl-16 flex items-center"
        >
          <div style={gradientBackgroundStyle}></div>
          <img
            // style={imageStyle}
            className="w-full h-[760px] object-cover relative z-1 rounded-2xl"
            alt=""
            src="https://framerusercontent.com/images/1UbT0lZWGz3am3fwCnyNJcCfA.webp"
          />
        </div>
      </div>

      <div className="mb-44 w-full">
        <p className="w-[40%] text-md text-textPrimary font-medium mb-16">
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
