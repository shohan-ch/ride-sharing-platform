import Link from "next/link";
import { useRef } from "react";
const ReschuduleReservationView = () => {
  const dateRef = useRef();
  const timeRef = useRef();

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[36px] lg:pr-[32px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <Link href="/reserve">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Reschudule Reservation
                </h2>
              </div>
              {/* Item content */}

              <div className="item mx-auto rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
                <div className="rounded-5 mx-2 rounded-lg pb-6 dark:text-white">
                  <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                    Edit your upcoming reservation
                  </p>
                  <p className="pt-2 text-sm font-normal text-gray-600 dark:text-gray-2">
                    Set your time when you want to go
                  </p>
                </div>

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

              <div className="button_list mt-8 flex justify-between gap-x-10 px-2">
                <button className="rounded-5 shadow-one dark:shadow-dark group flex w-[163px] items-center justify-center rounded-lg bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]">
                  Cancel
                </button>
                <button className="rounded-5 shadow-one dark:shadow-dark group flex w-[163px] items-center justify-center rounded-lg bg-primary-500 py-4 px-6 text-base font-semibold text-white hover:bg-primary-hover hover:text-white dark:bg-primary dark:text-white dark:hover:bg-[#29225E]">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReschuduleReservationView;
