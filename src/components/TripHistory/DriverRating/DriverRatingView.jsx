import Radio from "@/components/Forms/Radio";
import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
import RadioButtonRating from "./RadioButtonRating";
export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:mb-[30px] 2xl:h-[460px] 3xl:h-[700px]">
              <div className="pickup_header  mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/driver_feedback">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  I want to change the ratings for my driver.
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  What rating would you like to give?
                </p>
              </div>
              {/* radion button List  */}
              <div className="radio_wrapper">
                <RadioButtonRating numberOfStar={1} />
                {/* <div className="list flex items-center justify-between mb-6">
                 
                  <div>
                    <IconSvg name={"star"} width={26} height={26} />
                  </div>
                  <Radio />
                </div> */}

                <div className="list mb-6 flex items-center justify-between">
                  <div>
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                  </div>
                  <Radio />
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  <div>
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                  </div>
                  <Radio />
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  <div>
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                  </div>
                  <Radio />
                </div>
                <div className="list mb-6 flex items-center justify-between">
                  <div>
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                    <IconSvg name={"star"} width={26} height={26} />
                  </div>
                  <Radio />
                </div>
              </div>
            </div>
            <button
              onclick="location.href='./reservation_confirm.html'"
              className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              Submit Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
