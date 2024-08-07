import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const AboutUs = () => {
  const dummyFeaturedMediaInfo = [
    {
      title: "WALL STREET JOURNAL",
      desc: "If you want to get to market 10x faster, here's a solution for you",
      thumbnail:
        "https://framerusercontent.com/images/2UL4WYkruZqRdBMkG7F9nqfYDQ.webp",
      author: "Marie Wonder",
      authorImg:
        "https://framerusercontent.com/images/Cti8bsI1KnshibiFunoGDgQwo.webp",
      publishedDate: "Jan 24, 1970",
    },

    {
      title: "NEW YORK TIMES",
      desc: "This young startup is redefining the way businesses get to market",
      thumbnail:
        "https://framerusercontent.com/images/6bKKtRMVf9NDOiRZHGs418fTEoc.webp",
      author: "Marie Wonder",
      authorImg:
        "https://framerusercontent.com/images/Cti8bsI1KnshibiFunoGDgQwo.webp",
      publishedDate: "Jan 1, 1970",
    },

    {
      title: "THE WASHINGTON POST",
      desc: "It might seem an empty promise, but this startup has been delivering",
      thumbnail:
        "https://framerusercontent.com/images/f18Hue312zET01olz2FJBonrfII.webp",
      author: "Marie Wonder",
      authorImg:
        "https://framerusercontent.com/images/Cti8bsI1KnshibiFunoGDgQwo.webp",
      publishedDate: "Jan 1, 1970",
    },
  ];

  const FeaturedMediaInfo = [
    {
      title: "AIM RESEARCH",
      desc: "AI Officers to Watch in the U.S. for 2024",
      url: "https://aimresearch.co/generative-ai/ai-officers-to-watch-in-the-u-s-for-2024",
      thumbnail:
        "https://framerusercontent.com/images/cZuS3P2iO9YHT8vFLLuAT8mhppw.jpg?scale-down-to=512",
      author: "Mansi Singh",
      authorImg:
        "https://framerusercontent.com/images/sKXb6TLtVIeqfZimGID7x8yKnI8.jpeg",
      publishedDate: "Jul 4, 2024",
    },

    {
      title: "DALLAS INNOVATES",
      desc: "Frisco-Based AI & Data Startup Arhasi Gets Strategic Investment",
      url: "https://dallasinnovates.com/frisco-based-ai-data-startup-arhasi-gets-strategic-investment-from-alpha-transform-holdings/",
      thumbnail:
        "https://framerusercontent.com/images/XrOjUQelcklRx6BrkW8PO3mr2Y.jpg",
      author: "Lance Murray",
      authorImg:
        "https://framerusercontent.com/images/QHN2wa2EeLHITTb4ANcDubBkCWw.jpg",
      publishedDate: "May 14, 2024",
    },

    {
      title: "YAHOO FINANCE",
      desc: "LifeWorks launches a HR AI agent to improve productivity",
      url: "https://finance.yahoo.com/news/lifeworks-launches-human-resources-ai-110000393.html",
      thumbnail:
        "https://framerusercontent.com/images/KbGIgJwAmL8UN4DhULhGkBUHo.png",
      author: "LifeWorks",
      authorImg:
        "https://framerusercontent.com/images/1SqnpNJFHuIHpF9HrWwIxLgbEE.png",
      publishedDate: "Jul 14, 2024",
    },
  ];

  const teamInfo = [
    {
      coWorkerImg: "./d5U7HwerMJoNgl1uLtq3JEtewE.png",
      name: "Chiru Bhavansikar",
      role: "Founder and CEO",
    },
    {
      coWorkerImg: "./image.png",
      name: "Enzo Villani",
      role: "Board Member",
    },
    {
      // coWorkerImg:
      //   "https://framerusercontent.com/images/g3wONdoqZscTqey8XAIT0pwypow.png",
      // coWorkerImg: "./g3wONdoqZscTqey8XAIT0pwypow1.png",
      coWorkerImg: "./g3wONdoqZscTqey8XAIT0pwypow_001.png",
      name: "Melody Roth",
      role: "Executive Director",
    },

    {
      coWorkerImg: "./Tom_Richer.avif",
      name: "Tom Richer",
      role: "Cloudbench Partner",
    },
    {
      coWorkerImg: "./Hari_Jayaraman.avif",
      name: "Hari Jayaraman",
      role: "MLOps Advisor",
    },
    {
      coWorkerImg: "./Yujun_Liang.avif",
      name: "Yujun Liang",
      role: "Google Toastmaster",
    },
  ];

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef?.current?.value);
    console.log(emailRef?.current?.value);
    console.log(messageRef?.current?.value);

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    // <div className="text-white relative top-[62px] w-full h-full px-[112px] ">
    <div className="text-white relative w-full h-full">
      <div
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/kw6kYsX7GjWjp7cvL8WqpKk4UY.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full top-0 h-[100vh] flex justify-center items-end"
      >
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-b from-transparent to-background to-99%"></div>
        <div className="absolute bottom-5 tracking-wider flex flex-col gap-4 justify-center items-center">
          <p className="text-p-subheading text-textAccent font-semibold">
            WHO WE ARE
          </p>

          <h1 className="text-2xl tablet:text-[64px] mobile:text-[40px] small-mobile:text-[40px] text-textPrimary font-medium">
            What Arhasi Means
          </h1>
        </div>
      </div>

      <div className=" relative w-full h-[200px] flex justify-center items-center">
        <img
          className="w-full h-full object-cover blur-[92px] opacity-50"
          alt=""
          src="https://framerusercontent.com/images/4o6XXSfCwvxcExxJ79vtQN63Rsw.jpg?scale-down-to=512"
        />
        <p className="text-textSecondary text-p-xl w-[50%] text-center absolute top-0 z-2">
          Our name, Arhasi, means “you deserve” as well as “pleased to give”.
          Our mission is exactly that–it is our pleasure to give our customers
          all they deserve, which is the best of our AI solutions.
        </p>
      </div>

      <div className="desktop:mx-[112px] tablet:mx-[48px] mx-[24px]">
        <div className="relative flex desktop:flex-row tablet:flex-row flex-col gap-6 mb-48">
          <div className="desktop:w-[50%] h-[830px]">
            <img
              className="w-full h-full object-cover"
              alt=""
              src="https://framerusercontent.com/images/BzFi5jUKnf2L6ZUlhEqfNqBRNtE.jpg"
            />
          </div>

          <div className="desktop:w-[50%] h-[830px]">
            <img
              className="w-full h-full object-cover"
              alt=""
              src="https://framerusercontent.com/images/bSMyvQgv6qHiUl8Jypgzb6wOvo.jpg"
            />
          </div>

          <div
            className="desktop:absolute w-[55%] bottom-0 right-0 bg-background text-textPrimary pt-4 pb-[85px] pl-6 
          "
          >
            <h1 className="text-display-3 text-textPrimary font-medium">
              At Arhasi,
            </h1>
            <span className="text-p-lg text-textSecondary">
              we're on a mission to expedite the adoption of AI Solutions
              without compromising on Security, Governance, and Compliance.
            </span>
            <span className="text-p-lg text-textPrimary">
              Our focus is simple: to deliver integrity, operational readiness,
              and faster time to value. We developed a revolutionary{" "}
              <span className="desktop:pr-2 tablet:pr-2 mobile:px-2 small-mobile:px-2">
                <img
                  alt=""
                  src="./Image_20240711_224454_109-removebg-preview.png"
                  className="w-auto h-[16px] inline mb-1"
                />{" "}
                <sup className="desktop:text-[8px] tablet:text-[8px] text-[6px]">
                  ™
                </sup>
              </span>{" "}
              platform (Ready AI Provisioning and Integrity Defense) that
              effortlessly constructs, evaluates, and manages enterprise AI
              Agents infused with robust security, governance, and compliance
              features.
            </span>
            <span className="text-p-lg text-textSecondary">
              This cutting-edge solution seamlessly supports GCP, Azure, and
              AWS, accommodating both proprietary and open-source GenAI models.
            </span>
          </div>
        </div>

        <div className="flex desktop:flex-row flex-col justify-between items-end mb-24">
          <div className="desktop:w-[45%] flex flex-col gap-4">
            <h1 className="text-display-3 text-textPrimary font-medium">
              Since 2023
            </h1>

            <p className="text-p-lg text-textSecondary">
              We began this journey in early 2023 when GenAI was synonymous with
              ChatGPT and was considered for non enterprise usage.
            </p>

            <p className="text-p-lg text-textSecondary">
              We realized earlier back then that there is a need for a{" "}
              <span className="text-textPrimary text-p-lg">
                platform that brings security controls, governance insights and
                instant regulatory compliance to expedite the enterprise
                adoption of GenAI.
              </span>
            </p>
          </div>

          <div className="desktop:w-[45%] flex flex-col gap-4">
            <p className="text-p-lg text-textSecondary">
              We had the vision for AI Playbooks, Compliance frameworks and
              technology modules to help GenAI models comply with AI regulations
              several months before the
              <span className="text-textPrimary text-p-lg">
                {" "}
                “US Whitehouse Executive Order on the Safe, Secure and
                Trustworthy AI” and “European AI Act”{" "}
              </span>
              were published.
            </p>

            <p className="text-p-lg text-textPrimary">
              In May of 2024, Alpha Transform Holdings announced a strategic
              investment in Arhasi along with our AI Foundry partner,
              Cloudbench.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <img
            alt=""
            src="https://framerusercontent.com/images/4RfAdSr0usa6YjXdds31JHQ0e8E.webp"
          />
        </div>

        <div className="relative w-full h-[150px] flex justify-center items-center mb-56">
          <img
            className="w-full h-full object-cover blur-[92px] opacity-75"
            alt=""
            src="https://framerusercontent.com/images/4o6XXSfCwvxcExxJ79vtQN63Rsw.jpg?scale-down-to=1024"
          />

          <div className="absolute bottom-[-90%] flex flex-col gap-4 justify-center items-center">
            <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
              {/* BACKED BY THE BEST  */}
              OUR MODUS OPERANDI
            </p>

            <h1 className="text-display-3 text-textPrimary font-medium">
              {/* Our investors */}
              AI with Integrity™
            </h1>

            <p className="text-textTertiary text-p-lg text-center">
              {/* Proudly supported by the best in business to change the game */}
              How we serve you in everything GenAI
            </p>
          </div>
        </div>

        <div className="text-p-xl text-textPrimary px-20 my-28">
          Arhasi has a premier marketplace and AI portal where enterprise
          clients can gain access to everything they need to accelerate GenAI
          adoption in their organizations. With standalone products, such as
          Savant Enterprise™, to domain-specific suites, such as security-minded
          Confidentiality Concierge™, clients have access to a one-stop-shop for
          AI agents and solutions. Arhasi also has industry packages and
          adoption bundles for early to mid and late stage AI mature
          organizations; with a solution to fit any need. Coupled with our
          professional services, clients can create customized, proprietary AI
          accelerators out of our solutions.
        </div>

        {/* <div className="w-full h-full flex justify-center items-center mb-28">
          <div
            className="bg-onBackground my-24 w-full rounded-2xl border border-surfaceAccent flex 
            justify-evenly py-16"
          >
            <div className="w-[25%] flex flex-col justify-center items-center gap-4">
              <h1 className="text-display-2 text-textPrimary fomt-medium">
                97%
              </h1>
              <p className="text-p-lg text-textTertiary text-center">
                incredible business achievement
              </p>
            </div>

            <div className="w-[25%] flex flex-col justify-center items-center gap-4">
              <h1 className="text-display-2 text-textPrimary fomt-medium">
                83+
              </h1>
              <p className="text-p-lg text-textTertiary text-center">
                incredible business achievement
              </p>
            </div>

            <div className="w-[25%] flex flex-col justify-center items-center gap-4">
              <h1 className="text-display-2 text-textPrimary fomt-medium">
                55K
              </h1>
              <p className="text-p-lg text-textTertiary text-center">
                incredible business achievement
              </p>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-4 justify-center items-center mb-28">
          <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
            FEATURED MEDIA
          </p>

          <h1 className="text-display-3 text-textPrimary font-medium">
            We're in the press
          </h1>

          <p className="text-textTertiary text-p-lg text-center">
            {/* The world's best publications speak about our young startup */}
            See how we're making waves
          </p>
        </div>

        <div className="w-full mb-40">
          <ul className="w-full flex desktop:flex-row flex-col justify-between gap-5">
            {FeaturedMediaInfo.map((eachInfo) => {
              return (
                <Link
                  to={eachInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <li className="flex flex-col gap-8 w-full">
                    <div className="w-full h-[242px] rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt=""
                        src={eachInfo.thumbnail}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
                        {eachInfo.title}
                      </p>

                      <p className="text-xs text-textPrimary font-medium">
                        {eachInfo.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-5">
                      <img
                        className="w-[32px] h-[32px] rounded-md"
                        alt=""
                        src={eachInfo.authorImg}
                      />
                      <div className="flex">
                        <span className="text-p-sm font-semibold text-textPrimary">
                          {eachInfo.author}
                        </span>
                        <p className="text-p-sm text-textTertiary pl-2">
                          --{eachInfo.publishedDate}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Needed Later on */}
        {/* <div className="flex flex-col gap-2 mb-52">
          <div className="flex gap-2">
            <div className="max-w-[50%] h-[556px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/16pqAaxxQBojbGtBofmKsyfZU4.webp"
              />
            </div>

            <div className="flex-1 flex gap-2 flex-wrap">
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/gZjT0Nj66uWiCbW2GIm5FbzoEm0.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/arfB7TkbY17rtUa89zRhfeq8Y.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/7M9MPPudLOLOjYWHYAS79Wm1U.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/blKMCzK0bkNoEwABu1CBpCAN414.webp"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-2">
            <div className="max-w-[50%] h-[556px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="https://framerusercontent.com/images/4RfAdSr0usa6YjXdds31JHQ0e8E.webp"
              />
            </div>

            <div className="flex-1 flex gap-2 flex-wrap">
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/q8aRWJKOEFVRoLNw8tXYjsdlkw.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/KUaBEfvdLOo2EMV6p3MVi2Bv91A.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/kwVNmvvdNWzs3rZVdOHvWMc3zUY.webp"
                />
              </div>
              <div className="max-w-[49%] h-max-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  src="https://framerusercontent.com/images/hVyKYRwSGVT2f8cuj2QSlyOyFo.webp"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* ---------------------------xxxxxxxxxxxxxxxxxxxxx----------------------------- */}

        <div className="w-[60%] mx-auto flex flex-col gap-4 justify-center items-center mb-24">
          <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
            OUR TEAM
          </p>

          <h1 className="text-display-3 text-textPrimary font-medium">
            Small but fearless
          </h1>

          <p className="text-textTertiary text-p-lg text-center">
            We are challinging the status quo every day with a small team of
            like minded and ambitious individuals who are ready to change the
            game.
          </p>
        </div>

        <div>
          <ul className="flex dektop:flex-row flex-col flex-wrap gap-5 justify-between mb-48">
            {teamInfo.map((eachInfo) => {
              return (
                <li className="desktop:w-[32%] p-10 rounded-xl border border-surfaceAccent bg-onBackground flex flex-col gap-6">
                  <img
                    className="max-h-[280px] w-fit mx-auto"
                    alt=""
                    src={eachInfo.coWorkerImg}
                  />

                  <div className="flex flex-col items-center gap-1">
                    <h1 className="text-sm text-textPrimary font-medium">
                      {eachInfo.name}
                    </h1>
                    <p className="text-p-md text-textSecondary">
                      {eachInfo.role}
                    </p>
                  </div>
                  {/* Needed Later on */}
                  {/* <button className="w-fit mx-auto py-[6px] px-4 bg-surfaceAccent hover:bg-onBackground border border-surfaceAccent hover:border hover:border-surfaceAccent rounded-full text-p-xs text-textPrimary font-semibold">
                    Get in touch
                  </button> */}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative w-full h-full mx-auto mb-44">
          <div
            style={{
              backgroundImage:
                "url(https://framerusercontent.com/images/LhvPn3nqjWjzU3nEqqDoEaxkFh0.webp)",
              backgroundSize: "cover",
            }}
            // style={{
            //   background: "onBackground",
            // }}
            className="object-cover mt-24 mb-6 w-[1120px] h-[773px] overflow-hidden rounded-2xl border border-white border-opacity-60 flex flex-col justify-center"
          >
            <div
              className="w-[1120px] h-full absolute inset-0 opacity-75 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to right, black, rgba(0, 0, 0, 0.5))",
              }}
            />
            <div className="absolute w-full mx-auto px-48">
              <p className="text-p-subheading text-textAccent text-center font-semibold tracking-wider mb-6">
                GET IN TOUCH
              </p>
              <h1 className="text-2xl text-center text-textPrimary font-medium">
                Team up with us
              </h1>
              <div className="my-4">
                <p className="text-p-xl text-center text-textSecondary mx-12">
                  For organizations that want to get to market faster with GenAI
                  without sacrificing security and compliance, here's Arhasi.
                </p>
              </div>
              <form
                onSubmit={handleFormSubmit}
                className="h-full flex flex-col gap-3"
              >
                <div className="flex gap-3 w-full">
                  <input
                    className="w-full p-4 rounded-lg text-black font-semibold bg-[#F2F2F2] outline-none"
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Name"
                    // value={nameRef?.current?.value}
                  />
                  <input
                    className="w-full p-4 rounded-lg text-black font-semibold bg-[#F2F2F2] outline-none"
                    ref={emailRef}
                    type="text"
                    name="email"
                    placeholder="Email"
                    // value={emailRef?.current?.value}
                  />
                </div>
                <textarea
                  className="p-4 rounded-lg text-black font-semibold bg-[#F2F2F2] outline-none"
                  ref={messageRef}
                  type="text"
                  name="name"
                  placeholder="Message"
                  // value={emailRef?.current?.value}
                  rows="5"
                />
                <button className="w-full p-4 rounded-lg text-white font-semibold bg-primary hover:bg-opacity-85">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Needed Later on */}
        {/* <div className="flex gap-6 ">
          <div className="w-1/2 pl-6 bg-onBackground rounded-xl flex justify-between items-center border border-surfaceAccent">
            <div className="w-[40%] flex flex-col gap-2">
              <h1 className="text-sm font-medium text-textPrimary">Features</h1>
              <p className="text-p-md text-textTertiary">
                Learn what makes our product different from competitors.
              </p>
            </div>
            <div className="w-[60%] h-full">
              <img
                className="w-full h-auto object-fit"
                alt=""
                src="https://framerusercontent.com/images/bILh91Xfdz9P9NSSWftl52Bk5Uk.webp"
              />
            </div>
          </div>

          <div className="w-1/2 pl-6 bg-onBackground rounded-xl flex justify-between items-center border border-surfaceAccent">
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
          </div>
        </div> */}

        <div className="">
          <Footer />
          <br className="py-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
