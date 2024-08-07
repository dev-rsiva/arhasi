import React from "react";
import BlogpostCard from "./BlogpostCard";

const BlogpostCards = () => {
  const blogCardsDetails = [
    {
      authorName: "Chiru Bhavansikar",
      role: "Founder & CEO",
      about: "Watch the Video",
      blogTitle: "Turnkey Responsible AI on Control Plane Cloud",
      companyInfo: "Arhasi Inc.",
      companyName: "Arhasi",
      // video:
      //   "https://framerusercontent.com/assets/4YHelhM5OiGLRGgFZpptXMCCWPM.mp4",
      video:
        "https://res.cloudinary.com/dhj4gimub/video/upload/v1722966612/Reduced_Arhasi_s_Turnkey_Responsible_AI_platform_on_Control_Plane_Cloud_h38trg.mp4",

      // video:
      //   "./Arhasi's_Turnkey_Responsible_AI_platform_on_Control_Plane_Cloud.mp4",
      youtubeLink: "https://www.youtube.com/watch?v=XP6HTW_12Z4",
    },
    {
      authorName: "Chiru Bhavansikar",
      role: "Founder & CEO",
      about: "Watch the Video",
      blogTitle: "Secure AI Internal Chatbots with Microsoft Teams",
      companyInfo: "Arhasi Inc.",
      companyName: "Arhasi",
      video:
        "https://res.cloudinary.com/dhj4gimub/video/upload/v1722963982/Secure_AI_Internal_Chatbots_with_Microsoft_Teams_zakxxt.mp4",

      // video: "./Secure_AI_Internal_Chatbots_with_Microsoft_Teams.mp4",
      youtubeLink: "https://www.youtube.com/watch?v=IRrPcLPAIyo",
    },
    {
      authorName: "Chiru Bhavansikar",
      role: "Founder & CEO",
      about: "Watch the Video",
      blogTitle: "Transform ITSM with an AI Integrity Assurance Chatbot",
      companyInfo: "Arhasi Inc.",
      companyName: "Arhasi",
      video:
        "https://res.cloudinary.com/dhj4gimub/video/upload/v1722966616/Transform_ITSM_with_an_AI_Chatbot_equipped_with_Integrity_Assurance_ppxc7w.mp4",

      // video:
      //   "./Transform_ITSM_with_an_AI_Chatbot_equipped_with_Integrity_Assurance.mp4",
      youtubeLink: "https://www.youtube.com/watch?v=SWptdLlSqOk",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center tablet:flex-col mobile:flex-col small-mobile:flex-col gap-4">
      {blogCardsDetails.map((eachBlogpost, index) => {
        return <BlogpostCard index={index} blogpost={eachBlogpost} />;
      })}
    </div>
  );
};

export default BlogpostCards;
