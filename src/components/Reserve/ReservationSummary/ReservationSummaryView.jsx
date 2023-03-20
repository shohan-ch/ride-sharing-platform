import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import Router from "next/router";
import Summary from "./Summary";
import TipPercentage from "./TipPercentage";
import TripBill from "./TripBill";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-100 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pl-1 lg:pr-[62px] 2xs:mb-3 2xs:pr-4 2xs:pl-1">
                <Link href="/reserve/card">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Reservation Summary
                </h2>
              </div>
              {/* Item content */}

              <div className="rounded-5 mx-1 mx-auto mt-8 rounded-lg bg-white px-5 py-6 dark:bg-dark-2 dark:text-white">
                <Summary />
              </div>
              <div className="rounded-5 mx-1 mx-auto mt-4 rounded-lg bg-white px-5 py-6 dark:bg-dark-2 dark:text-white">
                <h1 className="text-18 font-extrabold text-black dark:text-gray-2 2xs:mb-2">
                  Tip the Driver
                </h1>
                <TipPercentage />
                <p className="font-semibold text-gray-700 dark:text-white">
                  Custom Amount &gt;
                </p>
              </div>
              <TripBill />
              <div className="mx-5 mb-16 bg-white">
                <div className="py-2">
                  <label className="flex text-sm leading-normal">
                    <input
                      type="checkbox"
                      name="remember"
                      className=" text-grey-dark mt-1 mr-2"
                    />{" "}
                    I agree to
                    <span className="ml-1 font-semibold text-[#29225E]">
                      {" "}
                      GetRyd Terms &amp; Conditions
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                iconPosition="right"
                iconName="rightArrow"
                handler={() => Router.push("/reserve/conirm")}
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
