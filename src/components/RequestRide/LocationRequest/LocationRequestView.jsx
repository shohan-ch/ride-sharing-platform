import LocationList from "@/components/Utils/List/LocationList";

const LocationRequestView = () => {
  const locationData = [
    {
      location: "Pier 39",
      street: "781 mcdonald Rd, San Francisco",
      symbol: "star",
    },
    {
      location: "Fairmont San Monte Carlo",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
  ];
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 pt-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-2 sm:pt-0 sm:text-left lg:h-[350px] lg:rounded-3xl lg:pt-0 xl:h-[550px] 2xl:h-[400px] 3xl:h-[650px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="bg-gray-1 px-5 pt-2 pb-[25px] dark:bg-dark-2 md:pb-10">
              <div className="mb-8 flex items-center">
                <a href="./home.html">
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={36} height={36} rx={4} fill="#FFFEFD" />
                    <path
                      d="M25 17.0003H13.14L16.77 12.6403C16.9397 12.4361 17.0214 12.1728 16.997 11.9084C16.9726 11.6439 16.8442 11.4 16.64 11.2303C16.4358 11.0605 16.1725 10.9789 15.9081 11.0033C15.6436 11.0276 15.3997 11.1561 15.23 11.3603L10.23 17.3603C10.1964 17.408 10.1663 17.4581 10.14 17.5103C10.14 17.5603 10.14 17.5903 10.07 17.6403C10.0247 17.7549 10.0009 17.877 10 18.0003C10.0009 18.1236 10.0247 18.2456 10.07 18.3603C10.07 18.4103 10.07 18.4403 10.14 18.4903C10.1663 18.5424 10.1964 18.5926 10.23 18.6403L15.23 24.6403C15.324 24.7532 15.4418 24.8439 15.5748 24.9062C15.7079 24.9684 15.8531 25.0005 16 25.0003C16.2337 25.0007 16.4601 24.9194 16.64 24.7703C16.7413 24.6863 16.825 24.5832 16.8863 24.4669C16.9477 24.3505 16.9855 24.2232 16.9975 24.0922C17.0096 23.9613 16.9957 23.8292 16.9567 23.7036C16.9176 23.578 16.8542 23.4613 16.77 23.3603L13.14 19.0003H25C25.2652 19.0003 25.5196 18.8949 25.7071 18.7074C25.8946 18.5198 26 18.2655 26 18.0003C26 17.7351 25.8946 17.4807 25.7071 17.2932C25.5196 17.1056 25.2652 17.0003 25 17.0003Z"
                      fill="#29225E"
                    />
                  </svg>
                </a>
                <h2 className="ml-[70px] font-extrabold text-black dark:text-white lg:ml-[100px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Request Now
                </h2>
              </div>
              {/* Input Setion  Start*/}
              <div className="flex w-full items-center justify-between gap-2">
                <div className="w-full">
                  <div className="relative mx-auto mb-[15px] focus:ring focus:ring-gray-1 focus:ring-offset-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                      <svg
                        className="fill-primary-500 dark:fill-white"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z" />
                      </svg>
                    </div>
                    <input
                      autofocus=""
                      type="text"
                      id="simple-search"
                      className="h-[50px] w-full rounded px-10 text-[16px] text-[#1A1A1A] focus:outline-none focus:ring focus:ring-[#29225E] focus:ring-offset-4 dark:bg-[#202028] dark:text-gray-1 md:text-[18px]"
                      placeholder="Current Location"
                      required=""
                    />
                  </div>
                  <div className="relative mx-auto mb-[15px] focus:ring focus:ring-gray-1 focus:ring-offset-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                      <svg
                        className="fill-primary-500 dark:fill-white"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z" />
                      </svg>
                    </div>
                    <input
                      autofocus=""
                      type="text"
                      id="simple-search"
                      className="h-[50px] w-full rounded px-10 pl-10 text-[16px] text-[#1A1A1A] focus:outline-none focus:ring focus:ring-[#29225E] focus:ring-offset-4 dark:bg-[#202028] dark:text-gray-1 md:text-[18px]"
                      placeholder="|Destination"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <button onclick="location.href='./add_stop.html'">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy="16.5"
                        r="15.5"
                        fill="#FFFEFD"
                        stroke="#FFFEFD"
                      />
                      <path
                        d="M19.4939 8.99902C22.0439 8.99902 23.4989 10.439 23.4989 12.9965V20.0015C23.4989 22.544 22.0514 23.999 19.5014 23.999H12.4964C9.9389 23.999 8.4989 22.544 8.4989 20.0015V12.9965C8.4989 10.439 9.9389 8.99902 12.4964 8.99902H19.4939ZM15.9914 13.1315C15.6464 13.1315 15.3689 13.409 15.3689 13.754V15.869H13.2464C13.0814 15.869 12.9239 15.9365 12.8039 16.049C12.6914 16.169 12.6239 16.3258 12.6239 16.4915C12.6239 16.8365 12.9014 17.114 13.2464 17.1215H15.3689V19.244C15.3689 19.589 15.6464 19.8665 15.9914 19.8665C16.3364 19.8665 16.6139 19.589 16.6139 19.244V17.1215H18.7439C19.0889 17.114 19.3664 16.8365 19.3664 16.4915C19.3664 16.1465 19.0889 15.869 18.7439 15.869H16.6139V13.754C16.6139 13.409 16.3364 13.1315 15.9914 13.1315Z"
                        fill="#29225E"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Input Section End  */}
            </div>
            <div>
              <div className="flex items-center border-b-4 border-[#F8F8F8] bg-bg-color px-5 py-[10px] dark:border-[#2C2C35] dark:bg-[#202028] md:border-b-8">
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={18} cy="18.7812" r={18} fill="#BB3069" />
                  <path
                    d="M12.75 26.6725H23.25C23.6478 26.6725 24.0294 26.5144 24.3107 26.2331C24.592 25.9518 24.75 25.5703 24.75 25.1725V18.4225C24.7506 18.3238 24.7317 18.2259 24.6943 18.1345C24.657 18.0432 24.602 17.96 24.5325 17.89L18.5325 11.89C18.392 11.7503 18.2019 11.6719 18.0038 11.6719C17.8056 11.6719 17.6155 11.7503 17.475 11.89L11.475 17.89C11.4041 17.9594 11.3478 18.0423 11.3091 18.1337C11.2705 18.2251 11.2504 18.3232 11.25 18.4225V25.1725C11.25 25.5703 11.408 25.9518 11.6893 26.2331C11.9706 26.5144 12.3522 26.6725 12.75 26.6725ZM16.5 25.1725V21.4225H19.5V25.1725H16.5ZM12.75 18.73L18 13.48L23.25 18.73V25.1725H21V21.4225C21 21.0246 20.842 20.6431 20.5607 20.3618C20.2794 20.0805 19.8978 19.9225 19.5 19.9225H16.5C16.1022 19.9225 15.7206 20.0805 15.4393 20.3618C15.158 20.6431 15 21.0246 15 21.4225V25.1725H12.75V18.73Z"
                    fill="white"
                  />
                </svg>
                <div className="ml-4 md:ml-6">
                  <h1 className="mb-1 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-[2px] md:text-[14px]">
                    Home
                  </h1>
                  <p className="text-[12px] text-gray-light dark:text-gray-2 md:text-[14px]">
                    Eleanor Road, 5th Avenue, San Francisco
                  </p>
                </div>
              </div>
              <div className="flex items-center border-b-4 border-[#F8F8F8] bg-bg-color px-5 py-[10px] dark:border-[#2C2C35] dark:bg-[#202028] md:border-b-8">
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={16} cy="16.5" r={16} fill="#BB3069" />
                  <path
                    d="M13.3333 12.4997V11.1663C13.3333 10.7997 13.464 10.4857 13.7253 10.2243C13.9862 9.96345 14.3 9.83301 14.6667 9.83301H17.3333C17.7 9.83301 18.014 9.96345 18.2753 10.2243C18.5362 10.4857 18.6667 10.7997 18.6667 11.1663V12.4997H21.3333C21.7 12.4997 22.014 12.6303 22.2753 12.8917C22.5362 13.1526 22.6667 13.4663 22.6667 13.833V21.1663C22.6667 21.533 22.5362 21.847 22.2753 22.1083C22.014 22.3692 21.7 22.4997 21.3333 22.4997H10.6667C10.3 22.4997 9.98622 22.3692 9.72533 22.1083C9.464 21.847 9.33333 21.533 9.33333 21.1663V13.833C9.33333 13.4663 9.464 13.1526 9.72533 12.8917C9.98622 12.6303 10.3 12.4997 10.6667 12.4997H13.3333ZM14.6667 12.4997H17.3333V11.1663H14.6667V12.4997ZM21.3333 18.4997H18V19.1663C18 19.3552 17.9362 19.5135 17.8087 19.641C17.6807 19.769 17.5222 19.833 17.3333 19.833H14.6667C14.4778 19.833 14.3196 19.769 14.192 19.641C14.064 19.5135 14 19.3552 14 19.1663V18.4997H10.6667V21.1663H21.3333V18.4997ZM15.3333 18.4997H16.6667V17.1663H15.3333V18.4997ZM10.6667 17.1663H14V16.4997C14 16.3108 14.064 16.1523 14.192 16.0243C14.3196 15.8968 14.4778 15.833 14.6667 15.833H17.3333C17.5222 15.833 17.6807 15.8968 17.8087 16.0243C17.9362 16.1523 18 16.3108 18 16.4997V17.1663H21.3333V13.833H10.6667V17.1663Z"
                    fill="white"
                  />
                </svg>
                <div className="ml-4 md:ml-6">
                  <h1 className="mb-1 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-[2px] md:text-[14px]">
                    Office
                  </h1>
                  <p className="text-[12px] text-gray-light dark:text-gray-2 md:text-[14px]">
                    WeWork Headquarters, Miami
                  </p>
                </div>
              </div>
              <div className="flex items-center border-b-4 border-[#F8F8F8] bg-bg-color px-5 py-[10px] dark:border-[#2C2C35] dark:bg-[#202028] md:border-b-8">
                <svg
                  width={36}
                  height={37}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={16} cy="16.5" r={16} fill="#FCF3F7" />
                  <path
                    d="M22.9623 13.2074L18.4992 12.5588L16.5041 8.51407C16.4496 8.40333 16.36 8.31368 16.2492 8.25919C15.9715 8.12208 15.634 8.23633 15.4951 8.51407L13.5 12.5588L9.03693 13.2074C8.91388 13.225 8.80138 13.283 8.71525 13.3709C8.61112 13.4779 8.55374 13.6219 8.55571 13.7712C8.55769 13.9205 8.61886 14.063 8.72579 14.1672L11.9549 17.3154L11.192 21.7609C11.1741 21.8644 11.1856 21.9707 11.225 22.068C11.2645 22.1652 11.3305 22.2494 11.4154 22.3111C11.5003 22.3728 11.6008 22.4094 11.7055 22.4169C11.8101 22.4243 11.9148 22.4023 12.0076 22.3533L15.9996 20.2545L19.9916 22.3533C20.1006 22.4113 20.2272 22.4307 20.3484 22.4096C20.6543 22.3568 20.86 22.0668 20.8072 21.7609L20.0443 17.3154L23.2734 14.1672C23.3613 14.0811 23.4193 13.9686 23.4369 13.8455C23.4844 13.5379 23.2699 13.2531 22.9623 13.2074Z"
                    fill="#BB3069"
                  />
                </svg>
                <div className="ml-4 flex w-full items-center justify-between md:ml-6">
                  <h1 className="mb-1 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-[2px] md:text-[14px]">
                    Saved Places (5)
                  </h1>
                  <div className="ml-5">
                    <svg
                      width={8}
                      height={12}
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 11L6.5 6L1.5 1"
                        className="dark:stroke-[#FFFEFD]"
                        stroke="#5C5C5C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-24 -ml-3">
                {/* Location List */}
                <LocationList locationData={locationData} />
              </div>
            </div>
          </div>
          <div>
            <button
              onclick="location.href='./confirm_pickup_location.html'"
              className="absolute bottom-0 left-0 right-0 mx-auto mt-8 mb-5 flex w-[200px] items-center rounded-[71px]  bg-[#29225E] py-4 px-5 text-[16px] font-bold text-bg-color hover:bg-primary-hover dark:bg-[#493DA8] dark:hover:bg-[#29225E] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              <svg
                width={27}
                height={24}
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7449 4.08479L18.0949 0.259788C17.9177 0.171149 17.7224 0.125 17.5243 0.125C17.3262 0.125 17.1309 0.171149 16.9538 0.259788L9.87495 3.80046L2.79488 0.259788C2.60044 0.162629 2.3844 0.11679 2.16727 0.126624C1.95013 0.136458 1.73912 0.201639 1.55426 0.315975C1.36941 0.430311 1.21685 0.590007 1.11108 0.779895C1.00532 0.969782 0.94985 1.18356 0.949951 1.40091V17.9759C0.949951 18.4591 1.2228 18.9003 1.65503 19.117L9.30503 22.942C9.48216 23.0307 9.67751 23.0768 9.87559 23.0768C10.0737 23.0768 10.269 23.0307 10.4462 22.942L17.525 19.4014L24.605 22.9408C24.7989 23.0388 25.0148 23.0853 25.2319 23.0757C25.4489 23.0661 25.6599 23.0008 25.8443 22.8859C26.2204 22.6526 26.45 22.2433 26.45 21.8009V5.22591C26.45 4.74269 26.1771 4.30154 25.7449 4.08479ZM11.15 6.01386L16.25 3.46386V17.188L11.15 19.738V6.01386ZM3.49995 3.46386L8.59995 6.01386V19.738L3.49995 17.188V3.46386ZM23.9 19.738L18.8 17.188V3.46386L23.9 6.01386V19.738Z"
                  fill="#FFFEFD"
                />
              </svg>
              <span className="ml-4">Choose on map</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationRequestView;
