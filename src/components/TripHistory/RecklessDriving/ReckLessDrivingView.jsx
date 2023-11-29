import Switch from "@/components/Forms/Switch";
import Button from "@/components/Utils/Button/Button";
import TripHistoryList from "@/components/Utils/List/TripHistoryList";
import Link from "next/link";
import Router from "next/router";

const ReckLessDrivingView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[750px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/report_safty_isuue">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  My driver drove recklessly
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  When a driver accepts your request for a ride, your app
                  provides confirmation of your driver’s vehicle make, model and
                  license plate number. This info helps you recognize the
                  driver’s vehicle at your pickup location.
                  <br />
                  <br />
                  If your driver arrived in a vehicle different than what the
                  app confirmed, please provide some additional information
                  here.
                </p>
              </div>
              {/* Switch button  */}
              <div className="switch_wrapper">
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    Was you driver distracted by their phone?
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    Was your driver distracted by something other than their
                    phone?
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    Was your driver speeding, or disruptingthe flow of traffic
                    by driving too slowly?
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    Did your driver perform unsafe traffic manoeuvres, or ignore
                    road signage/markings?
                  </span>
                  <Switch />
                </div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="text- pr-3 font-medium text-black dark:text-white">
                    Did your driver apper to be drowsy or sleepy?
                  </span>
                  <Switch />
                </div>
              </div>
              <TripHistoryList />

              <div className="mx-auto mt-6 mb-16 space-y-4 px-1 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  className="border hover:bg-primary-hover hover:text-white"
                  handler={() => Router.push("/trip_history/business_list")}
                >
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
export default ReckLessDrivingView;
