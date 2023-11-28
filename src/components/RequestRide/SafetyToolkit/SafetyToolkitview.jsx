import InfoButton from "@/components/Utils/Button/InfoButton";
import { ClassSharp, CleaningServices } from "@mui/icons-material";
import Link from "next/link";
import Router from "next/router";

const SafetyToolkitView = () => {
  let backPath = Router;
  console.log(Router);
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full  bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <div className="cursor-pointer" onClick={() => Router.back()}>
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </div>
              </div>
              <div className="w-full">
                <img
                  className="w-full dark:hidden"
                  src="/assets/images/request_ride/Group 199.jpg"
                  alt=""
                />
                <img
                  className="hidden w-full dark:block"
                  src="/assets/images/request_ride/Group 199_dark.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color p-5 dark:bg-dark-2 lg:relative">
              <div className="mb-6 border-b-[1px] border-[#F6F6F6] dark:border-[#2C2C35]">
                <div
                  onClick={() => Router.back()}
                  className="absolute top-[15px] left-5 z-50 cursor-pointer "
                >
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </div>
                <h2 className="mb-4 text-center font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                  Safety Toolkit
                </h2>
              </div>
              <InfoButton
                heading={"Share my trip"}
                subHeading={
                  "Let family and friends see your location and trip status."
                }
                className={
                  "border-b-[1px] pb-5 font-bold hover:border-gray-400  hover:duration-700"
                }
                icon={"requestRideLocation"}
                clickHandler={() =>
                  Router.push("/request_ride/sharetrip_status")
                }
              />
              <InfoButton
                clickHandler={() => Router.push("/request_ride/report_issue")}
                heading={"Report safety issue"}
                subHeading={
                  "Report a safety issue that you encountered in the trip."
                }
                className={
                  "border-b-[1px] pb-5 font-bold  hover:border-gray-400  hover:duration-700"
                }
                icon={"requstRideReport"}
              />
              <InfoButton
                heading={"911 assistance"}
                clickHandler={() => Router.push("/request_ride/assitance")}
                subHeading={
                  "Contact 911 and share your location with the authorities in an emergency."
                }
                className={
                  "border-b-[1px] border-b-transparent pb-5 font-bold hover:border-gray-400  hover:duration-700"
                }
                icon={"requstRideAsset"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SafetyToolkitView;
