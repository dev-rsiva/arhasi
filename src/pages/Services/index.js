import Footer from "../../components/Footer";

const AiWithIntegrity = () => {
  const designInnovationInfo = [
    {
      title: "Design",
      desc: "A comprehensive design system is the first step to build websites",
      thumbnail:
        "https://framerusercontent.com/images/kThLJpLFqdbUPPek6yREJwyTM.webp",
      author: "Eliza Miller",
      authorImg:
        "https://framerusercontent.com/images/Cti8bsI1KnshibiFunoGDgQwo.webp",
      publishedDate: "Nov 16, 2023",
    },

    {
      title: "Innovation",
      desc: "Gaining traction and accelerating with a differentiated approach in the emerging AI market",
      thumbnail:
        "https://framerusercontent.com/images/chCwxdZpawjQ2DAMGZy8vsPtIg.jpg",
      author: "Melody Roth",
      authorImg:
        "https://framerusercontent.com/images/ysh7ROfcXrC3UK4Tli18StrFRPw.jpg",
      publishedDate: "May 21, 2024",
    },

    {
      title: "DESIGN",
      desc: "Master the secrets of rebranding to always connect with clients",
      thumbnail:
        "https://framerusercontent.com/images/TZP8vstfq5GKaS1edD30czLWig.jpg",
      author: "Eliza Miller",
      authorImg:
        "https://framerusercontent.com/images/Cti8bsI1KnshibiFunoGDgQwo.webp",
      publishedDate: "Nov 16, 2023",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="text-white desktop:relative w-full h-full desktop:overflow-hidden desktop:h-[120vh]">
        <div
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/5YPLdYPvhqXGy1Y4ynY6gsNIs.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex desktop:flex-row flex-col pt-36 w-full desktop:h-[113vh] h-full"
        >
          <div className="desktop:pl-[112px] w-[85%] flex flex-col gap-5 tablet:mx-auto mobile:mx-auto small-mobile:mx-auto  tablet:text-center mobile:text-center small-mobile:text-center">
            <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
              WE ARE PLEASED TO SERVE YOU
            </p>

            <h1 className="desktop:text-display-3 tablet:text-display-3 text-md text-textPrimary font-medium">
              {/* AI with Integrity™ both in products and delivery */}
              Trust in both the products and the delivery
            </h1>
            <p className="text-textTertiary desktop:text-p-xl tablet:text-p-xl text-p-lg">
              Start your AI journey supported by a team of the best in delivery
              and AI know-how
            </p>
            <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] my-3 w-fit text-center tablet:mx-auto mobile:mx-auto small-mobile:mx-auto">
              Get in touch
            </button>

            <div className="bg-onBackground border border-surfaceAccent rounded-full desktop:px-6 px-6 py-6 w-fit flex items-center desktop:gap-3 gap-2 tablet:mx-auto mobile:mx-auto small-mobile:mx-auto">
              <span className="text-textOnPrimary text-p-sm">
                With former{" "}
                <br className="mobile:block small-mobile:block hidden" />{" "}
                members of:
              </span>

              <span className="flex desktop:gap-3 gap-1">
                <img
                  className="w-full h-[40px] mt-[-10px]"
                  alt=""
                  src="https://framerusercontent.com/images/2sdquF5hI5Pd1dsYX3Oaz72ixBU.png"
                />
                <img
                  className="w-full h-[40px]"
                  alt=""
                  src="https://framerusercontent.com/images/57jMZ2G13ojfi3zaQxV0eHL4.png"
                />
                <img
                  className="w-full h-[40px]"
                  alt=""
                  src="https://framerusercontent.com/images/7MjwdVGzZqi7MgL92U8SpsJYH8M.png"
                />
              </span>
            </div>
          </div>

          <div className="desktop:w-full tablet:max-w-[700px] mobile:max-w-[500px] small-mobile:max-w-[500px] mx-auto">
            <div className="desktop:absolute right-[-5%] top-[-2%] desktop:w-[54%] w-full">
              <img
                className="w-full h-full"
                alt=""
                // src="https://framerusercontent.com/images/CjL1UjnUVhtUj9InsAszyNk8dqE.webp"
                src="./services_hero_raw_image_bg-removed.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-white w-full h-full desktop:px-[112px] tablet:px-[48px] px-[24px]">
        <div className="flex flex-col gap-4 justify-center items-center mt-32 mb-20">
          <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
            {/* BACKED BY THE BEST  */}
            END TO END DELIVERY
          </p>

          <p className="text-center">
            <span className="desktop:text-xl tablet:text-xl text-md text-textPrimary font-medium">
              We are with you
            </span>
            <p className="text-textTertiary desktop:text-xl tablet:text-xl text-md font-medium">
              at every step of the way
            </p>
          </p>
        </div>

        <div className="tablet:max-w-[500px] mx-auto flex flex-col gap-6 mb-44">
          <div className="flex desktop:flex-row flex-col gap-6">
            <div className="desktop:w-1/2 bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full desktop:h-[275px] tablet:h-[275px]">
                <img
                  className="w-full h-full object-cover object-bottom py-6"
                  alt=""
                  src="./Frame_1000004464.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
                <h1 className="text-p-lg font-medium text-textPrimary">
                  Taking the first step with Discovery
                </h1>
                <p className="text-p-lg text-textTertiary">
                  Whether you have an idea in mind or need help getting there,
                  we help uncover your wants & needs by asking the right
                  questions
                </p>
              </div>
            </div>

            <div className="desktop:w-1/2 bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="desktop:w-[320px] desktop:h-[275px] tablet:h-[275px] pb-3 ">
                <img
                  className="w-full h-full object-cover object-bottom mobile:px-2 small-mobile:px-2"
                  alt=""
                  // src="https://framerusercontent.com/images/bomLbvGB5d5JuLhZygAkXziRLGk.svg"
                  src="./Group_1000004312.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
                <h1 className="text-p-lg font-medium text-textPrimary">
                  Setting you up for success with a Study
                </h1>
                <p className="text-p-lg text-textTertiary">
                  Once we understand what your pain points & value unlocks are,
                  we test the solution with a deep dive on key features
                </p>
              </div>
            </div>
          </div>

          <div className="w-full desktop:h-[360px] bg-onBackground rounded-xl flex desktop:flex-row flex-col-reverse justify-between items-end desktop:items-center border border-surfaceAccent overflow-hidden">
            <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
              <h1 className="text-xs font-medium text-textPrimary">
                Glimpse into the future with the Art of the Possible
              </h1>
              <p className="text-p-lg text-textTertiary">
                Putting it all together in a quick sprint, we present to you a
                demoable version of your solution, which serves as the canvas
                for what the future holds
              </p>
            </div>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover object-bottom"
                alt=""
                // src="https://framerusercontent.com/images/58FhNuWoJqRIVKgfWtvEZcivD8.webp"
                src="465shots_so_1.png"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-32 mb-20">
          <p className="text-p-subheading text-textAccent font-semibold tracking-wider">
            BUILD TO SCALE
          </p>

          <p className="text-center">
            <span className="desktop:text-xl tablet:text-xl text-md text-textPrimary font-medium">
              In just a month,
            </span>
            <p className="text-textTertiary desktop:text-xl tablet:text-xl text-md font-medium ">
              deliver the future
            </p>
          </p>
        </div>

        <div className="tablet:max-w-[500px] mx-auto flex flex-col gap-6 mb-44">
          <div className="flex desktop:flex-row flex-col gap-6">
            <div className="desktop:max-w-[42%] desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full h-[317px]">
                <img
                  className="w-full h-full object-cover pb-3"
                  alt=""
                  // src="https://framerusercontent.com/images/54ON3SUihflcP09xZ8HFxLPWosE.jpg"
                  src="Frame_1000004470.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
                <h1 className="text-xs font-medium text-textPrimary">
                  Our team is your team
                </h1>
                <p className="text-p-lg text-textTertiary">
                  The Arhasi team comes from all backgrounds of experience
                  leading some of the highest-value projects for the top
                  companies
                </p>
              </div>
            </div>

            <div className="desktop:flex-1 desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full h-[317px]">
                <img
                  className="w-full h-full object-contain p-2"
                  alt=""
                  // src="https://framerusercontent.com/images/Xj3qJjZ9ZXXawKzaXAPUZlOz2k.svg"
                  src="./Frame_1000004482.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
                <h1 className="text-xs font-medium text-textPrimary">
                  The essence of Agile development
                </h1>
                <p className="text-p-lg text-textTertiary">
                  We move with R.A.P.I.D. speed, embodying a "move fast learn
                  fast" approach to project delivery. We dedicate a month or
                  less to providing you with a demonstrable Proof of Concept
                </p>
              </div>
            </div>
          </div>

          <div className="flex desktop:flex-row flex-col gap-6">
            <div className="desktop:flex-1 desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full h-[317px]">
                <img
                  className="w-full h-full object-contain pb-2"
                  alt=""
                  // src="https://framerusercontent.com/images/7CPmRgW2p2fmaIOJMRJtZJDRs.svg"
                  src="./Frame_1000004465.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5 leading-[24px]">
                <h1 className="text-xs font-medium text-textPrimary">
                  Assessment and Assurance
                </h1>
                <p className="text-p-lg text-textTertiary">
                  Arhasi does the due diligence on implementing secure and
                  governed AI solutions for you, to ensure that you are
                  compliant from the get-go
                </p>
              </div>
            </div>

            <div className="desktop:max-w-[47%] desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="mobile:w-[130%] small-mobile:w-[130%] h-[317px]">
                <img
                  className="w-full h-full object-contain"
                  alt=""
                  // src="https://framerusercontent.com/images/Xj3qJjZ9ZXXawKzaXAPUZlOz2k.svg"
                  src="./Frame_1000004465_0001.png"
                />

                {/* <div className="w-full desktop:h-[180px] h-[220px] flex justify-center items-end mt-6 gap-12 px-6">
                  <div className="w-1/2 flex flex-col h-full justify-between">
                    <h1 className="text-display-2 font-medium text-textSecondary">
                      6x
                    </h1>
                    <div className="flex flex-col gap-3">
                      <p className="text-p-lg text-textSecondary">
                        Faster Project Delivery
                      </p>
                      <div className="bg-primary w-full h-[14px] rounded-full" />
                    </div>
                  </div>

                  <div className="w-1/2 flex flex-col h-full justify-between">
                    <h1 className="text-display-2 font-medium text-textSecondary">
                      2x
                    </h1>
                    <div className="flex flex-col gap-3">
                      <p className="text-p-lg text-textSecondary">
                        Faster Development
                      </p>
                      <div className="bg-primary w-full h-[14px] rounded-full" />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pb-5">
                <h1 className="text-xs font-medium text-textPrimary">
                  Combining the power of Product & Delivery
                </h1>
                <p className="text-p-lg text-textTertiary">
                  Leveraging and customizing our already secure and
                  production-ready products allows us to deliver quicker time to
                  value than a typical consulting engagement
                </p>
              </div>
            </div>
          </div>

          <div className="flex desktop:flex-row flex-col gap-6">
            <div className="desktop:max-w-[42%] desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full h-[317px]">
                <img
                  className="w-full h-full object-contain"
                  alt=""
                  // src="https://framerusercontent.com/images/bomLbvGB5d5JuLhZygAkXziRLGk.svg"
                  src="./Group_1000004306.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5">
                <h1 className="text-xs font-medium text-textPrimary">
                  Design thinking, creative consulting
                </h1>
                <p className="text-p-lg text-textTertiary">
                  We take business consulting to the next level with a
                  multifaceted approach marrying business, technology, and
                  integrity--and we have just the team to do it
                </p>
              </div>
            </div>

            <div className="desktop:flex-1 desktop:h-[470px] tablet:h-[470px] bg-onBackground rounded-xl flex flex-col justify-between items-center border border-surfaceAccent overflow-hidden">
              <div className="w-full h-[317px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt=""
                  // src="https://framerusercontent.com/images/5kyXHOBFxyGJASusLGdQ83kDw.webp"
                  src="./403shots_so_1.png"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 pt-3 pb-5">
                <h1 className="text-xs font-medium text-textPrimary">
                  You ask, you shall receive
                </h1>
                <p className="text-p-lg text-textTertiary">
                  Our consulting methodology dovetails discovery and model
                  preparation, and we work with you hand in hand to ensure we
                  are making your vision a reality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full desktop:my-52 my-24">
          <div
            style={{
              backgroundImage:
                "url(https://framerusercontent.com/images/kk9jIjVwgYaHzuMdcCUtuteKWM.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="border border-surfaceAccent rounded-2xl relative w-full h-[472px] mobile:h-[550px] small-mobile:h-[550px] text-center"
          >
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-40" />

            <div className="absolute left-0 top-0 desktop:w-[60%] h-full  flex flex-col gap-12 desktop:ml-20 justify-center tablet:px-12 px-4">
              <div className="h-[32px] w-fit">
                <img
                  className="w-full h-full"
                  alt=""
                  src="https://framerusercontent.com/images/B3Lq3sWPowTvh44vtolteCKUk.svg"
                />
              </div>
              <p className="text-md font-medium text-textPrimary ">
                «As someone who believes in both speed and quality, Infinite
                helped us launch in two days a website that gets us compliments
                from all our customers.»
              </p>
              <p className="text-p-md"> Anna Scholz - CTO at Saas</p>
            </div>
          </div>
        </div> */}
        {/* Needed later on */}
        {/* <div className="w-full mb-40">
          <ul className="w-full flex justify-between gap-5">
            {designInnovationInfo.map((eachInfo) => {
              return (
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
              );
            })}
          </ul>
        </div> */}

        {/* <div className="w-full my-52">
          <div
            style={{
              width: "100%",
              height: "472px",
            }}
            className="border border-surfaceAccent rounded-2xl relative"
          >
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-40" />

            <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
              <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] my-3 w-fit">
                Get in touch
              </button>
              <p className="w-[50%] text-xl text-center font-medium text-textPrimary">
                Launch fast with Infinite template for startups
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full my-52">
          <div
            style={{
              width: "100%",
              height: "472px",
              position: "relative", // Ensure relative positioning for absolute children
            }}
            className="border border-surfaceAccent rounded-2xl relative overflow-hidden" // Add overflow-hidden to prevent gradient overflow
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background: `
            radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 10%, transparent 11%) 50% 50% / 300% 300%,
            radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.08) 20%, transparent 21%) 50% 50% / 200% 200%,
            radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.06) 30%, transparent 31%) 50% 50% / 100% 100%
          `,
                  pointerEvents: "none", // Prevent gradient from blocking clicks
                }}
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-40" />

            <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
              <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] my-3 w-fit">
                Get in touch
              </button>
              <p className="w-[50%] text-xl text-center font-medium text-textPrimary">
                Launch fast with Infinite template for startups
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full my-52">
          <div
            style={{
              width: "100%",
              height: "472px",
              position: "relative", // Ensure relative positioning for absolute children
            }}
            className="border border-surfaceAccent rounded-2xl relative overflow-hidden" // Add overflow-hidden to prevent gradient overflow
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background: `
            radial-gradient(circle, rgba(255, 166, 210, 0.15) 0%, rgba(255, 166, 210, 0.15) 10%, transparent 11%) 50% 50% / 300% 300%,
            radial-gradient(circle, rgba(255, 166, 210, 0.10) 0%, rgba(255, 166, 210, 0.10) 20%, transparent 21%) 50% 50% / 200% 200%,
            radial-gradient(circle, rgba(255, 166, 210, 0.05) 0%, rgba(255, 166, 210, 0.05) 30%, transparent 31%) 50% 50% / 150% 150%,
            radial-gradient(circle, rgba(255, 166, 210, 0.05) 0%, rgba(255, 166, 210, 0.05) 40%, transparent 41%) 50% 50% / 100% 100%
          `,
                  pointerEvents: "none", // Prevent gradient from blocking clicks
                }}
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-40" />

            <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
              <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] my-3 w-fit">
                Get started
              </button>
              <p className="w-[50%] text-xl text-center font-medium text-textPrimary">
                Launch fast with Infinite template for startups
              </p>
            </div>
          </div>
        </div> */}

        <div className="w-full desktop:my-52 my-24">
          <div className="border border-surfaceAccent rounded-2xl overflow-hidden relative w-full desktop:h-[472px] h-[400px]">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background: `
            radial-gradient(circle at center, rgba(255, 166, 210, 0.15) 0%, rgba(255, 166, 210, 0.15) 40%, transparent 51%) no-repeat,
            radial-gradient(circle at center, rgba(255, 166, 210, 0.10) 0%, rgba(255, 166, 210, 0.10) 50%, transparent 61%) no-repeat,
            radial-gradient(circle at center, rgba(255, 166, 210, 0.05) 0%, rgba(255, 166, 210, 0.05) 60%, transparent 71%) no-repeat,
            radial-gradient(circle at center, rgba(255, 166, 210, 0.05) 0%, rgba(255, 166, 210, 0.05) 70%, transparent 81%) no-repeat
          `,
                  borderRadius: "9999px", // Mimic rounded-full
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-60" />

            <div className="absolute left-0 top-0 w-full h-full flex flex-col gap-4 justify-center items-center">
              <button className="text-textOnPrimary text-p-md bg-primary hover:bg-onBackground border border-[#c10104] hover:border hover:border-surfaceAccent font-semibold rounded-full px-6 py-[10px] my-3 w-fit">
                Get started
              </button>
              <p className="desktop:w-[70%] w-[80%] desktop:text-xl tablet:text-xl text-md text-center font-medium text-textPrimary">
                {/* Launch fast with Infinite template for startups */}
                Take a step forward in your AI journey with Arhasi by your side
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Footer />
          <br className="py-4" />
        </div>
      </div>
    </div>
  );
};

export default AiWithIntegrity;
