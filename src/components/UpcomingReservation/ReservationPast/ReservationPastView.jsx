import Button from "@/components/Utils/Button/Button";
import NavigateButon from "@/components/Utils/Button/NavigateButon";
import ReservationListPast from "@/components/Utils/List/ReservationListPast";
import UpcomingReservationList from "@/components/Utils/List/UpcomingReservationList";
import Link from "next/link";
import Router from "next/router";

const ReservationPastView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:px-[19px] lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pr-[35px] 2xs:mb-3 2xs:pr-4">
                <Link href="/upcoming_reservation">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Reservation
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <div className="space-x-2 pb-2 2xs:pt-3">
                  <NavigateButon
                    isActive={true}
                    handler={() => Router.push("/upcoming_reservation/past")}
                  >
                    Past
                  </NavigateButon>
                  <NavigateButon
                    handler={() =>
                      Router.push("/upcoming_reservation/upcoming")
                    }
                  >
                    Upcoming
                  </NavigateButon>
                  <NavigateButon
                    handler={() =>
                      Router.push("/upcoming_reservation/cancelled")
                    }
                  >
                    Cancelled
                  </NavigateButon>
                </div>
              </div>
              {/* Item content */}

              <ReservationListPast isCallDriver={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationPastView;
