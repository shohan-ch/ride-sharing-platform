import Link from "next/link";
import TripItinerary from "./TripItinerary";
import Router from "next/router";
import DriverAvatar from "@/components/TripHistory/Upcoming/DriverAvatar";

const AcceptByRiderView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-[80vh]">
            <div className="relative md:hidden lg:rounded-t-3xl">
              <div className="h-[300px] overflow-hidden xl:h-[300px] 3xl:h-[400px]">
                <img
                  src="./assets/images/icons/Group 200.jpg"
                  className="w-full dark:hidden lg:rounded-t-3xl"
                  alt=""
                />
                <img
                  src="./assets/images/icons/Group 201.png"
                  className="hidden w-full dark:block lg:rounded-t-3xl"
                  alt=""
                />
              </div>

              <a
                className="absolute top-[30px] left-5 z-50"
                href="./confirm_ride.html"
              >
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
              <div className="absolute bottom-28 right-4 z-50 flex flex-col gap-4">
                <div className="drop-shadow-xl">
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={36}
                      height={36}
                      rx={6}
                      fill="#FFFEFD"
                      className="dark:fill-black"
                    />
                    <path
                      className="dark:fill-white"
                      d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                      fill="#29225E"
                    />
                    <path
                      className="dark:fill-white"
                      d="M19 10.069V8H17V10.069C15.2403 10.2937 13.605 11.0962 12.3506 12.3506C11.0962 13.605 10.2937 15.2403 10.069 17H8V19H10.069C10.2934 20.7598 11.0957 22.3953 12.3502 23.6498C13.6047 24.9043 15.2402 25.7066 17 25.931V28H19V25.931C20.7599 25.7068 22.3955 24.9045 23.65 23.65C24.9045 22.3955 25.7068 20.7599 25.931 19H28V17H25.931C25.7066 15.2402 24.9043 13.6047 23.6498 12.3502C22.3953 11.0957 20.7598 10.2934 19 10.069V10.069ZM18 24C14.691 24 12 21.309 12 18C12 14.691 14.691 12 18 12C21.309 12 24 14.691 24 18C24 21.309 21.309 24 18 24Z"
                      fill="#29225E"
                    />
                  </svg>
                </div>
                <div className="drop-shadow-xl">
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={36}
                      height={36}
                      rx={6}
                      fill="#FCFCFC"
                      className="dark:fill-black"
                    />
                    <path
                      className="dark:fill-white"
                      d="M19.0203 25.9298V27.9498C21.0303 27.7498 22.8603 26.9498 24.3403 25.7398L22.9203 24.3098C21.7903 25.1919 20.4427 25.7517 19.0203 25.9298V25.9298ZM10.0303 17.9998C10.0303 13.9498 13.0603 10.5898 16.9803 10.0698V8.0498C11.9503 8.5798 8.03027 12.8398 8.03027 17.9998C8.03027 23.1598 11.9503 27.4198 16.9803 27.9498V25.9298C13.0603 25.4098 10.0303 22.0498 10.0303 17.9998V17.9998ZM25.9503 16.9998H27.9703C27.7703 14.9898 26.9703 13.1598 25.7603 11.6798L24.3303 13.1098C25.1903 14.2098 25.7703 15.5398 25.9503 16.9998ZM24.3403 10.2598C22.8227 9.01627 20.9723 8.24758 19.0203 8.0498V10.0698C20.4803 10.2498 21.8103 10.8298 22.9203 11.6898L24.3403 10.2598V10.2598ZM24.3303 22.8998L25.7603 24.3198C27.0055 22.8032 27.7744 20.9523 27.9703 18.9998H25.9503C25.7722 20.4222 25.2124 21.7699 24.3303 22.8998Z"
                      fill="#BB3069"
                    />
                    <path
                      className="dark:fill-white"
                      d="M21.9998 17.1C21.9998 14.61 20.0998 13 17.9998 13C15.8998 13 13.9998 14.61 13.9998 17.1C13.9998 18.76 15.3298 20.73 17.9998 23C20.6698 20.73 21.9998 18.76 21.9998 17.1ZM17.9998 18C17.724 17.9881 17.4635 17.8701 17.2726 17.6708C17.0817 17.4714 16.9751 17.206 16.9751 16.93C16.9751 16.654 17.0817 16.3886 17.2726 16.1892C17.4635 15.9899 17.724 15.8719 17.9998 15.86C18.2756 15.8719 18.5361 15.9899 18.727 16.1892C18.918 16.3886 19.0245 16.654 19.0245 16.93C19.0245 17.206 18.918 17.4714 18.727 17.6708C18.5361 17.8701 18.2756 17.9881 17.9998 18V18Z"
                      fill="#BB3069"
                    />
                  </svg>
                </div>
                <div className="drop-shadow-xl">
                  <a href="./safety_toolkit.html">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={36}
                        height={36}
                        rx={6}
                        fill="#FCFCFC"
                        className="dark:fill-black"
                      />
                      <g clipPath="url(#clip0_2427_56292)">
                        <path
                          className="dark:fill-white"
                          d="M24.0004 15.75C23.4292 15.7527 22.865 15.6244 22.3512 15.3748C21.8374 15.1253 21.3876 14.7613 21.0365 14.3107C20.6855 13.8602 20.4424 13.3351 20.326 12.7759C20.2097 12.2167 20.2231 11.6382 20.3654 11.085C19.6452 10.7373 18.9457 10.3483 18.2704 9.92L18.0004 9.75L17.7304 9.925C16.7594 10.5367 15.7431 11.0733 14.6904 11.53C13.6185 12.0082 12.5099 12.3995 11.3754 12.7L11.0004 12.795V16.965C11.0004 23.66 17.7654 26.165 17.8304 26.19L18.0004 26.25L18.1704 26.19C18.2404 26.19 25.0004 23.665 25.0004 16.965V15.61C24.6749 15.7016 24.3385 15.7487 24.0004 15.75V15.75Z"
                          fill="#4DAA6C"
                        />
                        <path
                          className="dark:fill-white"
                          d="M23.9998 14.5C25.3805 14.5 26.4998 13.3807 26.4998 12C26.4998 10.6193 25.3805 9.5 23.9998 9.5C22.6191 9.5 21.4998 10.6193 21.4998 12C21.4998 13.3807 22.6191 14.5 23.9998 14.5Z"
                          fill="#4DAA6C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2427_56292">
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(9 9)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute left-0 right-0 bottom-10 z-50 mx-auto flex w-[90%] justify-between rounded-lg bg-bg-color px-5 py-3 drop-shadow-lg dark:bg-dark-bg">
                <div className="flex items-center gap-2">
                  <svg
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2427_56312)">
                      <path
                        className="dark:fill-white"
                        d="M8.99977 3.85938C8.43312 3.85938 7.87921 4.0274 7.40806 4.34221C6.93691 4.65702 6.5697 5.10448 6.35285 5.62799C6.13601 6.1515 6.07927 6.72755 6.18982 7.28331C6.30036 7.83906 6.57323 8.34956 6.97391 8.75024C7.37458 9.15091 7.88508 9.42378 8.44083 9.53433C8.99659 9.64487 9.57264 9.58814 10.0962 9.37129C10.6197 9.15445 11.0671 8.78723 11.3819 8.31608C11.6967 7.84494 11.8648 7.29102 11.8648 6.72438C11.8648 5.96453 11.5629 5.23581 11.0256 4.69851C10.4883 4.16122 9.75961 3.85938 8.99977 3.85938ZM8.99977 8.58938C8.6309 8.58938 8.27033 8.48 7.96363 8.27507C7.65693 8.07014 7.41789 7.77886 7.27673 7.43808C7.13557 7.0973 7.09864 6.72231 7.1706 6.36053C7.24256 5.99876 7.42019 5.66645 7.68101 5.40562C7.94184 5.1448 8.27415 4.96717 8.63592 4.89521C8.9977 4.82325 9.37269 4.86018 9.71347 5.00134C10.0543 5.1425 10.3455 5.38154 10.5505 5.68824C10.7554 5.99493 10.8648 6.35551 10.8648 6.72438C10.8634 7.21814 10.6664 7.69122 10.3168 8.0399C9.96714 8.38857 9.49353 8.58438 8.99977 8.58438V8.58938Z"
                        fill="#29225E"
                      />
                      <path
                        className="dark:fill-white"
                        d="M14.8853 7.24467C14.546 7.23524 14.2096 7.17973 13.8853 7.07967V7.36467C13.8853 9.39467 12.6753 11.1997 11.7903 12.5197L11.6103 12.7847C10.7503 14.0747 9.6103 15.5197 8.9953 16.2347C8.4053 15.5197 7.2403 14.0747 6.3803 12.7847L6.2103 12.4997C5.3253 11.1797 4.1103 9.37467 4.1103 7.34467C4.11334 6.50392 4.33331 5.67819 4.74894 4.94736C5.16457 4.21653 5.76179 3.60534 6.48282 3.17292C7.20385 2.74051 8.02427 2.5015 8.86473 2.47903C9.70518 2.45657 10.5372 2.65139 11.2803 3.04467C11.3201 2.70087 11.4076 2.3643 11.5403 2.04467C10.6424 1.61101 9.64893 1.41302 8.6534 1.46934C7.65786 1.52566 6.69304 1.83444 5.84979 2.36659C5.00655 2.89875 4.31262 3.63678 3.83335 4.51117C3.35409 5.38557 3.10526 6.36755 3.1103 7.36467C3.1103 9.69967 4.4203 11.6547 5.3803 13.0797L5.5553 13.3397C6.51044 14.724 7.53509 16.059 8.6253 17.3397L9.0053 17.7847L9.3853 17.3397C10.4754 16.0589 11.5 14.7239 12.4553 13.3397L12.6303 13.0747C13.5853 11.6497 14.8953 9.69967 14.8953 7.36467C14.8903 7.32467 14.8853 7.28467 14.8853 7.24467Z"
                        fill="#29225E"
                      />
                      <path
                        className="dark:fill-white"
                        d="M15.0002 6C16.381 6 17.5002 4.88071 17.5002 3.5C17.5002 2.11929 16.381 1 15.0002 1C13.6195 1 12.5002 2.11929 12.5002 3.5C12.5002 4.88071 13.6195 6 15.0002 6Z"
                        fill="#29225E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2427_56312">
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[13px] font-[450] text-black dark:text-gray-1">
                    Share with James
                  </p>
                </div>
                <p className="text-[13px] font-bold text-black dark:text-gray-1">
                  Share
                </p>
              </div>
            </div>
            <div className="relative -mt-6 rounded-3xl bg-bg-color py-2 dark:bg-dark-bg sm:mt-2">
              {/* <div className="absolute flex items-center px-5 mb-12 top-7">
                <Link href="/request_ride/con">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
              </div> */}

              <div className="mb-[15px] flex items-center  border-b-[1px] border-gray-2 px-5 pb-6">
                <div className="rounded-2xl bg-[#29225E] px-5 py-2 text-center text-white">
                  <h2 className="text-[20px] font-bold">8</h2>
                  <p className="text-[13px] font-[450] md:font-medium">min</p>
                </div>
                {/* <a href="./rider_accepted_driver.html"> */}
                <div className="ml-4 w-full">
                  <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    Driver is on their way
                  </h2>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <svg
                        width={4}
                        height={5}
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="dark:fill-white"
                          cx={2}
                          cy="2.5"
                          r={2}
                          fill="#1A1A1A"
                        />
                      </svg>
                      <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                        Drop-off by
                        <span className="font-bold text-black dark:text-gray-1">
                          12:56pm
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div>
                <div className=" overflow-y-auto overflow-x-hidden rounded-3xl lg:h-[200px] xl:h-[50vh] 3xl:h-[65vh]">
                  <div
                    onClick={() => Router.push("/request_ride/start_ride")}
                    className="mx-5 mt-6 mb-7 flex cursor-pointer items-center gap-4 rounded-3xl bg-gray-1 p-4 dark:bg-dark-2"
                  >
                    <img
                      src="/assets/images/request_ride/vehicles/image 136.png"
                      className="h-9 w-[80px]"
                      alt=""
                    />

                    <div>
                      <h3 className="mb-1 text-[14px] font-bold dark:text-gray-2">
                        215 BG2
                      </h3>
                      <p className="text-[12px] text-gray-light dark:text-gray-2">
                        Black Toyota Camry Hybrid
                      </p>
                    </div>
                  </div>

                  <div className="px-4">
                    <DriverAvatar />
                  </div>

                  {/* Input Setion  Start*/}
                  <div className="relative mx-auto mb-[85px] mt-6 px-5">
                    <input
                      onClick={() => Router.push("/request_ride/message")}
                      autofocus
                      type="text"
                      id="simple-search"
                      className="h-[50px] w-full rounded bg-gray-2 px-10 pl-10 text-[16px] text-[#474747] placeholder:text-[#474747] focus:outline-none focus:ring focus:ring-[#29225E] dark:bg-dark-2 dark:text-gray-1 placeholder:dark:text-gray-1 md:text-[18px]"
                      placeholder="Leave a pick-up note"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-9">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.22366 1.05281C2.13996 1.01095 2.04619 0.993419 1.95302 1.00221C1.85985 1.01101 1.77102 1.04577 1.69663 1.10255C1.62224 1.15934 1.56528 1.23586 1.53222 1.32341C1.49917 1.41096 1.49135 1.50604 1.50966 1.59781L2.91266 6.44781C2.93882 6.5382 2.98995 6.61936 3.06018 6.68198C3.13041 6.74461 3.21688 6.78614 3.30966 6.80181L8.99966 7.75481C9.26766 7.80781 9.26766 8.19181 8.99966 8.24481L3.30966 9.19781C3.21688 9.21349 3.13041 9.25502 3.06018 9.31764C2.98995 9.38026 2.93882 9.46143 2.91266 9.55181L1.50966 14.4018C1.49135 14.4936 1.49917 14.5887 1.53222 14.6762C1.56528 14.7638 1.62224 14.8403 1.69663 14.8971C1.77102 14.9539 1.85985 14.9886 1.95302 14.9974C2.04619 15.0062 2.13996 14.9887 2.22366 14.9468L15.2237 8.44681C15.3066 8.40524 15.3763 8.34142 15.4251 8.26248C15.4738 8.18353 15.4996 8.09259 15.4996 7.99981C15.4996 7.90704 15.4738 7.81609 15.4251 7.73715C15.3763 7.65821 15.3066 7.59438 15.2237 7.55281L2.22366 1.05281Z"
                          fill="#5C5C5C"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Input Section End  */}
                  {/* Trip Itinerary start */}

                  <TripItinerary />

                  {/* Trip Itinerary end */}
                  <div>
                    <div>
                      <div className="relative flex items-center justify-between border-t-[1px] border-[#F6F6F6] bg-bg-color py-2 px-5 pt-4 dark:bg-[#2C2C35]">
                        <div className="flex items-center gap-4">
                          <div>
                            <svg
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="dark:fill-white"
                                d="M17.1002 14.1673C16.3668 13.984 15.6335 13.6173 15.0835 13.0673C14.5335 12.884 14.3502 12.334 14.3502 11.9673C14.3502 11.6007 14.5335 11.0507 14.9002 10.8673C15.4502 10.5007 16.0002 10.134 16.5502 10.3173C17.6502 10.3173 18.5668 10.8673 19.1168 11.6007L20.7668 9.40065C20.2168 8.85065 19.6668 8.48398 19.1168 8.11732C18.5668 7.75065 17.8335 7.56732 17.1002 7.56732V5.00065H14.9002V7.56732C13.9835 7.75065 13.0668 8.30065 12.3335 9.03398C11.6002 9.95065 11.0502 11.0507 11.2335 12.1507C11.2335 13.2507 11.6002 14.3507 12.3335 15.084C13.2502 16.0007 14.5335 16.5507 15.6335 17.1007C16.1835 17.284 16.9168 17.6507 17.4668 18.0173C17.8335 18.384 18.0168 18.934 18.0168 19.484C18.0168 20.034 17.8335 20.584 17.4668 21.134C16.9168 21.684 16.1835 21.8673 15.6335 21.8673C14.9002 21.8673 13.9835 21.684 13.4335 21.134C12.8835 20.7673 12.3335 20.2173 11.9668 19.6673L10.1335 21.684C10.6835 22.4173 11.2335 22.9673 11.9668 23.5173C12.8835 24.0673 13.9835 24.6173 15.0835 24.6173V27.0007H17.1002V24.2507C18.2002 24.0673 19.1168 23.5173 19.8502 22.784C20.7668 21.8673 21.3168 20.4007 21.3168 19.1173C21.3168 18.0173 20.9502 16.734 20.0335 16.0007C19.1168 15.084 18.2002 14.534 17.1002 14.1673V14.1673ZM16.0002 1.33398C7.9335 1.33398 1.3335 7.93398 1.3335 16.0007C1.3335 24.0673 7.9335 30.6673 16.0002 30.6673C24.0668 30.6673 30.6668 24.0673 30.6668 16.0007C30.6668 7.93398 24.0668 1.33398 16.0002 1.33398ZM16.0002 28.6507C9.0335 28.6507 3.35016 22.9673 3.35016 16.0007C3.35016 9.03398 9.0335 3.35065 16.0002 3.35065C22.9668 3.35065 28.6502 9.03398 28.6502 16.0007C28.6502 22.9673 22.9668 28.6507 16.0002 28.6507V28.6507Z"
                                fill="#1A1A1A"
                                stroke="black"
                                strokeWidth="0.266667"
                              />
                            </svg>
                          </div>
                          <div className="dark:text-white">
                            <h2 className="font-bold md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                              USD$29.54
                            </h2>
                            <p className="text-[#5C5C5C] dark:text-gray-1">
                              Personal Paypal
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2 className="font-bold text-[#29225E] dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                            Switch
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative mb-[150px] flex items-center justify-between border-t-[1px] border-[#F6F6F6] bg-bg-color py-2 px-5 pt-4 dark:bg-[#2C2C35]">
                        <div className="flex items-center gap-4">
                          <div>
                            <svg
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="dark:fill-white"
                                d="M17.5007 27.7181V30.6956C20.4575 30.4008 23.1496 29.2216 25.3268 27.438L23.2379 25.3301C21.5756 26.6304 19.5931 27.4556 17.5007 27.7181V27.7181ZM4.27566 16.029C4.27566 10.0591 8.73303 5.10636 14.4997 4.33986V1.3623C7.10013 2.14354 1.3335 8.42294 1.3335 16.029C1.3335 23.635 7.10013 29.9144 14.4997 30.6956V27.7181C8.73303 26.9516 4.27566 21.9988 4.27566 16.029V16.029ZM27.6953 14.5549H30.6668C30.3726 11.5921 29.1958 8.89463 27.4157 6.71306L25.3121 8.82093C26.5772 10.4424 27.4305 12.4028 27.6953 14.5549ZM25.3268 4.61993C23.0943 2.7869 20.3722 1.65383 17.5007 1.3623V4.33986C19.6484 4.60519 21.605 5.46013 23.2379 6.7278L25.3268 4.61993V4.61993ZM25.3121 23.2518L27.4157 25.3449C29.2475 23.1094 30.3786 20.381 30.6668 17.503H27.6953C27.4333 19.5997 26.6098 21.5862 25.3121 23.2518Z"
                                fill="#1A1A1A"
                              />
                              <path
                                className="dark:fill-white"
                                d="M21.3332 14.7997C21.3332 11.4797 18.7998 9.33301 15.9998 9.33301C13.1998 9.33301 10.6665 11.4797 10.6665 14.7997C10.6665 17.013 12.4398 19.6397 15.9998 22.6663C19.5598 19.6397 21.3332 17.013 21.3332 14.7997ZM15.9998 15.9997C15.6321 15.9838 15.2848 15.8265 15.0302 15.5607C14.7756 15.2949 14.6335 14.9411 14.6335 14.573C14.6335 14.205 14.7756 13.8511 15.0302 13.5853C15.2848 13.3195 15.6321 13.1622 15.9998 13.1463C16.3675 13.1622 16.7149 13.3195 16.9695 13.5853C17.224 13.8511 17.3661 14.205 17.3661 14.573C17.3661 14.9411 17.224 15.2949 16.9695 15.5607C16.7149 15.8265 16.3675 15.9838 15.9998 15.9997V15.9997Z"
                                fill="#1A1A1A"
                              />
                            </svg>
                          </div>
                          <div className="dark:text-white">
                            <h2 className="font-bold md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                              Share trip status
                            </h2>
                          </div>
                        </div>
                        <div>
                          <h2
                            onClick={() =>
                              Router.push("/request_ride/sharetrip_contact")
                            }
                            className="cursor-pointer font-bold hover:text-primary dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]"
                          >
                            Share
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex w-full gap-3 rounded-3xl p-5 2xs:fixed  2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
            <button
              onClick={() => Router.push("/request_ride/cancel_ride")}
              className="rounded-5 shadow-one dark:shadow-dark mx-auto flex w-full items-center justify-center rounded-md border-2 border-transparent bg-primary-500 px-4 py-4 text-[14px] text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 lg:bottom-[22px] 2xs:bottom-[8px]"
            >
              Cancel Ride
            </button>
            <button
              onClick={() => Router.push("/request_ride/safety_toolkit")}
              className="w-full rounded border-[1px] border-[#EAEAEA] bg-white px-[auto] py-[13px] text-[14px] font-bold text-[#1A1A1A] hover:bg-gray-3 dark:border-[#383838] dark:bg-[#383838] dark:text-white dark:hover:bg-dark-bg md:py-[17px]"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_829_16580)">
                    <path
                      d="M13.3339 5.99935C12.8262 6.00175 12.3246 5.88767 11.8679 5.66588C11.4112 5.44409 11.0114 5.1205 10.6994 4.72C10.3873 4.3195 10.1712 3.85276 10.0678 3.35568C9.96438 2.8586 9.97634 2.34442 10.1028 1.85268C9.46264 1.54357 8.84087 1.19782 8.24054 0.817127L8.00054 0.666016L7.76054 0.821571C6.8975 1.36534 5.99413 1.84229 5.05832 2.24824C4.10556 2.67332 3.12016 3.02111 2.11165 3.28824L1.77832 3.37268V7.07935C1.77832 13.0305 7.79165 15.2571 7.84943 15.2793L8.00054 15.3327L8.15165 15.2793C8.21388 15.2793 14.2228 13.0349 14.2228 7.07935V5.8749C13.9334 5.95632 13.6344 5.99819 13.3339 5.99935Z"
                      fill="#4DAA6C"
                    />
                    <path
                      d="M13.3336 4.88878C14.5608 4.88878 15.5558 3.89386 15.5558 2.66656C15.5558 1.43926 14.5608 0.444336 13.3336 0.444336C12.1063 0.444336 11.1113 1.43926 11.1113 2.66656C11.1113 3.89386 12.1063 4.88878 13.3336 4.88878Z"
                      fill="#4DAA6C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_829_16580">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Safety Toolkit</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcceptByRiderView;
