import NavigateContainer from "@/components/Utils/Container/NavigateContainer";
import Link from "next/link";
import DriverRating from "./DriverRating";
import SingleTrip from "./SingleTrip";
import TripItinerary from "./TripItinerary";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:px-[19px] lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/business_list">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Trip Details
                </h2>
              </div>
              {/* Item content */}
              <SingleTrip />
              {/* Trip Itinerary Section */}
              <TripItinerary />
              {/* Driver Rating section */}
              <DriverRating />
              {/* Get Help Section */}
              <div className="mx-1 mb-[50px] ">
                <h1 className="my-7 self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
                  Get Help
                </h1>

                <Link href="/trip_history/lost_item">
                  <NavigateContainer
                    heding="Find Lost Item"
                    subHeading="We can help you get in touch with your driver"
                    icon="key"
                  />
                </Link>

                <Link href="/trip_history/driver_feedback">
                  <NavigateContainer
                    heding="Provide Driver Feedback"
                    subHeading="For issues that aren’t safety related"
                    icon="circle"
                  />
                </Link>

                <Link href="#">
                  <NavigateContainer
                    heding="Get Trip Help"
                    subHeading="Need help for something else? Find it here"
                    icon="key"
                  />
                </Link>

                <Link href="/trip_history/report_safty_isuue">
                  <NavigateContainer
                    heding="Report Safety Issue"
                    subHeading="Let us know if you have any safety related issues"
                    icon="carDanger"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
