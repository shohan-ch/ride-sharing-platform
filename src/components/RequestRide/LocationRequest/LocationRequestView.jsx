import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import LocationList from "@/components/Utils/List/LocationList";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

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
                <Link href="/request_ride">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="ml-[70px] font-extrabold text-black dark:text-white lg:ml-[100px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Request Now
                </h2>
              </div>
              {/* Input Setion  Start*/}
              <div className="flex w-full items-center justify-between gap-2">
                <div className="w-full">
                  <InputFieldWithIcon
                    placeholder="Current Location"
                    leftIconName="location"
                    className="!bg-white"
                  />

                  <InputFieldWithIcon
                    placeholder="|Destination"
                    leftIconName="location"
                    className="!bg-white"
                  />
                </div>
                <div>
                  <button onClick="location.href='./add_stop.html'">
                    <IconSvg name={"plusWithBg"} />
                  </button>
                </div>
              </div>

              {/* Input Section End  */}
            </div>
            <div>
              <div className="flex items-center border-b-4 border-[#F8F8F8] bg-bg-color px-5 py-[10px] dark:border-[#2C2C35] dark:bg-[#202028] md:border-b-8">
                <IconSvg name={"home"} />
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
                <IconSvg name={"office"} />
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
                <IconSvg name={"starBgPink"} />
                <div className="ml-4 flex w-full items-center justify-between md:ml-6">
                  <h1 className="mb-1 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-[2px] md:text-[14px]">
                    Saved Places (5)
                  </h1>
                  <div className="ml-5">
                    <IconSvg name={"rightGrayArrow"} />
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
              onClick="location.href='./confirm_pickup_location.html'"
              className="absolute bottom-0 left-0 right-0 mx-auto mt-8 mb-5 flex w-[200px] items-center rounded-[71px]  bg-[#29225E] py-4 px-5 text-[16px] font-bold text-bg-color hover:bg-primary-hover dark:bg-[#493DA8] dark:hover:bg-[#29225E] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              <IconSvg name={"mapBook"} />
              <span className="ml-4">Choose on map</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationRequestView;
