import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
const ConnectingDriverView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div>
            {/* Map image for mobile */}
            <div className=":-t-3xl relative sm:hidden">
              <div className="h-[300px] overflow-hidden lg:h-[150px] xl:h-[250px] 2xl:h-[200px] 3xl:h-[400px]">
                <img
                  src="/assets/images/request_ride/map/Frame 87.png"
                  className="w-fuln lg:roulded-t-3xl dark:hidden"
                  alt=""
                />
                <img
                  src="/assets/images/request_ride/map/Group 201.png"
                  className="dark:bdden hidden w-full lg:rounded-t-3xl"
                  alt=""
                />
              </div>
              <Link
                href="/request_ride/location"
                className="absolute top-[30px] left-5 z-50 sm:hidden"
              >
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="relative -mt-8 rounded-3xl bg-bg-color px-5 py-2 dark:bg-dark-2 sm:mt-2 sm:flex sm:h-[80vh] sm:items-center sm:justify-center">
              <a href="conneting_driver.html">
                <div className="flex w-full justify-center pt-5">
                  <img src="/assets/images/request_ride/driver.svg" alt="" />
                </div>
                <div className="my-[15px] flex items-center">
                  <div className=" mx-auto">
                    <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Connecting to a driver
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="mx-auto flex items-center">
                        <IconSvg name={"dot"} />
                        <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                          Drop-off by
                          <span className="ml-1 font-bold text-black dark:text-gray-1">
                            12:56pm
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectingDriverView;
