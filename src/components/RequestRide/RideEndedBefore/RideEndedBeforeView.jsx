import InfoButton from "@/components/Utils/Button/InfoButton";
import Link from "next/link";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
const RideEndedBeforeView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:h-[80vh] sm:pt-0 sm:text-left lg:rounded-3xl lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="rounded-t-3xl bg-dark-bg">
                <div className="flex justify-center pt-4">
                  <IconSvg name={"safetyWithBg"} />
                </div>
                <div className="px-5 pb-6 text-center">
                  <h2 className="mb-4 font-bold text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    Do you need help?
                  </h2>
                  <p className="mb-2 text-[13px] font-medium text-gray-1">
                    Your ride ended away from your destination.
                  </p>

                  <Button color="gray" className="rounded-sm bg-white">
                    {" "}
                    I'm OK, Thanks
                  </Button>
                </div>
              </div>
              <div className="px-5">
                <div className="h-full overflow-y-auto overflow-x-hidden sm:h-[45vh] 3xl:h-full">
                  <InfoButton
                    heading={"911 assistance"}
                    icon={"assistance"}
                    className="mt-6 font-extrabold"
                  />

                  <InfoButton
                    heading={"Call GetRyd safety line"}
                    icon={"phone2"}
                    className="mt-6 font-extrabold"
                  />

                  <InfoButton
                    heading={"Report a crash"}
                    icon={"crash"}
                    className="mt-6 font-extrabold"
                  />

                  <InfoButton
                    heading={"Request another ride"}
                    icon={"anotherRide"}
                    className="mt-6 font-extrabold"
                  />

                  <InfoButton
                    heading={"Safety center"}
                    icon={"safety2"}
                    className="mt-6 font-extrabold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RideEndedBeforeView;
