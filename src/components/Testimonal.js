import React from "react";

const Testimonal = ({ testimonal }) => {
  return (
    <li className="desktop:text-p-md tablet:text-p-md text-p-sm border border-surfaceAccent rounded-2xl px-4 bg-onBackground">
      <div className="flex flex-col gap-6 my-6">
        <div className="flex">
          <div className="w-[16px] h-auto">{testimonal.starIcon}</div>
          <div className="w-[16px] h-auto">{testimonal.starIcon}</div>
          <div className="w-[16px] h-auto">{testimonal.starIcon}</div>
          <div className="w-[16px] h-auto">{testimonal.starIcon}</div>
          <div className="w-[16px] h-auto">{testimonal.starIcon}</div>
        </div>
      </div>
      <p className="text-textTertiary my-6">"{testimonal.review}"</p>
      <div className="flex gap-3 items-center my-6">
        <img alt="" src={testimonal.image} className="w-[48px] rounded-md" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-textPrimary">{testimonal.name}</h3>
          <p className="text-textTertiary">{testimonal.role}</p>
        </div>
      </div>
    </li>
  );
};

export default Testimonal;
