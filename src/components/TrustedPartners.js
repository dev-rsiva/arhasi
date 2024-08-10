import React from "react";

const TrustedPartners = ({ from }) => {
  return (
    <div className="flex desktop:flex-row flex-col justify-center items-center desktop:gap-24 tablet:gap-12 gap-8 py-8">
      <div
        className={`${
          from === "productsPage" ? "hidden" : "flex"
        } flex-col desktop:text-left tablet:text-left text-center`}
      >
        <h1 className="text-p-md text-textPrimary">Trusted by our partners,</h1>
        <p className="desktop:text-nowrap text-p-md text-textSecondary">
          Empowering the top companies in reliable & secure AI
        </p>
      </div>
      <div className="relative w-full image-scroll-container">
        <div className="image-list">
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/ZKRq1z235oPmkciGkoimdiqigTg.svg"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/ctz7jfVgOlhPnJtoWX5OM4xFo8.png?scale-down-to=1024"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/itv6f8fuUGhsXcn88TAbhBfy0w.png"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/93vyEbNvGwW6tAXvemSFT7k.png"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/FFS2rnhpRLrDFcrnoLfon5fM2yc.webp?scale-down-to=512"
            />
          </div>
        </div>
        <div className="image-list">
          {/* <!-- Duplicated images for continuous effect --> */}
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/ZKRq1z235oPmkciGkoimdiqigTg.svg"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/ctz7jfVgOlhPnJtoWX5OM4xFo8.png?scale-down-to=1024"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/itv6f8fuUGhsXcn88TAbhBfy0w.png"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/93vyEbNvGwW6tAXvemSFT7k.png"
            />
          </div>
          <div className="image-item">
            <img
              className="image"
              alt=""
              src="https://framerusercontent.com/images/FFS2rnhpRLrDFcrnoLfon5fM2yc.webp?scale-down-to=512"
            />
          </div>
        </div>

        <div className="absolute z-10 left-0 top-0 bottom-0 w-[10%] h-full bg-gradient-to-r from-background to-transparent" />
        <div className="absolute z-10 right-0 top-0 bottom-0 w-[10%] h-full bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  );
};

export default TrustedPartners;
