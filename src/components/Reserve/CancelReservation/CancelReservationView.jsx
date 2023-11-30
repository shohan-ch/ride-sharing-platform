import Link from "next/link";
import Router from "next/router";

const CancelReservationView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border  bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-screen 2xs:w-auto 2xs:pb-10 2xs:pt-2 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full dark:border-[#2C2C35]">
              <div className="pickup_header mb-10 flex  md:pr-[76px]  lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <Link href="/reserve">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Cancel Reservation
                </h2>
              </div>

              <div className="rounded-5 mx-4 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Are you sure you want to cancel?
                </p>

                <p className="mt-4 text-gray-light dark:text-white">
                  You will not be charged anything up to 60 minutes before your
                  trip. If you cancel you’ll have to start over to make
                  reservation for your trip.
                </p>
              </div>
              <div className="mx-auto mb-16 space-y-4 px-4 lg:pt-4">
                <button
                  onClick={() => Router.push("/upcoming_reservation/cancelled")}
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 px-6 py-4 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  Yes, Cancel Reservation
                </button>
                <button
                  onClick={() => Router.push("/reserve/confirmation")}
                  className="rounded-5 shadow-one dark:shadow-dark mx-auto flex w-full items-center justify-center rounded-md border-2 border-transparent bg-primary-500 px-4 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500"
                >
                  Keep Searching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancelReservationView;
