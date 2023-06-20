import NavigateButon from "@/components/Utils/Button/NavigateButon";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import Link from "next/link";

const BusinessListView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-100 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[490px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex pl-5 md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Trip History
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-5 dark:text-white 2xs:mt-2 2xs:pt-0">
                <div className="space-x-2 pb-2 2xs:pt-3">
                  <NavigateButon>Past</NavigateButon>
                  <NavigateButon isActive={true}>Business</NavigateButon>
                  <NavigateButon>Upcoming</NavigateButon>
                </div>
              </div>
              {/* Item content */}
              <div className="px-4">
                <Link href="/trip_history/details">
                  <TripHistoryList isActive={true} />
                </Link>

                <Link href="/trip_history/details">
                  <TripHistoryList />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessListView;
