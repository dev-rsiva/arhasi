import { testimonalsInfo } from "../utils/constants";

const TestimonalRotator = () => {
  return (
    <div className="horizontal-scroll-container relative">
      <div className="horizontal-scroll">
        {testimonalsInfo.map((testimonal, index) => (
          <div key={index} className="scroll-item">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <img
                  alt=""
                  src={testimonal.image}
                  className="w-[48px] rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-p-md font-semibold text-textPrimary">
                    {testimonal.name}
                  </h3>
                  <p className="text-p-md text-textTertiary">
                    {testimonal.role}
                  </p>
                </div>
              </div>

              <div className="">
                <img
                  alt=""
                  src={testimonal.logo}
                  className="w-[148px] rounded-md"
                />
              </div>
            </div>

            <p className="text-p-md text-textTertiary my-6">
              "{testimonal.review}"
            </p>
          </div>
        ))}
      </div>
      <div className="horizontal-scroll">
        {testimonalsInfo.map((testimonal, index) => (
          <div key={index} className="scroll-item">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <img
                  alt=""
                  src={testimonal.image}
                  className="w-[48px] rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-p-md font-semibold text-textPrimary">
                    {testimonal.name}
                  </h3>
                  <p className="text-p-md text-textTertiary">
                    {testimonal.role}
                  </p>
                </div>
              </div>

              <div className="">
                <img
                  alt=""
                  src={testimonal.logo}
                  className="w-[148px] rounded-md"
                />
              </div>
            </div>

            <p className="text-p-md text-textTertiary my-6">
              "{testimonal.review}"
            </p>
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default TestimonalRotator;
