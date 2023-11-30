import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";

const CancellationResonView = () => {
  const handleCancelClick = () => {
    Router.push("/request_ride/cancel_message");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:h-[80vh] sm:pt-0 sm:text-left lg:rounded-3xl lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color py-5 dark:bg-dark-bg lg:relative">
              <div className="px-5 ">
                <div className="flex ">
                  <h2 className="mx-auto mb-4 self-center text-center font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    What made you cancel?
                  </h2>
                  <h5
                    className="ml-auto cursor-pointer font-semibold hover:text-primary-hover 2xs:hidden"
                    onClick={() => Router.push("/request_ride")}
                  >
                    Skip
                  </h5>
                </div>

                <div className="h-full overflow-y-auto overflow-x-hidden sm:h-[70vh] 3xl:h-full">
                  <Button color="gray" handler={handleCancelClick}>
                    Select wrong pickup
                  </Button>
                  <Button handler={handleCancelClick} color="gray">
                    Requested wrong vehicle
                  </Button>
                  <Button handler={handleCancelClick} color="gray">
                    Wait time was too long
                  </Button>{" "}
                  <Button handler={handleCancelClick} color="gray">
                    Selected wrong dropoff
                  </Button>{" "}
                  <Button handler={handleCancelClick} color="gray">
                    Requested by accident
                  </Button>{" "}
                  <Button handler={handleCancelClick} color="gray">
                    Other
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute right-5 top-12 sm:hidden">
              <button className="text-[16px ] rounded-3xl bg-[#29225E] px-3 py-2 font-bold text-white dark:bg-transparent">
                Skip
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancellationResonView;
