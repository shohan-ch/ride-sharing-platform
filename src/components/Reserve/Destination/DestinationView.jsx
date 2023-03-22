import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import LocationList from "@/components/Utils/List/LocationList";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useRef } from "react";

export default () => {
  const inputRef = useRef();
  const locationData = [
    {
      location: "Fairmont San Francisco",
      street: "781 mcdonald Rd, San Francisco",
      symbol: "star",
    },
    {
      location: "Boston International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "plane",
    },
    {
      location: "San Jose International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "home",
    },
  ];

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-gray-1 pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px] 2xs:pt-0">
              <div className="header mb-10 flex md:px-6 lg:pl-8 lg:pr-[68px] 2xs:mb-5 2xs:px-3">
                <Link href="/reserve/pickup_location">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 class="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:mt-2 2xs:text-[18px]">
                  Enter Destination
                </h2>
              </div>

              <div className="input_box sm:mb-8 md:px-6 lg:mb-10 lg:px-8 2xs:mb-4 2xs:px-4 relative w-full h-auto">
                <InputFieldWithIcon
                  leftIconName="location"
                  rightIconName="coloseIcon"
                  placeholder="Enter destination"
                  innerRef={inputRef}
                />
              </div>

              <LocationList locationData={locationData} />
            </div>

            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={() => Router.push("/reserve/travel_route")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
