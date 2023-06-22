import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import ReserveButton from "@/components/Utils/Button/ReserveButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

const ReserveRideView = () => {
  const dateRef = useRef();
  const timeRef = useRef();
  const router = useRouter();
  const nextHandler = () => {
    router.push("/reserve/pickup_location");
  };

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="header mb-4 flex lg:pl-1 lg:pr-[36px] 2xs:pr-3">
            <Link href="/reserve">
              <img src="/assets/icons/back.svg" alt="svg_icon" />
            </Link>

            <h2
              className="mx-auto mt-2 inline-block
                text-center
                font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]
                "
            >
              Reserve a ride
            </h2>
          </div>
          <div className="button_div flex h-[72px] items-center justify-around gap-2 rounded-lg px-2 sm:mx-10 lg:mx-0 2xs:h-[50px] 2xs:px-0">
            <ReserveButton isFocus={true}>One Ways</ReserveButton>
            <ReserveButton>By The Hour</ReserveButton>
          </div>
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:pt-6 2xs:text-left">
            <h1 className="mt-5 mb-2 font-extrabold text-black dark:text-gray-2 2xl:mt-5 2xl:text-[20px] 3xl:text-[24px] 2xs:mb-2 2xs:mt-1 2xs:text-26">
              Where would you like to be picked up?
            </h1>
            <p className="mb-4 text-lg font-normal text-[#5C5C5C] dark:text-gray-2 2xl:mb-3 3xl:mb-6 3xl:text-lg 2xs:mb-6 2xs:text-sm">
              Enter your destination, date, and time
            </p>
            <div className="border-[#F6F6F6] dark:border-[#2C2C35]">
              <div className="h-full overflow-y-auto px-[1px] pt-2 pb-10 md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[250px] 3xl:h-auto 2xs:px-[1px]">
                <InputFieldWithIcon
                  placeholder="Pick-up location"
                  leftIconName="location"
                  rightIconName="clock"
                />

                <InputFieldWithIcon
                  placeholder="Destination"
                  leftIconName="location2"
                />

                <h1 className="mt-4 font-extrabold text-black dark:text-gray-2 2xl:mt-5 2xl:text-22 3xl:mt-7 2xs:mb-2 2xs:mt-2 2xs:text-26">
                  Pick your schedule
                </h1>
                <p className="mb-4 text-lg font-normal text-[#5C5C5C] dark:text-gray-2 2xs:mb-6 2xs:text-sm">
                  Set your time when you want to go
                </p>
                <div className="w-full sm:mb-8 lg:mb-2 2xs:mb-4">
                  <input
                    onClick={() => dateRef.current.showPicker()}
                    type="date"
                    ref={dateRef}
                    placeholder="mm/dd/yyyy"
                    className="h-[58px] w-full rounded-md bg-gray-1 p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-1 dark:focus:ring-black"
                  />
                </div>
                <div className="w-full sm:mb-8 lg:mb-0 2xs:mb-14">
                  <input
                    onClick={() => timeRef.current.showPicker()}
                    ref={timeRef}
                    id="my-input"
                    type="time"
                    className="mb-5 h-[58px] w-full cursor-pointer rounded-md bg-gray-1 p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-1 dark:focus:ring-black lg:mb-8 2xl:mb-5"
                  />
                </div>
              </div>
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
export default ReserveRideView;
