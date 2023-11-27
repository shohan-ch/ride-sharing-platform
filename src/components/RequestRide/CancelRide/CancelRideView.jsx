import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";

const CancelRideView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color py-5 dark:bg-dark-bg lg:relative">
              <div className="border-b-[1px] border-[#F6F6F6] px-5 pb-6 dark:border-[#383838]">
                <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                  Cancel your trip with John Smith Knight?
                </h2>
                <p className="text-[13px] font-medium text-gray-light dark:text-gray-1 ">
                  Instead, we can find you another nearby driver for no
                  additional fee
                </p>
              </div>
              <div className="mb-6 flex justify-between border-b-[1px] border-[#F6F6F6] bg-bg-color p-5 dark:border-[#383838] dark:bg-dark-2">
                <div className="flex items-center gap-2">
                  <IconSvg name={"locationRed"} />
                  <p className="text-[13px] font-[450] text-black dark:text-gray-1 ">
                    Wrong pick-up location?
                  </p>
                </div>
                <button
                  onclick="location.href='./confirm_pickup_location.html'"
                  className="text-[13px] font-bold text-black  dark:text-gray-1"
                >
                  Edit pick-up
                </button>
              </div>

              <div className="space-y-6 px-5">
                <Button
                  handler={() =>
                    Router.push("/request_ride/cancellation_reason")
                  }
                  color="gray"
                  className="border bg-white"
                >
                  Yes,Cancel
                </Button>

                <Button color="gray" className="border bg-white">
                  No
                </Button>
                <Button color="blue">Find another driver</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancelRideView;
