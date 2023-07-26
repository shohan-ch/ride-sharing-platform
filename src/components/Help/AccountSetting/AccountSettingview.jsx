import InfoButton from "@/components/Utils/Button/InfoButton";
import Profile from "./Profile";

const AccountSettingview = () => {
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="scroll_div h-full overflow-y-auto overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:text-left md:h-full lg:h-[450px]  xl:h-[600px] 2xl:h-[480px] 3xl:h-[750px] 2xs:pt-0">
            <div className="flex items-center justify-between bg-bg-color pt-2 pb-[25px] pl-5 dark:bg-dark-bg md:pb-10">
              <a href="">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={36} height={36} rx={4} fill="#F8F8F8" />
                  <path
                    d="M25 17.0003H13.14L16.77 12.6403C16.9397 12.4361 17.0214 12.1728 16.997 11.9084C16.9726 11.6439 16.8442 11.4 16.64 11.2303C16.4358 11.0605 16.1725 10.9789 15.9081 11.0033C15.6436 11.0276 15.3997 11.1561 15.23 11.3603L10.23 17.3603C10.1964 17.408 10.1663 17.4581 10.14 17.5103C10.14 17.5603 10.14 17.5903 10.07 17.6403C10.0247 17.7549 10.0009 17.877 10 18.0003C10.0009 18.1236 10.0247 18.2456 10.07 18.3603C10.07 18.4103 10.07 18.4403 10.14 18.4903C10.1663 18.5424 10.1964 18.5926 10.23 18.6403L15.23 24.6403C15.324 24.7532 15.4418 24.8439 15.5748 24.9062C15.7079 24.9684 15.8531 25.0005 16 25.0003C16.2337 25.0007 16.4601 24.9194 16.64 24.7703C16.7413 24.6863 16.825 24.5832 16.8863 24.4669C16.9477 24.3505 16.9855 24.2232 16.9975 24.0922C17.0096 23.9613 16.9957 23.8292 16.9567 23.7036C16.9176 23.578 16.8542 23.4613 16.77 23.3603L13.14 19.0003H25C25.2652 19.0003 25.5196 18.8949 25.7071 18.7074C25.8946 18.5198 26 18.2655 26 18.0003C26 17.7351 25.8946 17.4807 25.7071 17.2932C25.5196 17.1056 25.2652 17.0003 25 17.0003Z"
                    fill="#29225E"
                  />
                </svg>
              </a>
              <h2 className="mx-auto font-extrabold text-black dark:text-white lg:ml-[70px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                Account Settings
              </h2>
            </div>
            <div className="bg-bg-color px-5 pt-8 dark:bg-dark-bg md:pt-10">
              <div className="">
                {/* Profile */}
                <Profile />

                <InfoButton
                  heading={"My Info"}
                  subHeading={"Edit email, password.."}
                  icon={"helpCheck2"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                />

                <a href="./my_places.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/place.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          My places
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Save your favourite locations
                        </p>
                      </div>
                      <div>
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
                </a>
                <a href="./my_preferences.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/setting.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          My Preferences
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Make your journey special
                        </p>
                      </div>
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
                </a>
                <a href="./trusted_contacts.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/hands.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          Trusted Contacts
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Share all your journeys with others
                        </p>
                      </div>
                      <div>
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
                </a>
                <a href="./security.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/Security.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          Security
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Control your account with 2-step verification
                        </p>
                      </div>
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
                </a>
                <a href="./Ride_accessibility.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/key 1.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          Ride Accessibility
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Let us know if you have any special needs
                        </p>
                      </div>
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
                </a>
                <a href="./privacy_center.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/login 1.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          Privacy Center
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Manage the data you share with us
                        </p>
                      </div>
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
                </a>
                <a href="./legal.html">
                  <div className=" mb-10 flex items-center">
                    <img
                      src="./assets/images/icons/Account Settings/hammer 1.svg"
                      alt=""
                    />
                    <div className="ml-[25px] flex w-full items-center justify-between">
                      <div>
                        <h1 className="md:  mb-1 text-[16px] font-bold text-[#1A1A1A] dark:text-white">
                          Legal
                        </h1>
                        <p className="text-[13px] font-[450] text-gray-light dark:text-gray-2 md:text-[16px]  md:font-medium ">
                          Read all terms, policy &amp; licenses
                        </p>
                      </div>
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
                </a>
                <div className="py-10">
                  <button
                    onclick="location.href=''"
                    className="mb-3 w-full rounded border-[1px] border-[#EAEAEA] bg-bg-color px-[auto] py-[13px] text-[16px] font-bold hover:bg-gray-3 dark:border-[#383838] dark:bg-[#383838] dark:text-white dark:hover:bg-dark-bg md:mb-6 md:py-[17px] md:text-lg"
                  >
                    <span>Sign out</span>
                  </button>
                  <button
                    onclick="location.href=''"
                    className="w-full rounded border-[1px] border-[#EAEAEA] px-[auto] py-[13px] text-[18px] font-bold text-[#1A1A1A] hover:bg-gray-3 dark:border-[#383838] dark:bg-[#383838] dark:text-white dark:hover:bg-dark-bg md:py-[17px]"
                  >
                    <span>Delete my account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountSettingview;
