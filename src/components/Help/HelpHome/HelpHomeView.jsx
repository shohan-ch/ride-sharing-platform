import HelpList from "@/components/Utils/List/HelpList";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import HelpModal from "@/components/Utils/Modal/HelpModal";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const HelpHomeView = () => {
  const [isModalVisiable, setIsModalVisiable] = useState(false);
  const modalHandler = () => {
    setIsModalVisiable(!isModalVisiable);
  };
  return (
    <>
      {/* Modal */}
      <HelpModal
        modalHandler={modalHandler}
        isModalVisiable={isModalVisiable}
      />
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div  h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <Link href="/help">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Your Last Ride
                </p>
              </div>
              <TripHistoryList />

              <div className="mx-auto mt-6 mb-16 space-y-4 lg:pt-4 2xs:mt-5">
                <button
                  onClick={modalHandler}
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center border bg-white py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  Get help with this trip
                </button>
              </div>
              {/* Topic Section */}
              <div className="item mx-auto rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white md:w-[668px] lg:w-[380px] 2xs:w-full">
                <p className="mb-6 font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  All Topics
                </p>
                <HelpList
                  heading={"Help with a trip"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                  clickhandler={() => console.log("Clicked")}
                />

                <HelpList
                  heading={"Account and Payment Options"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                  clickhandler={() => Router.push("help/payment_option")}
                />
                <HelpList
                  heading={"More"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                />
                <HelpList
                  heading={"A guide to GetRyd"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                />
                <HelpList
                  heading={"Signing Up"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                />
                <HelpList
                  heading={"Accessibility"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                />

                <HelpList
                  heading={"GetRyd Wallet"}
                  leftIcon={"hamburgerMenu"}
                  rightIcon={"rightGrayArrow"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpHomeView;
