import TextArea from "@/components/Forms/TextArea";
import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import PositiveRating from "./PositiveRating";
import PoorRating from "./PoorRating";
import Router from "next/router";

const RatingDriverView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div>
            <div className="relative blur-[2px] brightness-75 sm:hidden lg:rounded-t-3xl">
              <div className="h-full overflow-hidden rounded-3xl lg:h-[500px] xl:h-[700px] 2xl:h-[320px] 3xl:h-full">
                <img
                  src="/assets/images/request_ride/Frame 97.jpg"
                  className="w-full rounded-3xl dark:hidden"
                  alt=""
                />
                <img
                  src="/assets/images/request_ride/Frame 97-dark.jpg"
                  className="hidden h-[718px] w-full rounded-3xl dark:block"
                  alt=""
                />
              </div>
              <a
                className="absolute top-[30px] left-5 z-50"
                href="ride_Started.html"
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
            </div>
            <div className="absolute bottom-0 -mt-6 w-full rounded-3xl bg-bg-color py-2 dark:bg-dark-bg sm:mt-2 lg:relative">
              <div className="mb-[15px] h-full overflow-y-auto overflow-x-hidden sm:h-[80vh]">
                <div className="">
                  <img
                    className="mx-auto mb-5 mt-7"
                    src="/assets/rider/driver.png"
                    alt=""
                  />
                  <h2 className="mb-3 px-5 text-center font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    How was your trip with John Smith Knight?
                  </h2>
                  <div className="flex justify-center gap-4 px-5">
                    <div className="flex items-center gap-5 gap-y-2">
                      <div className="flex items-center">
                        <p className="text-[14px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                          22 April
                        </p>
                        <IconSvg name={"verticlaLine"} />
                      </div>
                      <div className="flex items-center">
                        <p className="text-[14px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                          8:20 PM
                        </p>
                        <IconSvg name={"verticlaLine"} />
                      </div>
                      <p className="text-[14px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                        2.5 KM
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center border-b-[1px] border-gray-2 pb-4">
                    <svg
                      width={41}
                      height={40}
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.9718 13.794L26.0538 12.3526L21.6203 3.36427C21.4992 3.11818 21.2999 2.91896 21.0538 2.79787C20.4367 2.49318 19.6867 2.74708 19.3781 3.36427L14.9445 12.3526L5.0265 13.794C4.75306 13.833 4.50306 13.9619 4.31166 14.1572C4.08026 14.3951 3.95275 14.7151 3.95714 15.0469C3.96154 15.3787 4.09748 15.6951 4.3351 15.9268L11.5109 22.9229L9.81556 32.8018C9.77581 33.0316 9.80124 33.2679 9.88897 33.484C9.9767 33.7001 10.1232 33.8873 10.3119 34.0243C10.5006 34.1614 10.724 34.2428 10.9566 34.2594C11.1892 34.276 11.4218 34.2271 11.6281 34.1182L20.4992 29.4541L29.3703 34.1182C29.6124 34.2471 29.8937 34.2901 30.1632 34.2432C30.8429 34.126 31.2999 33.4815 31.1828 32.8018L29.4874 22.9229L36.6632 15.9268C36.8585 15.7354 36.9874 15.4854 37.0265 15.2119C37.132 14.5283 36.6554 13.8955 35.9718 13.794Z"
                        fill="url(#paint0_linear_3241_63157)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3241_63157"
                          x1="20.4991"
                          y1="2.66895"
                          x2="20.4991"
                          y2="34.2626"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width={41}
                      height={40}
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.9718 13.794L26.0538 12.3526L21.6203 3.36427C21.4992 3.11818 21.2999 2.91896 21.0538 2.79787C20.4367 2.49318 19.6867 2.74708 19.3781 3.36427L14.9445 12.3526L5.0265 13.794C4.75306 13.833 4.50306 13.9619 4.31166 14.1572C4.08026 14.3951 3.95275 14.7151 3.95714 15.0469C3.96154 15.3787 4.09748 15.6951 4.3351 15.9268L11.5109 22.9229L9.81556 32.8018C9.77581 33.0316 9.80124 33.2679 9.88897 33.484C9.9767 33.7001 10.1232 33.8873 10.3119 34.0243C10.5006 34.1614 10.724 34.2428 10.9566 34.2594C11.1892 34.276 11.4218 34.2271 11.6281 34.1182L20.4992 29.4541L29.3703 34.1182C29.6124 34.2471 29.8937 34.2901 30.1632 34.2432C30.8429 34.126 31.2999 33.4815 31.1828 32.8018L29.4874 22.9229L36.6632 15.9268C36.8585 15.7354 36.9874 15.4854 37.0265 15.2119C37.132 14.5283 36.6554 13.8955 35.9718 13.794Z"
                        fill="url(#paint0_linear_3241_63157)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3241_63157"
                          x1="20.4991"
                          y1="2.66895"
                          x2="20.4991"
                          y2="34.2626"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href="./rate_driver_poor_rating.html">
                      <svg
                        width={41}
                        height={40}
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.9718 13.794L26.0538 12.3526L21.6203 3.36427C21.4992 3.11818 21.2999 2.91896 21.0538 2.79787C20.4367 2.49318 19.6867 2.74708 19.3781 3.36427L14.9445 12.3526L5.0265 13.794C4.75306 13.833 4.50306 13.9619 4.31166 14.1572C4.08026 14.3951 3.95275 14.7151 3.95714 15.0469C3.96154 15.3787 4.09748 15.6951 4.3351 15.9268L11.5109 22.9229L9.81556 32.8018C9.77581 33.0316 9.80124 33.2679 9.88897 33.484C9.9767 33.7001 10.1232 33.8873 10.3119 34.0243C10.5006 34.1614 10.724 34.2428 10.9566 34.2594C11.1892 34.276 11.4218 34.2271 11.6281 34.1182L20.4992 29.4541L29.3703 34.1182C29.6124 34.2471 29.8937 34.2901 30.1632 34.2432C30.8429 34.126 31.2999 33.4815 31.1828 32.8018L29.4874 22.9229L36.6632 15.9268C36.8585 15.7354 36.9874 15.4854 37.0265 15.2119C37.132 14.5283 36.6554 13.8955 35.9718 13.794Z"
                          fill="url(#paint0_linear_3241_63157)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_3241_63157"
                            x1="20.4991"
                            y1="2.66895"
                            x2="20.4991"
                            y2="34.2626"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE298" />
                            <stop offset={1} stopColor="#FFBB0D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                    <svg
                      width={41}
                      height={40}
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.9718 13.794L26.0538 12.3526L21.6203 3.36427C21.4992 3.11818 21.2999 2.91896 21.0538 2.79787C20.4367 2.49318 19.6867 2.74708 19.3781 3.36427L14.9445 12.3526L5.0265 13.794C4.75306 13.833 4.50306 13.9619 4.31166 14.1572C4.08026 14.3951 3.95275 14.7151 3.95714 15.0469C3.96154 15.3787 4.09748 15.6951 4.3351 15.9268L11.5109 22.9229L9.81556 32.8018C9.77581 33.0316 9.80124 33.2679 9.88897 33.484C9.9767 33.7001 10.1232 33.8873 10.3119 34.0243C10.5006 34.1614 10.724 34.2428 10.9566 34.2594C11.1892 34.276 11.4218 34.2271 11.6281 34.1182L20.4992 29.4541L29.3703 34.1182C29.6124 34.2471 29.8937 34.2901 30.1632 34.2432C30.8429 34.126 31.2999 33.4815 31.1828 32.8018L29.4874 22.9229L36.6632 15.9268C36.8585 15.7354 36.9874 15.4854 37.0265 15.2119C37.132 14.5283 36.6554 13.8955 35.9718 13.794Z"
                        fill="url(#paint0_linear_3241_63157)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3241_63157"
                          x1="20.4991"
                          y1="2.66895"
                          x2="20.4991"
                          y2="34.2626"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width={41}
                      height={40}
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.9718 13.794L26.0538 12.3526L21.6203 3.36427C21.4992 3.11818 21.2999 2.91896 21.0538 2.79787C20.4367 2.49318 19.6867 2.74708 19.3781 3.36427L14.9445 12.3526L5.0265 13.794C4.75306 13.833 4.50306 13.9619 4.31166 14.1572C4.08026 14.3951 3.95275 14.7151 3.95714 15.0469C3.96154 15.3787 4.09748 15.6951 4.3351 15.9268L11.5109 22.9229L9.81556 32.8018C9.77581 33.0316 9.80124 33.2679 9.88897 33.484C9.9767 33.7001 10.1232 33.8873 10.3119 34.0243C10.5006 34.1614 10.724 34.2428 10.9566 34.2594C11.1892 34.276 11.4218 34.2271 11.6281 34.1182L20.4992 29.4541L29.3703 34.1182C29.6124 34.2471 29.8937 34.2901 30.1632 34.2432C30.8429 34.126 31.2999 33.4815 31.1828 32.8018L29.4874 22.9229L36.6632 15.9268C36.8585 15.7354 36.9874 15.4854 37.0265 15.2119C37.132 14.5283 36.6554 13.8955 35.9718 13.794Z"
                        fill="url(#paint0_linear_3241_63157)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3241_63157"
                          x1="20.4991"
                          y1="2.66895"
                          x2="20.4991"
                          y2="34.2626"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE298" />
                          <stop offset={1} stopColor="#FFBB0D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-4">
                    <div className="h-full overflow-y-auto overflow-x-hidden rounded-3xl px-5 lg:h-[200px] 3xl:h-full">
                      {/* <PositiveRating /> */}
                      <PoorRating />

                      <div className="mb-20">
                        <div className="">
                          <TextArea placeholder="Write a pickup note...." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => Router.push("/request_ride")}
                  className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingDriverView;
