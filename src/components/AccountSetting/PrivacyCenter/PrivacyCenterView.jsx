import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const PrivacyCenterView = () => {
  const clickHandeler = () => {
    console.log("button click");
  };
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[400px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[480px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="flex items-center bg-bg-color pt-2 pb-[25px] pl-5  dark:bg-dark-bg">
              <Link href="/help/payment_option">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
              <h2 className="mx-auto font-extrabold  text-black dark:text-white lg:ml-[100px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                Privacy Center
              </h2>
            </div>
            <div className="bg-bg-color px-5 dark:bg-dark-bg dark:text-white ">
              <div className="">
                <p className="mb-9 font-bold dark:text-white md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Take control of your privacy and learn how we protect it{" "}
                </p>

                <div className="mt-9 md:mt-8">
                  <InfoButton
                    heading={"Location"}
                    subHeading={"Update your location sharing preferences"}
                    icon={"helpLocation"}
                    iconTwo={"rightGrayArrow"}
                    className={"items-center"}
                  />
                </div>
                <InfoButton
                  heading={"Notifications"}
                  subHeading={
                    "Control what messages you receive from GetRyd app"
                  }
                  icon={"helpNotification"}
                  iconTwo={"rightGrayArrow"}
                  className={"items-center"}
                />
                {/* <div className="pt-10 ">
                  <Button color="blue" handler={clickHandeler}>
                    Next
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyCenterView;
