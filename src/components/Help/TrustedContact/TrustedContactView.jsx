import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Router from "next/router";
const TrustedContactView = () => {
  const clickHandeler = () => {
    Router.push("/wallet/business_email");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full  lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-6 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[490px] 3xl:h-[750px] 2xs:px-0  2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[30px] md:pb-7">
              <a href="./account_settings.html">
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
            </div>
            <div className="mx-5">
              <img
                src="./assets/images/icons/Group 194.png"
                className="mx-auto block h-full w-full px-5 dark:hidden"
                alt=""
              />
              <img
                src="./assets/images/icons/Group_194_dark.png"
                className="mb-[50px] hidden h-full w-full px-5 dark:block md:mb-12"
                alt=""
              />
              <div className="mt-[50px] mb-9 text-center md:mt-12 md:mb-7">
                <h1 className="text-left text-2xl font-bold  text-[#1A1A1A] dark:text-white md:text-2xl">
                  Keep your friends or family updated during rides
                </h1>
              </div>
              <div>
                <div className="mb-[25px] flex items-center border-b-[1px] border-[#F6F6F6] pb-[25px] dark:border-[#2C2C35] md:mb-7  md:pb-7">
                  <img src="./assets/images/icons/location.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Share trip status{" "}
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You will be able to share your live location with one or
                      more contacts during any GetRyd trip.{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-[50px] flex items-center md:mb-[100px]">
                  <img src="./assets/images/icons/body.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Set your emergency contacts
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You can make a trusted contacted as an emergency contact.
                      GetRyd can call them if we can’t reach you, in case of an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-[71px] md:mb-[80px]">
                <button
                  onclick="location.href='./choose_trusted_contact.html'"
                  className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
                >
                  Add Trusted Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex items-center justify-center h-screen bg-white dark:bg-dark-bg 2xs:block 2xs:h-full 2xs:w-full">
        <div className="py-4 lg:darkpy-4 smorder 2xs:da-0rlgorder-0 sm:dk2x:order-0 b rounded-2xl">
          <div className="h-full w-[428px] overflow-y-auto overflow-x-hidden dark:bg-dark-bg sm:pb-3 xl:h-[600px] 2xl:h-[490px]  3xl:h-full  2xs:w-auto 2xs:pb-10">
            <div className="mt-7">
              <img
                className="mx-auto dark:hidden dark:opacity-0"
                src="/assets/images/wallet/Frame 1148.png"
                alt="img"
              />
              <img
                className="hidden mx-auto opacity-0 rounded-3xl dark:block dark:opacity-100"
                src="/assets/images/wallet/Frame 1148 (1).png"
                alt="img"
              />
            </div>
            <div className="relative sm:px-5 sm:pt-[120px] sm:text-left lg:pt-0 2xs:px-5 2xs:pt-0 2xs:text-left">
              <h1 className="mt-3 mb-5 font-extrabold text-black text-32 dark:text-gray-2 2xs:mb-8 2xs:mt-0 2xs:text-26">
                Set Business Profile
              </h1>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"avatar"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create individual account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Get receipts email to a work inbox, keep work trips
                    separate, and more...
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"avatar2"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Create a team account
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Track your overall team expenses easily by adding your
                    colleagues
                  </p>
                </div>
              </div>
              <div className="mb-6 flex gap-x-4 border-b border-[#F6F6F6] pb-2 dark:border-[#2C2C35] 2xs:mb-6">
                <div>
                  <IconSvg name={"refresh"} />
                </div>
                <div>
                  <p className="self-center font-medium dark:text-white 2xs:text-sm">
                    Join an existing organization
                  </p>
                  <p className="text-[14px] text-gray-light dark:text-gray-2">
                    Link your account to a business and start expending eligible
                    rides
                  </p>
                </div>
              </div>
              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <Button color="blue" handler={clickHandeler}>
                  Set Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default TrustedContactView;
