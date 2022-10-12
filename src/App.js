import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Example() {
  AOS.init();
  const callouts = [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Red Dried Peppers",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Red dried peppers",
      price: "$1350",
      variants: "Sanan, Teja & Beyadgi",
    },
    {
      id: 2,
      name: "Red Dried Peppers",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Red dried peppers",
      price: "$1350",
      variants: "Sanan, Teja & Beyadgi",
    },
    {
      id: 3,
      name: "Red Dried Peppers",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Red dried peppers",
      price: "$1350",
      variants: "Sanan, Teja & Beyadgi",
    },
    {
      id: 4,
      name: "Red Dried Peppers",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Red dried peppers",
      price: "$1350",
      variants: "Sanan, Teja & Beyadgi",
    },
    // More products...
  ];
  return (
    <Fragment>
      <div>
        <div className="bg-white">
          <div className="border py-3 px-6">
            <div className="flex justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span className="ml-2 font-semibold text-[#252C32]">
                  Hectar
                </span>
              </div>
              <div className="ml-6 flex flex-1 gap-x-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Singapore</span>
              </div>
              <div className="ml-2 flex">
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Orders</span>
                </div>
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Favorites</span>
                </div>

                <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  <span className="text-sm font-medium">Sign in</span>
                </div>
                <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 mx-4 text-white hover:bg-blue-500">
                  <span className="text-sm font-medium">Create Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-main">
        <div className="bg-cream">
          <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start hero-section">
            {/*Left Col*/}
            <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                className="my-4 text-4xl font-bold leading-tight text-darken"
              >
                Buying
                <span className="text-yellow-500"> Agro Commodities </span>
                Online is now much easier
              </h1>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay={300}
                className="leading-normal text-xl mb-2 mr-8"
              >
                Calculate CIF in 30 secs.
              </p>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay={300}
                className="leading-normal text-sm mb-8 mr-8"
              >
                We partner with farmers and local markets to get you the best
                prices.
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={700}
                className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
              >
                <button className="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Explore Products
                </button>
                <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                        fill="#23BDEE"
                      />
                    </svg>
                  </button>
                  <span className="cursor-pointer">Watch how it works</span>
                </div>
              </div>
            </div>
            {/*Right Col*/}
            <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                className="w-10/12 mx-auto 2xl:-mb-20"
                src="img/girl.png"
              />
              {/* calendar */}
              <div
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-once="true"
                className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
              >
                <img
                  className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                  src="img/calendar.svg"
                />
              </div>
              {/* red */}
              <div
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-once="true"
                className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
              >
                <svg
                  className="h-16 sm:h-24"
                  viewBox="0 0 149 149"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d)">
                    <rect
                      x={40}
                      y={32}
                      width={69}
                      height={69}
                      rx={14}
                      fill="#F3627C"
                    />
                  </g>
                  <rect
                    x="51.35"
                    y="44.075"
                    width="47.3"
                    height="44.85"
                    rx={8}
                    fill="white"
                  />
                  <path
                    d="M74.5 54.425V78.575"
                    stroke="#F25471"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M65.875 58.7375L65.875 78.575"
                    stroke="#F25471"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M83.125 63.9125V78.575"
                    stroke="#F25471"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d"
                      x={0}
                      y={0}
                      width={149}
                      height={149}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={8} />
                      <feGaussianBlur stdDeviation={20} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* ux class */}
              <div
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-once="true"
                className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
              >
                <img
                  className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
                  src="img/ux-class.svg"
                  alt=""
                />
              </div>
              {/* congrats */}
              <div
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-once="true"
                className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
              >
                <img
                  className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                  src="img/congrat.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
            <svg
              className="xl:h-40 xl:w-full"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                fill="currentColor"
              />
            </svg>
            <div className="bg-white w-full h-20 -mt-px" />
          </div>
        </div>
      </div>

      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        {/* trusted by */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-3 text-gray-400 font-medium">
            Trusted by Customers Worldwide
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-8 gap-4 justify-items-center">
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/us-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/ks-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/ch-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/gm-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/ja-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/sn-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/vm-flag.jpg"
            />
            <img
              className="h-7 shadow border-2 border-gray-200"
              src="img/flags/nl-flag.jpg"
            />
          </div>
        </div>
        <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
          <h1 className="font-bold text-darken my-3 text-2xl">
            The <span className="text-yellow-500">Hectar</span> Confidence
          </h1>
          <p className="leading-relaxed text-gray-500">
            Get Best Prices and Gain Complete Visibility Over your Products from
            Procurement to Shipping
          </p>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#5B72EE" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 33 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
              Choose Product &amp; Get Instant Quotes
            </h1>
            <p className="px-4 text-gray-500">
              Let us know your quantity requirements, packaging preferences and
              your end destination. We will generate your quote within seconds.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#F48C06" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
                  fill="#F5F5FC"
                />
                <path
                  d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
                  fill="#F5F5FC"
                />
              </svg>
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
              Access all Documents from Dashboard
            </h1>
            <p className="px-4 text-gray-500">
              We are making the Export documentation clutter free - Access
              photos/videos from loading, inspection certificates, shipment
              documents from a single dashboard.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#29B9E7" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 55 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
              Real time Freight Tracking
            </h1>
            <p className="px-4 text-gray-500">
              We provide live tracking of ongoing orders, giving you immediate
              notifications when a shipment passes a milestone.
            </p>
          </div>
        </div>
        {/* lorem */}
        <div className="mt-28">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto"
          >
            <h1 className="text-3xl font-bold mb-4">
              Focussed <span className="text-yellow-500">Products</span>
            </h1>
            <p className="text-gray-500">
              By Providing unprecedented efficiency in procurement
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.variants}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="test-xs bold">starts </span>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-300 mt-8">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-orange-300 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">View all products!</span>
                  <span className="hidden md:inline">
                    Get started easily now by browsing products and requesting
                    quotations of the products that interest you.
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  Explore all products
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* lorem */}
        <div className="mt-28">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto"
          >
            <h1 className="text-3xl font-bold mb-4">
              Explore by <span className="text-yellow-500">Categories</span>
            </h1>
            <p className="text-gray-500">
              By Providing unprecedented efficiency in procurement
            </p>
          </div>
          <div className="bg-gray-100 mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-4">
                <div className="mt-2 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
                  {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={callout.href}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        {callout.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 mt-8">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-blue-600 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">View all products!</span>
                  <span className="hidden md:inline">
                    Explore products easily and get instant quotes. View all
                    categories.
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  Explore all categories
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto"
          >
            <h1 className="text-3xl font-bold mb-4">
              Empowering the Global Food Value Chain
            </h1>
            <p className="text-gray-500">
              By Providing unprecedented efficiency in procurement
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
          >
            <div className="relative md:w-5/12">
              <img className="rounded-2xl" src="img/Rectangle-19.png" alt="" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/3 px-6 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    For Manufacturers & Food Processors
                  </h1>
                  <p className="text-white text-sm mb-4">
                    Hectar offers the quickest solution available to discover
                    everyday prices and shortest transit for Agri Commodities
                    purchases. This allows our customers to forecast orders
                    easily and never again be bottlenecked by input materials.{" "}
                  </p>
                  <button
                    className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                    style={{ background: "rgba(35, 189, 238, 0.9)" }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="relative md:w-5/12">
              <img className="rounded-2xl" src="img/Rectangle-21.png" alt="" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 px-6">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    For Retailers & Wholesalers
                  </h1>
                  <p className="text-white text-sm mb-4">
                    We provide our customers with the ability to customize
                    packaging at source, creating deep value and cost cutting.
                    And with an integrated fulfilment process, we provide full
                    traceability of the products and its freshness.
                  </p>
                  <button
                    className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                    style={{ background: "rgba(35, 189, 238, 0.9)" }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center sm:space-x-8 mt-36">
          <div data-aos="fade-right" className="sm:w-1/2 relative">
            <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse" />
            <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
              Source{" "}
              <span className="text-yellow-500">
                food and agricultural products
              </span>{" "}
              efficiently
            </h1>
            <p className="py-5 lg:pr-32">
              We develop and manage efficient supply chains for acquiring food
              and agricultural products from various origins.
            </p>
            <a href="" className="underline">
              Learn More
            </a>
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
            <div
              style={{ background: "#23BDEE" }}
              className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
            />
            <img
              className="rounded-xl z-40 relative"
              src="img/teacher-explaining.png"
              alt=""
            />
            <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
              <svg
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="#23BDEE"
                />
              </svg>
            </button>
            <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
          </div>
        </div>
        <div className="md:flex mt-40 md:space-x-10 items-start">
          <div data-aos="fade-down" className="md:w-7/12 relative">
            <div
              style={{ background: "#33EFA0" }}
              className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
            />
            <div
              style={{ background: "#33D9EF" }}
              className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
            />
            <img
              className="relative z-50 floating"
              src="img/vcall.png"
              alt=""
            />
            <div
              style={{ background: "#5B61EB" }}
              className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
            ></div>
            <div
              style={{ background: "#F56666" }}
              className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
            ></div>
          </div>
          <div
            data-aos="fade-down"
            className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
          >
            <h1 className="text-2xl font-semibold text-darken lg:pr-40">
              How <span className="text-yellow-500">Hectar.global </span>
              works?
            </h1>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#2F327D"
                  />
                  <rect
                    y="14.1816"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#2F327D"
                  />
                  <rect
                    x="14.7727"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#2F327D"
                  />
                  <rect
                    x="14.7727"
                    y="14.1816"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#F48C06"
                  />
                </svg>
              </div>
              <p>
                Let us know your quantity requirements, packaging preferences
                and your end destination. Get your personalized quote within
                seconds.
              </p>
            </div>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={8}
                    y={6}
                    width={20}
                    height={20}
                    rx={2}
                    fill="#2F327D"
                  />
                  <rect
                    width="21.2245"
                    height="21.2245"
                    rx={2}
                    fill="#F48C06"
                  />
                </svg>
              </div>
              <p>
                Access photos/videos from loading, inspection certificates,
                shipment documents from a single dashboard.
              </p>
            </div>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
                    fill="#2F327D"
                  />
                </svg>
              </div>
              <p>
                Sit back and live track your orders online, get immediate
                notifications when a shipment passes a milestone.
              </p>
            </div>
          </div>
        </div>

        {/* Assessments, Quizzes, Tests */}
        <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
          <div data-aos="fade-right" className="md:w-6/12">
            <img className="md:w-11/12" src="img/true-false.png" />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-6/12 md:transform md:-translate-y-20"
          >
            <h1 className="font-semibold text-darken text-3xl lg:pr-64">
              Get <span className="text-yellow-500">Realtime</span> updates
            </h1>
            <p className="text-gray-500 my-5 lg:pr-52">
              Easily get live tracking and real time update once your product is
              shipped.
            </p>
          </div>
        </div>
        {/* Class Management Tools for Educators */}
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div data-aos="fade-right" className="md:w-5/12">
            <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
              Access all{" "}
              <span className="text-yellow-500">Shipment Documents</span> from a
              Single Dashboard
            </h1>
            <p className="my-5 lg:pr-14">
              We are making the Export documentation clutter free - Access
              photos/videos from loading, inspection certificates, shipment
              documents from a single dashboard.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="md:w-7/12"
            src="img/gradebook.png"
          />
        </div>
        {/* One-on-One Discussions */}
        <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
          <div data-aos="fade-right" className="md:w-7/12">
            <img className="md:w-11/12" src="img/discussion.png" />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-5/12 md:transform md:-translate-y-6"
          >
            <h1 className="font-semibold text-darken text-3xl lg:pr-64">
              Talk to <span className="text-yellow-500">Agents</span>
            </h1>
            <p className="text-gray-500 my-5 lg:pr-24">
              Talk to Hectar agents for any queries, We are available 24/7 to
              help you procure the right products at the best prices.
            </p>
          </div>
        </div>
        <button
          data-aos="flip-up"
          className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
        >
          See more features
        </button>
        {/* INTEGRATIONS */}
        <div className="mt-24 flex flex-col md:flex-row items-start md:space-x-10">
          <div data-aos="zoom-in-right" className="md:w-6/12">
            <img className="md:w-8/12 mx-auto" src="img/integrations.png" />
          </div>
          <div data-aos="zoom-in-left" className="md:w-6/12">
            <div className="flex items-center space-x-20 mb-5">
              <span className="border border-gray-300 w-14 absolute" />
              <h1 className="text-gray-400 tracking-widest text-sm">
                www.hectar.global
              </h1>
            </div>
            <h1 className="font-semibold text-darken text-2xl lg:pr-40">
              200+ product variants to choose from
              <span className="text-yellow-500">, click link below</span> to
              explore
            </h1>
            <p className="text-gray-500 my-5 lg:pr-20">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <button className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
              See All Products
            </button>
          </div>
        </div>
        {/* TESTIMONIAL */}
        <div className="mt-24 flex flex-col-reverse md:flex-row items-start md:space-x-10">
          <div data-aos="zoom-in-right" className="md:w-5/12">
            <div className="flex items-center space-x-20 mb-5">
              <span className="border border-gray-300 w-14 absolute" />
              <h1 className="text-gray-400 tracking-widest text-sm">
                TESTIMONIAL
              </h1>
            </div>
            <h1 className="font-semibold text-darken text-2xl lg:pr-40">
              What They Say?
            </h1>
            <p className="text-gray-500 my-5 lg:pr-36">
              Hectar has processed more than 100k order since 2010 around the
              world.
            </p>
            <p className="text-gray-500 my-5 lg:pr-36">
              Some of the Manufacturers &amp; retailers were greatly helped by
              the Hectar.
            </p>
            <p className="text-gray-500 my-5 lg:pr-36">
              Contact us to learn more
            </p>
            <button className="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
              <span>Contact Hectar</span>
              <div className="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#F48C06"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div data-aos="zoom-in-left" className="md:w-7/12">
            <img className="md:w-10/12 mx-auto" src="img/testimonials.png" />
          </div>
        </div>
        {/* Latest News and Resources */}
        <div data-aos="zoom-in" className="mt-16 text-center">
          <h1 className="text-darken text-2xl font-semibold">
            Latest News and Resources
          </h1>
          <p className="text-gray-500 my-5">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="my-14 flex flex-col lg:flex-row lg:space-x-20"
        >
          <div className="lg:w-6/12">
            <img className="w-full mb-6" src="img/laptop-news.png" />
            <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">
              NEWS
            </span>
            <h1 className="text-gray-800 font-semibold my-3 text-xl">
              Hectar adds $30 million to its balance sheet for a
              Customer-friendly Agritech marketplace &amp; solutions
            </h1>
            <p className="text-gray-500 mb-3">
              Hectar, launched less than a year ago by Srinath Srinivasan has
              raised $30 million to...
            </p>
            <a href="" className="underline">
              Read more
            </a>
          </div>
          <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img
                    className="rounded-xl w-full"
                    src="img/children-laptop.png"
                  />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    PRESS RELEASE
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  Centum Technologies Pte. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                  Centum Technologies Pte, the company that,...
                </p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img
                    className="rounded-xl w-full"
                    src="img/girl-laptop.png"
                  />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    Resources
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  How Hectar helped retailer from Singapore to pick the right
                  Red Chilli variant
                </h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                  How Hectar helped retailer from Singapore to pick the right
                  variant...
                </p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img className="rounded-xl w-full" src="img/cat-laptop.png" />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    Resources
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  Learn all about Rice quality and variants from India.
                </h1>
                <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
                  Learn all about Rice quality and variants from India....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="mt-32"
        style={{ backgroundColor: "rgba(37, 38, 65, 1)" }}
      >
        <div className="max-w-lg mx-auto">
          <div className="flex py-12 justify-center text-white items-center px-20 sm:px-36">
            <div className="relative">
              <h1 className="font-bold text-xl pr-5 relative z-50">Hectar</h1>
              <svg
                className="w-11 h-11 absolute -top-2 -left-3 z-40"
                viewBox="0 0 79 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.9645 2.94975C37.9171 0.997129 41.0829 0.997127 43.0355 2.94975L76.0502 35.9645C78.0029 37.9171 78.0029 41.0829 76.0503 43.0355L43.0355 76.0502C41.0829 78.0029 37.9171 78.0029 35.9645 76.0503L2.94975 43.0355C0.997129 41.0829 0.997127 37.9171 2.94975 35.9645L35.9645 2.94975Z"
                  stroke="#26C1F2"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <span className="border-l border-gray-500 text-sm pl-5 py-2 font-semibold">
              Let's rethink the global food supply chain
            </span>
          </div>
          <div className="text-center pb-16 pt-5">
            <label className="text-gray-300 font-semibold">
              Can't find what you are looking for? <br />
              Drop in your email and we will get in touch with you.
            </label>
            <div className="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3">
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-full py-2 pl-5 bg-transparent border border-gray-400"
              />
              <button
                type="submit"
                className="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm justify-center">
            <a href="" className="pr-3">
              Careers
            </a>
            <a href="" className="border-l border-gray-400 px-3">
              Privacy
            </a>
            <a href="" className="border-l border-gray-400 pl-3">
              Terms &amp; Conditions
            </a>
          </div>
          <div className="text-center text-white">
            <p className="my-3 text-gray-400 text-sm">
              © 2022 www.hectar.global
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
