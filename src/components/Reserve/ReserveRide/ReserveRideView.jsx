import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import ReserveButton from "@/components/Utils/Button/ReserveButton";
import { useEffect, useRef } from "react";

export default () => {
  const dateRef = useRef();
  const timeRef = useRef();

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="header mb-4 flex lg:pl-1 lg:pr-[36px] 2xs:pr-3">
            <a href="./reserve.html" className="mt-[7px] 2xs:mt-1">
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={36} height={36} rx={4} className="fill-gray-1" />
                <path
                  d="M25 17.0003H13.14L16.77 12.6403C16.9397 12.4361 17.0214 12.1728 16.997 11.9084C16.9726 11.6439 16.8442 11.4 16.64 11.2303C16.4358 11.0605 16.1725 10.9789 15.9081 11.0033C15.6436 11.0276 15.3997 11.1561 15.23 11.3603L10.23 17.3603C10.1964 17.408 10.1663 17.4581 10.14 17.5103C10.14 17.5603 10.14 17.5903 10.07 17.6403C10.0247 17.7549 10.0009 17.877 10 18.0003C10.0009 18.1236 10.0247 18.2456 10.07 18.3603C10.07 18.4103 10.07 18.4403 10.14 18.4903C10.1663 18.5424 10.1964 18.5926 10.23 18.6403L15.23 24.6403C15.324 24.7532 15.4418 24.8439 15.5748 24.9062C15.7079 24.9684 15.8531 25.0005 16 25.0003C16.2337 25.0007 16.4601 24.9194 16.64 24.7703C16.7413 24.6863 16.825 24.5832 16.8863 24.4669C16.9477 24.3505 16.9855 24.2232 16.9975 24.0922C17.0096 23.9613 16.9957 23.8292 16.9567 23.7036C16.9176 23.578 16.8542 23.4613 16.77 23.3603L13.14 19.0003H25C25.2652 19.0003 25.5196 18.8949 25.7071 18.7074C25.8946 18.5198 26 18.2655 26 18.0003C26 17.7351 25.8946 17.4807 25.7071 17.2932C25.5196 17.1056 25.2652 17.0003 25 17.0003Z"
                  fill="#29225E"
                />
              </svg>
            </a>
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
              <Button color="blue" iconPosition="right" iconName="rightArrow">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
