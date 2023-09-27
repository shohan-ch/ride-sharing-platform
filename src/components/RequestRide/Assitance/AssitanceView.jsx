import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

const AssitanceView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[2px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="itemer p absolute top-7 mb-12 flex">
                <Link href="/request_ride/rider_accept">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="mb-6 px-5 pt-5 pb-6">
                  <h2 className="mb-1 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    911 assistance
                  </h2>
                  <p className="mb-4 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    Your trip and contact details will be shared automatically
                    when connecting with 911.
                  </p>
                </div>
                <div className="mx-5 mb-4 rounded bg-gray-1 p-5 dark:bg-[#2C2C35]">
                  <div className="flex gap-10">
                    <div>
                      <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                        Driver's Name:
                      </p>
                      <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                        Car Model:
                      </p>
                      <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                        License Number:
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium ">
                        Change sharing settings
                      </p>
                      <p className="mb-3 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium ">
                        Toyota Camry Hybrid
                      </p>
                      <p className="text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium ">
                        215 BG2
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-4 rounded bg-gray-1 p-5 dark:bg-[#2C2C35]">
                  <div className="flex gap-10">
                    <div>
                      <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                        Current Location:
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium ">
                        Fairmont San Francisco
                      </p>
                      <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                        700 4th St, Beach Port, SF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between rounded-2xl bg-[#F8F8FC] p-1 dark:bg-[#2C2C35]">
                  <div>
                    <IconSvg name={"requestRidePhone"} />
                  </div>
                  <p className="text-[16px]  font-bold text-black dark:text-gray-1 ">
                    Swipe to call 911
                  </p>
                  <div>
                    <IconSvg name={"doubleArrow"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssitanceView;
