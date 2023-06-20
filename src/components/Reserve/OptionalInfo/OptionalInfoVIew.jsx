import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";

const OptionalInfoVIew = () => {
  return (
    <>
      <section className="sec items-center justify-center bg-gray-2 dark:bg-dark-bg md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-gray-1 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex pl-5 md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:px-3">
                <Link href="/reserve/vehicles">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add optional info
                </h2>
              </div>
              {/* Item content */}
              <div className="mx-auto mt-8 bg-white px-5 py-8 dark:bg-dark-2  dark:text-white md:w-[668px] lg:mb-0 lg:w-[380px] 2xs:w-full">
                <div className="item mb-7 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <IconSvg name="calender" />
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Pickup Date
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    Jun 6, 2022
                  </p>
                </div>
                <div className="item mb-7 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <IconSvg name="clock" />
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Pickup Time
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    8:45 PM
                  </p>
                </div>
                <div className="item mb-3 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <IconSvg name="alarmClock" />
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Duration
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    2 Hour 38 Minutes
                  </p>
                </div>
              </div>
              <div className=" dext-whitt-8 me mx-auto mt-8 mb-5 px-5">
                <p className="mb-8 text-sm font-normal text-gray-600 dark:text-gray-3 sm:mb-5 2xs:mb-8">
                  Enter your flight number to ensure your chauffeur is waiting,
                  even if your flight is delayed.
                </p>
                <div className="">
                  <form action="#">
                    <div className="sm:mb-6 2xs:mb-4">
                      <InputField
                        type="text"
                        label="Fight Number"
                        placeholder="Fight Number"
                        className="bg-white"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <InputField
                        type="text"
                        label="Pickup Sign"
                        placeholder="Pickup Sign"
                        className="bg-white"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <InputField
                        type="text"
                        label="Notes for the chauffeur"
                        placeholder="Notes for the chauffeur"
                        className="bg-white"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <InputField
                        type="text"
                        label="Book for someone else"
                        placeholder="Book for someone else"
                        className="bg-white"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <InputField
                        type="text"
                        label="Reference number"
                        placeholder="Reference number"
                        className="bg-white"
                      />
                      <p
                        id="helper-text-explanation"
                        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        The reference number appears on your invoice.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={() => Router.push("/reserve/payment_method")}
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

export default OptionalInfoVIew;
