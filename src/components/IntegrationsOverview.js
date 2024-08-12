import React from "react";

const IntegrationsOverview = () => {
  const integrationsInfo = [
    {
      icon: "https://framerusercontent.com/images/C3HxF0Vqr4O3kawEZRMeyHNDWhY.webp",
      title: "Redis",
      description:
        "Get the world’s fastest in-memory database from the ones who built it.",
      endline: "Arhasi x Redis",
    },
    {
      icon: "https://framerusercontent.com/images/X0LAZrdCz6Vyq9SyTYTHhafkbU.png",
      title: "Google Cloud Platform",
      description:
        "A suite of cloud computing services that provides a series of modular cloud services alongside a set of management tools.",
      endline: "Arhasi x Google Cloud Platform",
    },
    {
      icon: "https://framerusercontent.com/images/p4HViJE4mhj12LCzIW1ZzVn3Fk.png",
      title: "Neo4j",
      description:
        "Powerful native graph storage, data science, and analytics with enterprise-grade security.",
      endline: "Arhasi x Neo4j",
    },
    {
      icon: "https://framerusercontent.com/images/6QgpHXRVxqcWsxyyqZbViwFy1Qc.webp",
      title: "AWS Cloud Platform",
      description:
        "Offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.",
      endline: "Arhasi x AWS Cloud Platform",
    },
    {
      icon: "https://framerusercontent.com/images/OTq1sfa6fbP6ipMC1xw1HFXWY.png",
      title: "Databricks",
      description:
        "The world's first data intelligence platform powered by generative AI. Infuse AI into every facet of your business.",
      endline: "Arhasi x Databricks",
    },
    {
      icon: "https://framerusercontent.com/images/plImIZNpyrBwoTDJNSGLD6tnAhA.png",
      title: "Azure Cloud Platform",
      description:
        "Invent with purpose, realize cost savings, and increase efficiency with Azure's open and flexible cloud computing platform.",
      endline: "Arhasi x Azure Cloud Platform",
    },
  ];

  return (
    <div className="desktop:mb-48 mb-32">
      <h2 className="w-full font-medium desktop:text-display-3 tablet:text-display-3 text-center text-md my-12 ">
        Discover our Integrations <br />
        <span className="text-textTertiary">The best in interoperability</span>
      </h2>
      <div>
        <ul className="flex flex-wrap desktop:flex-row tablet:flex-row flex-col desktop:gap-5 tablet:gap-4 gap-1">
          {integrationsInfo.map((eachInfo) => {
            return (
              <li
                // style={{ position: "relative", margin: "3px" }}
                className="desktop:w-[48%] tablet:w-[48%] p-1 desktop:my-1 tablet:my-1 my-3 rounded-2xl border border-surfaceAccent bg-onBackground"
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    border: "2px solid red",
                  }}
                /> */}

                <div className="w-full h-full p-[4px] rounded-2xl gradient-border">
                  <div className="content desktop:p-8 tablet:p-6 p-4 w-full h-full flex flex-col gap-6">
                    <div className="flex justify-between ">
                      <div className="flex items-center gap-3">
                        <img alt="" src={eachInfo.icon} className="w-[32px]" />
                        <h2 className="text-p-md font-semibold text-textSecondary">
                          {eachInfo.title}
                        </h2>
                      </div>
                      {/* <button className="button text-p-xs bg-surfaceAccent font-semibold rounded-full w-[82px] h-[32px]">
                    Connect
                  </button> */}
                    </div>
                    <p className="text-wrap text-p-md text-textSecondary">
                      {eachInfo.description}
                    </p>
                    <p className="text-p-xs text-textTertiary">
                      {eachInfo.endline}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IntegrationsOverview;
