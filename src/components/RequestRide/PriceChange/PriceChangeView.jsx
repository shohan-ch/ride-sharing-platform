import Link from "next/link";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";

const PriceChangeView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[2px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
            </div>
            <div className="w-full rounded-3xl bg-bg-color p-5 dark:bg-dark-bg sm:relative">
              <div className="mb-6">
                <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                  Your price has changed
                </h2>
                <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                  Based on your new location, your price will be
                  <span className="font-bold text-black dark:text-white">
                    US$24.80.
                  </span>{" "}
                  You may see multiple holds on your statement. Don't worry,
                  you'll be charged only once.
                </p>
              </div>

              <div className="mx-auto mt-6 mb-16 space-y-4 px-1 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  className="border hover:bg-primary-hover hover:text-white"
                  handler={() => Router.push("/request_ride/change_stop")}
                >
                  Cancel
                </Button>

                <Button
                  color="blue"
                  handler={() => Router.push("/request_ride/change_stop")}
                >
                  Confirm New Price
                </Button>
              </div>
              {/* <div className="absolute left-0 right-0 mx-5  md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button color="blue">Confirm New Price</Button>
              </div> */}
              {/* <button
                onclick="location.href='./add_or_change_stop.html'"
                className="mb-3 w-full rounded border-[1px] border-[#EAEAEA] px-[auto]  py-[13px] text-[18px] font-bold text-[#1A1A1A] hover:bg-gray-3 dark:border-[#383838] dark:bg-[#383838] dark:text-white dark:hover:bg-dark-bg md:py-[17px]"
              >
                <span>Cancel</span>
              </button>
              <button
                onclick="location.href='./rider_accepted_driver_extended.html'"
                className="rounded-5 shadow-one dark:shadow-dark mx-auto flex w-full items-center justify-center rounded-md
               border-2 border-transparent bg-primary-500 px-4 py-4  text-base font-semibold text-white hover:bg-primary-hover hover:text-white
                 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 
                 lg:bottom-[22px] 2xs:bottom-[8px]"
              >
                Confirm New Price
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceChangeView;
