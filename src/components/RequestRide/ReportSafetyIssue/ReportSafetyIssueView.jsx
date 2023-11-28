import TextArea from "@/components/Forms/TextArea";
import Button from "@/components/Utils/Button/Button";
import MapImageContainer from "@/components/Utils/Container/MapImageContainer";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const ReportSafetyIssueView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper bg-[background: rgba(0, 0, 0, 0.5)] relative h-full bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/rider_accept">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <MapImageContainer />
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-bg lg:relative">
              <div className="absolute top-4 mb-12 flex items-center px-5">
                <Link href="/request_ride/safety_toolkit">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
              </div>
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="mb-6 border-b-[1px] border-[#F6F6F6] px-5 pt-5 pb-6 dark:border-[#383838]">
                  <h2 className="mb-10 text-center font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    Report Safety Issues
                  </h2>
                  <p className="mb-4 text-[13px] font-[450] text-black underline underline-offset-4 dark:text-gray-1 md:font-medium ">
                    For emergency help, call 911
                  </p>
                  <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    Tell us about any safety concerns on this trip. We will not
                    share what you write your driver.
                  </p>
                </div>
                <div className="px-5">
                  <TextArea placeholder="Describe what happened in as much detail as possible." />
                </div>
              </div>
              <div className="mx-auto mt-2 mb-16 space-y-4 px-5 lg:pt-4 2xs:mt-5">
                <Button
                  color="blue"
                  handler={() => Router.push("/request_ride/rider_accept")}
                >
                  Submit Complaint
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportSafetyIssueView;
