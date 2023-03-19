import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import LocationList from "@/components/Utils/List/LocationList";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const inputRef = useRef();
  const router = useRouter();
  const nextHandler = () => {
    router.push("/reserve/destination");
  };
  const locationData = [
    {
      location: "Fairmont San Francisco",
      street: "781 mcdonald Rd, San Francisco",
      symbol: "home",
    },
    {
      location: "Fairmont San Monte Carlo",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
    {
      location: "San Jose International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "star",
    },
    {
      location: "Boston International Airport",
      street: "781 McDonnell Rd, San Francisco",
      symbol: "plane",
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
              <div className="pickup_header mb-10 flex md:px-6 lg:px-8 2xs:mb-5 2xs:px-3">
                <Link href="/reserve/reserve_ride">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto mt-2 inline-block text-center font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Enter pickup location
                </h2>
              </div>

              <div className="input_box relative h-auto w-full sm:mb-8 md:px-6 lg:mb-10 lg:px-8 2xs:mb-4 2xs:px-4">
                <InputFieldWithIcon
                  leftIconName="location"
                  rightIconName="coloseIcon"
                  placeholder="Pick-up location"
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
                handler={nextHandler}
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
