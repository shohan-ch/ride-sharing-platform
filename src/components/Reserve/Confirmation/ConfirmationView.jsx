import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import Router from "next/router";
export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pl-1 lg:pr-[62px] 2xs:mb-3 2xs:pr-4 2xs:pl-1">
                <Link href="/reserve/reservation_summary">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 lg:ml-[70px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Payment Method
                </h2>
              </div>
              {/* Item content */}

              <div className="rounded-5 mx-4 mx-auto mt-8 rounded-lg px-5 py-6 dark:text-white">
                <div className="item mb-3 text-center">
                  <span className="inline-block">
                    <img
                      className="h-full w-full"
                      src="/assets/reservation/undraw_confirmed.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <p className="text-center font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  You have successfully
                  <br /> completed your reservation!
                </p>
                <p className="pt-2 text-center text-sm font-normal text-gray-600 dark:text-gray-2">
                  Your reservation number is{" "}
                  <span className="font-bold text-black dark:text-white">
                    #1344265
                  </span>
                </p>
                <p className="pt-2 text-center text-sm font-normal text-gray-600 dark:text-gray-2">
                  Our driver will pick you up on <br />
                  <span className="font-bold text-black dark:text-white">
                    8th November, 8:00 PM.
                  </span>
                </p>
              </div>
              <div className="mx-auto mb-16 space-y-2 lg:pt-4">
                <button
                  onClick={() => Router.push("/reserve")}
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  Back to Home
                </button>

                <button className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]">
                  Contact Dispatcher
                </button>
                <button
                  onclick="location.href='./cancel_reservation.html'"
                  className="rounded-5 dark:hprbg-primary-hover shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 px-6 py-4 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white"
                >
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
