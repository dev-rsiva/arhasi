import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogpostCard = ({ blogpost, index }) => {
  const [hideVideo, setHideVideo] = useState(true);
  const videoRef = useRef();

  const handleVideoError = (e) => {
    console.error("Error loading video:", e);
  };

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    setHideVideo(false);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Error attempting to play video:", err);
      });
    }
  };

  const handleMouseLeave = (e) => {
    e.stopPropagation();
    setHideVideo(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div
      key={index}
      className="bg-onBackground border-[0.5px] border-surfaceAccent rounded-2xl overflow-hidden min-w-[32%] max-w-[500px] h-full my-4 desktop:my-12 flex flex-col justify-between"
    >
      <div
        className="relative w-full h-full bg-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          // src="https://framerusercontent.com/assets/4YHelhM5OiGLRGgFZpptXMCCWPM.mp4"
          src={blogpost.video}
          loop
          playsInline
          className="cursor-auto w-full min-h-[262px] rounded-none object-contain bg-transparent object-center"
          onError={handleVideoError}
          controls // Add controls for debugging
        >
          {/* <source
            src="https://framerusercontent.com/assets/4YHelhM5OiGLRGgFZpptXMCCWPM.mp4"
            type="video/mp4"
          /> */}
          Your browser does not support the video tag.
        </video>

        {hideVideo && (
          <div
            className="absolute top-0 left-0 w-full h-full p-6"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly black with transparency
              backdropFilter: "blur(5px)",
              zIndex: 1,
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-p-xs text-textPrimary">
                {blogpost.authorName}
              </p>
              <p className="text-p-xs text-textPrimary">
                {`${blogpost.role} at ${blogpost.companyName}`}
              </p>
            </div>
            <div className="w-full h-full flex-1 flex justify-center items-center pb-8">
              <img
                alt=""
                src="./Arhasi_new_website_logo-removebg-preview.png"
                className="h-[32px]"
              />
            </div>
          </div>
        )}
      </div>
      <Link to={blogpost.youtubeLink} target="_blank" rel="noopener noreferrer">
        <div className="text-white px-4 py-2 bg-onBackground">
          <div className="flex items-center gap-3 pt-3 pb-5 border-b border-surfaceAccent">
            <img
              alt=""
              src="./Untitled_design-removebg-preview.png"
              className="w-5"
            />
            <span className="text-p-xs font-semibold text-textSecondary pt-[6px]">
              {blogpost.about}
            </span>
          </div>
          <h1 className="my-4 text-p-xl text-textPrimary font-medium">
            {blogpost.blogTitle}
          </h1>
          <p className="my-3 text-p-xs text-textTertiary mt-10">
            {blogpost.companyInfo}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogpostCard;
