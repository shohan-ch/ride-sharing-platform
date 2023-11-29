import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import Router from "next/router";
const ReportSaftyIssue = () => {
  return (
    <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
      <div className="wrapper relative bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
        <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
          <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
            <div className="pickup_header mb-10 flex md:pr-[86px] lg:pl-1 lg:pr-[62px] 2xs:mb-3 2xs:pr-4 2xs:pl-1">
              <Link href="/trip_history/details">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
              <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                Report Safety Issue
              </h2>
            </div>

            <div className="rounded-5 mx-4 mx-auto rounded-lg px-5 pb-6 dark:text-white">
              <p className="text-center font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                What do you need help with?
              </p>
            </div>
            <div className="mx-auto mb-16 space-y-4 lg:pt-4">
              <Button
                color="gray"
                className="hover:bg-primary-hover hover:text-white"
                handler={() => Router.push("/trip_history/accident_report")}
              >
                I was involved in an accident
              </Button>

              <Button
                color="gray"
                className="hover:bg-primary-hover hover:text-white"
                handler={() => Router.push("/trip_history/reckless_driving")}
              >
                My driver drove recklessly
              </Button>

              <Button
                color="gray"
                className="hover:bg-primary-hover hover:text-white"
                handler={() => Router.push("/trip_history/different_vehicle")}
              >
                My driver’s vehicle was different
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSaftyIssue;
