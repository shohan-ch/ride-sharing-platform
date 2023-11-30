import Switch from "@/components/Forms/Switch";
import InputField from "@/components/Forms/InputField";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import { useRef } from "react";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import FeedbackArticle from "./FeedbackArticle";
import Router from "next/router";

const ShareDriverFeedbackView = () => {
  const dateRef = useRef("");

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pl-[19px] pr-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pb-10 2xs:pt-2 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/driver_feedback">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <FeedbackArticle />
              {/* Switch button  */}
              <div className="switch_wrapper">
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    My driver’s behaviour or tone was quite rude
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    My driver called my unnecessarily before picking me up
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    My driver made me walk to the pickup location
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    The car’s AC was not working or my driver did not turn it on
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="text- pr-3 font-medium text-black dark:text-white">
                    The vehicle wasn’t clean or had a bad smell
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="text- pr-3 font-medium text-black dark:text-white">
                    My driver dropped me off before we reached my destination
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="text- pr-3 font-medium text-black dark:text-white">
                    My driver asked for cash but I refused to pay
                  </span>
                  <Switch />
                </div>
                <div className="px-1 sm:mb-5 2xs:mb-4">
                  <InputField
                    type="date"
                    innerRef={dateRef}
                    label="Date of your trip"
                    handleClick={() => dateRef.current.showPicker()}
                  />
                </div>
              </div>
              <TripHistoryList />
              <div className="mx-auto mb-16 mt-6 space-y-4 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  className="h-12 border"
                  handler={() => Router.push("/trip_history/business_list")}
                >
                  {" "}
                  Change The Trip
                </Button>
              </div>
            </div>

            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                handler={() => Router.push("/trip_history/details")}
              >
                Submit Info
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShareDriverFeedbackView;
