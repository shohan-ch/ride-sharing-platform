import DriverAvatar from "@/components/TripHistory/Upcoming/DriverAvatar";
import Link from "next/link";
import AdditionalInfo from "./AdditionalInfo";
import Tripfare from "./Tripfare";
import Details from "./Details";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";
const ReservationDetailsView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div
          className="wrapper relative border bg-gray-1  pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] 
            lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:pt-2 2xs:dark:border-0"
        >
          <div className="px-5 sm:pt-4 sm:text-left lg:pt-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pr-[35px] 2xs:mb-3 2xs:pr-4">
                <Link href="/reserve">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Reservation Details
                </h2>
              </div>

              <div>
                <img
                  src="/assets/images/upcoming_reservation/map.png"
                  alt="img4"
                  className="w-full"
                />
              </div>

              <div className="item_wrapper lg:mb-[30px]">
                <div className="mt-5 rounded-lg bg-white px-2 py-5">
                  <DriverAvatar />
                </div>

                <div className="mx-auto mt-5 rounded-lg bg-white px-4 py-7 dark:bg-dark-2 dark:text-white">
                  <div className="mb-4 flex justify-between">
                    <div>
                      <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
                        US $45.60
                      </h1>
                      <p className="text-sm text-gray-light dark:text-white">
                        Trip Fare
                      </p>
                    </div>

                    <div>
                      <span className="rounded-full bg-gray-2 p-2 text-[12px] font-medium text-[#4DAA6C]">
                        Accepted
                      </span>
                    </div>
                  </div>
                  <Details />
                </div>

                <AdditionalInfo />

                <Tripfare />
              </div>
            </div>

            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[25px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button
                color="blue"
                handler={() => Router.push("/reserve/cancel_reserve")}
              >
                Cancel Trip
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationDetailsView;
