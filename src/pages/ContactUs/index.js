import { useRef } from "react";
import Footer from "../../components/Footer";

const ContactUs = () => {
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
    <div className="top-[62px] w-full h-full">
      <div className="desktop:px-[112px] tablet:px-[48px] px-[24px]">
        <div className="desktop:w-[57%] mx-auto mt-36 flex flex-col gap-4">
          <h1 className="desktop:text-2xl tablet:text-[64px] text-[40px] desktop:leading-[80px] tablet:leading-[68px] leading-[48px] text-center font-medium text-textPrimary">
            How can we help?
          </h1>

          <p className="text-p-lg text-center text-textTertiary">
            We are always ready to help with any inquiries you may have. Feel
            free to drop us a message!
          </p>
        </div>

        <div className="flex desktop:flex-row flex-col  justify-center items-center gap-24 my-24">
          <div className="desktop:w-[64%] tablet:w-[80%] w-full bg-onBackground border border-surfaceAccent rounded-2xl desktop:gap-12 gap-8 flex flex-col desktop:p-12 tablet:p-12 p-6">
            <h1 className="text-xs font-medium">General inqueries</h1>
            <form onSubmit={handleFormSubmit} className="h-full flex flex-col">
              <div className="flex flex-col w-full bg-[#000D0F]">
                <input
                  className="w-full p-4 rounded-lg text-white font-semibold bg-transparent outline-none"
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="Name"
                  // value={nameRef?.current?.value}
                />
                <input
                  className="w-full p-4 rounded-lg text-white font-semibold bg-transparent outline-none"
                  ref={emailRef}
                  type="text"
                  name="email"
                  placeholder="Email"
                  // value={emailRef?.current?.value}
                />
                <textarea
                  className="p-4 rounded-lg text-white font-semibold bg-transparent outline-none"
                  ref={messageRef}
                  type="text"
                  name="name"
                  placeholder="Message"
                  rows="5"
                />
              </div>
              <button className="w-full p-4 rounded-b-lg text-white font-semibold bg-primary hover:bg-opacity-85">
                Send
              </button>
            </form>

            <div className="flex items-center mobile:items-baseline small-mobile:items-baseline gap-1">
              <div className="w-[16px] h-[16px] text-wrap mobile:pt-1 small-mobile:pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  style={{ userSelect: "none", width: "100%", height: "100%" }}
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                    fill="var(--token-fc3a5764-20db-4e60-9a2a-f96e229956ed, rgb(229, 1, 2))"
                  />
                </svg>
              </div>

              <div className="text-p-md text-textSecondary">
                <span>By pressing "Submit" you agree to our</span>{" "}
                <span className="text-p-md text-textAccent">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>

          <div className="flex desktop:flex-col mobile:flex-col small-mobile:flex-col flex-col gap-16 justify-center my-auto desktop:w-[20%]">
            {[
              {
                title: "Email support",
                desc: "We usually reply in less than 24 hours",
                email: "support@arhasi.com",
              },
              {
                title: "Email sales",
                desc: "We usually reply in less than 24 hours",
                email: "sales@arhasi.com",
              },
              {
                title: "Email media",
                desc: "We usually reply in less than 24 hours",
                email: "media@arhasi.com",
              },
            ].map((each) => {
              return (
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-p-md text-textPrimary font-semibold">
                      {each.title}
                    </h1>
                    <p className="text-p-md text-textTertiary">{each.desc}</p>
                  </div>
                  <p className="text-p-md text-textPrimary">{each.email}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full mt-36 mb-24">
        <div
          style={{
            width: "100%",
            height: "472px",
            backgroundImage:
              "url(https://framerusercontent.com/images/kk9jIjVwgYaHzuMdcCUtuteKWM.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-background to-background opacity-40" />

          <div className="absolute left-0 top-0 desktop:w-[40%] w-full text-center h-full px-3 flex flex-col gap-12 desktop:ml-20 justify-center">
            <p className="text-sm font-medium text-textPrimary">
              «As someone who believes in both speed to marketing and design
              quality, Infinite helped us launch in two days a website that gets
              us compliments from all our customers.»
            </p>
            <p className="text-p-md"> Matt Garlim ― Founder & CTO at Startup</p>
          </div>
        </div>
      </div>

      <div className="px-[112px]">
        <Footer />
        <br className="py-4" />
      </div>
    </div>
  );
};

export default ContactUs;
