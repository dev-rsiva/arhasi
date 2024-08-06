import React, { useRef, useEffect } from "react";
import Testimonal from "./Testimonal";
const Testimonals = () => {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const centerColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  // const testimonalsInfo = [
  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Coupling Arhasi’s AI frameworks and tools is the accelerator pedal for rapid AI adoption",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Wendy Varnell",
  //     role: "Chief Strategy Officer of LifeWorks",
  //   },
  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },
  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },

  //   {
  //     starIcon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         focusable="false"
  //         viewBox="0 0 24 24"
  //         style={{
  //           userSelect: "none",
  //           width: "100%",
  //           height: "100%",
  //           display: "inline-block",
  //           fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
  //           flexShrink: 0,
  //         }}
  //       >
  //         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
  //       </svg>
  //     ),
  //     review:
  //       "Cloudbench and Arhasi will collaborate closely to act as a vital bridge between AI and Web3 development expertise and the evolving requirements of our clients, thus facilitating a seamless transition towards AI and Web3 adoption and product development",
  //     image:
  //       "https://framerusercontent.com/images/eAW7MX78tsnrXRC7gJKKs1nP5E.webp",
  //     name: "Enzo Villani",
  //     role: "CEO of Alpha Transform Holdings",
  //   },
  // ];

  const testimonalsInfo = [
    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "Coupling Arhasi’s AI frameworks and tools is the accelerator pedal for rapid AI adoption. The LifeWorks AI employee assistant offers our employees a superior alternative for policy and procedure guidance.",
      image:
        "https://framerusercontent.com/images/mj4tu1XdsW994hmCinylNmJwis.jpg",
      name: "Wendy Varnell",
      role: "CSO, LifeWorks",
      logo: "https://framerusercontent.com/images/hQR8FfhSIlkH1EmP18eNWCBaJkU.png",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "As the CEO of an AI platform startup, the rapid development, expertise, and quality of our AI solutions are crucial for a successful launch. Partnering with Cloudbench has surpassed all my expectations. Their meticulous attention to detail, professionalism, and unparalleled expertise have been outstanding. They are a true innovation partner to our firm, and I highly recommend Cloudbench for anyone seeking to develop a generative AI solution for their business.",
      image:
        "https://framerusercontent.com/images/o7DapGo0w1SJx44zAnzYEbUhTE.webp",
      name: "Jeff Maser",
      role: "Founder & CEO, MarketMind",
      logo: "https://framerusercontent.com/images/PhrTK7FTH9DrndbOwmFrfiA5E.png",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "Arhasi’s meticulous approach to our discovery phase, led by their exceptional strategy consultants, proved invaluable. Their expertise shone through every stage, from insightful user journey workshops to detailed wireframes and a compelling final presentation.  We're now confidently equipped to embark on a successful proof of concept for our AI dashboard platform",
      image:
        "https://framerusercontent.com/images/IEDdPvEJDHI3Zy0O1A35AsS7fQU.jpeg",
      name: "Wes Levitt",
      role: "CFA & co-CIO, Alpha Transform Holdings",
      logo: "",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "With our partners Google and Arhasi, we're poised to assist startups and midmarket enterprises in navigating the intricate landscapes of technology and data, thereby enabling them to innovate more effectively.",
      image:
        "https://framerusercontent.com/images/UUPb5Oi6qT5CPuTkJuaDuZUf2uo.webp",
      name: "Tom Richer",
      role: "CEO at Cloudbench",
      logo: "https://framerusercontent.com/images/iwpgpF7jQ0h59VhM5xidKEcTqJo.jpg",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "Coupling Arhasi’s AI frameworks and tools is the accelerator pedal for rapid AI adoption. The LifeWorks AI employee assistant offers our employees a superior alternative for policy and procedure guidance.",
      image:
        "https://framerusercontent.com/images/mj4tu1XdsW994hmCinylNmJwis.jpg",
      name: "Wendy Varnell",
      role: "CSO, LifeWorks",
      logo: "https://framerusercontent.com/images/hQR8FfhSIlkH1EmP18eNWCBaJkU.png",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "As the CEO of an AI platform startup, the rapid development, expertise, and quality of our AI solutions are crucial for a successful launch. Partnering with Cloudbench has surpassed all my expectations. Their meticulous attention to detail, professionalism, and unparalleled expertise have been outstanding. They are a true innovation partner to our firm, and I highly recommend Cloudbench for anyone seeking to develop a generative AI solution for their business.",
      image:
        "https://framerusercontent.com/images/o7DapGo0w1SJx44zAnzYEbUhTE.webp",
      name: "Jeff Maser",
      role: "Founder & CEO, MarketMind",
      logo: "https://framerusercontent.com/images/PhrTK7FTH9DrndbOwmFrfiA5E.png",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "Arhasi’s meticulous approach to our discovery phase, led by their exceptional strategy consultants, proved invaluable. Their expertise shone through every stage, from insightful user journey workshops to detailed wireframes and a compelling final presentation.  We're now confidently equipped to embark on a successful proof of concept for our AI dashboard platform",
      image:
        "https://framerusercontent.com/images/IEDdPvEJDHI3Zy0O1A35AsS7fQU.jpeg",
      name: "Wes Levitt",
      role: "CFA & co-CIO, Alpha Transform Holdings",
      logo: "",
    },

    {
      starIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          style={{
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: "var(--token-b62c5eed-f783-46cd-9d4c-7561401116f9, rgb(226, 235, 237))",
            flexShrink: 0,
          }}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
        </svg>
      ),
      review:
        "With our partners Google and Arhasi, we're poised to assist startups and midmarket enterprises in navigating the intricate landscapes of technology and data, thereby enabling them to innovate more effectively.",
      image:
        "https://framerusercontent.com/images/UUPb5Oi6qT5CPuTkJuaDuZUf2uo.webp",
      name: "Tom Richer",
      role: "CEO at Cloudbench",
      logo: "https://framerusercontent.com/images/iwpgpF7jQ0h59VhM5xidKEcTqJo.jpg",
    },
  ];

  console.log("Testimonals");
  const getUniqueTestimonals = () => {
    let uniqueTestimonals = [];
    let roles = testimonalsInfo.map((testimonal) => testimonal.role);
    console.log(roles);

    for (let i = 0; i <= testimonalsInfo.length - 1; i++) {
      console.log(testimonalsInfo[i].name);

      if (
        !uniqueTestimonals
          .map((testimonal) => testimonal.name)
          .includes(testimonalsInfo[i].name)
      ) {
        console.log("true");
        uniqueTestimonals.push(testimonalsInfo[i]);
      }
    }

    console.log(uniqueTestimonals);
    return uniqueTestimonals;
  };

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollRatio = containerTop / windowHeight;

      if (centerColumnRef.current) {
        centerColumnRef.current.style.transform = `translateY(${
          scrollRatio * -50
        }%)`;
      }
      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = `translateY(${
          scrollRatio * -25
        }%)`;
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `translateY(${
          scrollRatio * -37.5
        }%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("handlescroll");
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollRatio = containerTop / windowHeight;

      if (centerColumnRef.current) {
        centerColumnRef.current.style.transform = `translateY(${
          scrollRatio * 100
        }%)`;
      }
      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = `translateY(${
          scrollRatio * 40
        }%)`;
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `translateY(${
          scrollRatio * 40
        }%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialOffset = -90; // Set initial offset here

  const handleScroll = () => {
    console.log("handleScroll");
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerBottom = containerRef.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (containerTop <= windowHeight && containerBottom >= 0) {
      const scrollRatio = containerTop / windowHeight;

      if (centerColumnRef.current) {
        centerColumnRef.current.style.transform = `translateY(${
          initialOffset + scrollRatio * 80
        }%)`;
      }
      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = `translateY(${
          initialOffset + scrollRatio * 20
        }%)`;
        setTimeout(() => {
          leftColumnRef.current.style.transform = `translateY(${
            initialOffset + 2 + scrollRatio * 20
          }%)`;
        }, 50);
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `translateY(${
          initialOffset + scrollRatio * 20
        }%)`;

        setTimeout(() => {
          rightColumnRef.current.style.transform = `translateY(${
            initialOffset + 2 + scrollRatio * 20
          }%)`;
        }, 50);
      }
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    const checkVisibility = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerBottom =
        containerRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      console.log(containerTop, windowHeight);
      console.log(containerBottom);

      if (containerTop <= windowHeight && containerBottom >= 0) {
        console.log("inside if");
        window.addEventListener("scroll", handleScroll);
        // handleScroll(); // Call it immediately to set initial positions

        centerColumnRef.current.style.transform = `translateY(${initialOffset}px)`;
        leftColumnRef.current.style.transform = `translateY(${initialOffset}px)`;
        rightColumnRef.current.style.transform = `translateY(${initialOffset}px)`;
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    console.log("Visibility called");
    checkVisibility(); // Call it on mount to check initial visibility

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden desktop:h-[960px] desktop:mb-32 mb-12"
      ref={containerRef}
    >
      <div className="testimonials-container h-full overflow-hidden">
        <div className="hidden desktop:flex desktop:flex-row flex-col mx-auto h-full gap-5">
          <ul
            className="testimonials-column flex-1 flex flex-col gap-5"
            ref={leftColumnRef}
          >
            {testimonalsInfo.map((testimonal, index) => (
              <Testimonal key={index} testimonal={testimonal} />
            ))}
          </ul>
          <ul
            className="testimonials-column center-column flex-1 flex flex-col gap-5 max-w-[550px]"
            ref={centerColumnRef}
          >
            {testimonalsInfo.map((testimonal, index) => (
              <Testimonal key={index} testimonal={testimonal} />
            ))}
          </ul>
          <ul
            className="testimonials-column flex-1 flex flex-col gap-5"
            ref={rightColumnRef}
          >
            {testimonalsInfo.map((testimonal, index) => (
              <Testimonal key={index} testimonal={testimonal} />
            ))}
          </ul>
        </div>

        <div className="hidden tablet:flex mobile:flex items-center small-mobile:flex desktop:flex-row flex-col mx-auto h-full gap-3">
          <ul className="flex-1 flex flex-col desktop:gap-3 tablet:gap-6 gap-6 max-w-[550px]">
            {getUniqueTestimonals().map((testimonal, index) => (
              <Testimonal key={index} testimonal={testimonal} />
            ))}
          </ul>
        </div>
      </div>
      <div className="gradient-overlay absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="gradient-overlay bottom absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Testimonals;
