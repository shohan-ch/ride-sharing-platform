import DriverAvatar from "@/components/TripHistory/Upcoming/DriverAvatar";
import IconSvg from "@/icons/IconSvg";
import ShareNavigatorView from "../ShareNavigator/ShareNavigatorView";
import Router from "next/router";

const StartRideView = () => {
  return (
    <div>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:h-screen 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="">
            {/* For small Devices */}
            <div>
              <ShareNavigatorView />
            </div>

            <div className="relative -mt-5 bg-bg-color py-2 dark:bg-dark-bg sm:mt-2 lg:rounded-3xl">
              <div className="mx-auto mb-3 h-[4px] w-[70px] rounded-lg bg-[#F0F0F0] text-center sm:hidden" />
              <div>
                <div className="h-full overflow-y-auto overflow-x-hidden rounded-3xl sm:h-[80vh] 3xl:h-full">
                  <div
                    onClick={() => Router.push("/request_ride/rating_driver")}
                    className="mb-[15px] flex cursor-pointer items-center border-b-[1px] border-gray-2 px-5 pb-6"
                  >
                    <div className="rounded-2xl bg-[#4DAA6C] px-5 py-2 text-center text-white">
                      <h2 className="text-[20px] font-bold">16</h2>
                      <p className="text-[13px] font-[450] md:font-medium">
                        min
                      </p>
                    </div>
                    <div className="ml-4 w-full">
                      <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                        Your ride has been started
                      </h2>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <IconSvg name={"dot"} />
                          <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                            Drop-off by
                            <span className="font-bold text-black dark:text-gray-1">
                              12:56pm
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-5 mt-6 mb-7 flex items-center gap-4 rounded-3xl bg-gray-1 p-4 dark:bg-dark-2">
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
                  <div className=" mx-5 mb-[105px]">
                    <DriverAvatar />
                  </div>
                </div>
                {/* Button */}
                <div className="absolute bottom-0 left-0 right-0 flex w-full gap-3 rounded-3xl p-5 2xs:fixed 2xs:bottom-[100px] 2xs:left-0 2xs:right-0">
                  <button
                    onClick={() => Router.push("/request_ride/cancel_ride")}
                    className="rounded-5 shadow-one dark:shadow-dark mx-auto flex w-full items-center justify-center rounded-md border-2 border-transparent bg-primary-500 px-4 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500"
                  >
                    Cancel Ride
                  </button>
                  <button
                    onClick={() => Router.push("/request_ride/safety_toolkit")}
                    className="w-full rounded border-[1px] border-[#EAEAEA] bg-white px-[auto] py-[13px] text-[18px] font-bold text-[#1A1A1A] hover:bg-gray-3 dark:border-[#383838] dark:bg-[#383838] dark:text-white dark:hover:bg-dark-bg md:py-[17px]"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <IconSvg name={"safety"} />
                      <span>Safety Toolkit</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartRideView;
