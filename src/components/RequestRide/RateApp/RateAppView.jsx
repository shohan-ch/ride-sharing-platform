import Link from "next/link";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";

const RateAppView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[2px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
            </div>
            <div className="w-full rounded-3xl bg-bg-color p-5 dark:bg-dark-bg sm:relative">
              <div className="mb-6">
                <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                  Do you love GetRyd?
                </h2>
                <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                  Rate us on play Store or App store and spread the word!
                </p>
              </div>

              <div className="mx-auto mt-6 mb-16 space-y-4 px-1 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  className="border hover:bg-primary-hover hover:text-white"
                  handler={() => Router.push("/request_ride/change_stop")}
                >
                  Rate Now
                </Button>

                <Button
                  color="blue"
                  handler={() => Router.push("/request_ride/change_stop")}
                >
                  Remind me later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RateAppView;
