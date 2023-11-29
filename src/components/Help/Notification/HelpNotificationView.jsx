import InfoButton from "@/components/Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

const HelpNotificationView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="relative bg-bg-color pt-5 pb-5 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden bg-bg-color dark:bg-dark-bg md:h-[490px] lg:h-[420px] lg:rounded-b-3xl xl:h-[650px]  2xl:h-[490px] 3xl:h-[770px] ">
            <div className="border-0 sm:text-left 2xs:px-0 2xs:text-left">
              <div className="  pt-[5px] pb-[30px] text-center  md:pb-10">
                {/* <Link href="/help/payment_option">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link> */}
                <h2 className="mx-auto text-center font-extrabold text-black dark:text-white 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Notifications
                </h2>
              </div>
              <div className="mt-8 border-b-[1px] border-[#F6F6F6] px-5 pt-[25px] dark:text-white md:mt-0 md:border-0 md:pt-0 ">
                <h1 className="pt-10 text-[16px] font-bold">Today</h1>
                <div className=" md:divide-y-[1px]">
                  <InfoButton
                    heading={"10% off with Paypal"}
                    subHeading={
                      "Pay with PayPal on next 3 trips & get 10% off. Terms and condition applied."
                    }
                    icon={"helpPercent"}
                  />
                  <InfoButton
                    heading={"Ride Completed"}
                    subHeading={
                      "You have completed your trip with John Smith Knight at  9:55 PM. Your fare was US $25.65."
                    }
                    icon={"helpCheck"}
                    className={"pt-4"}
                  />
                </div>
              </div>
              <div className="bg-white px-5 pt-12 pb-4 dark:bg-dark-bg">
                <h1 className="pb-10 text-[16px] font-bold dark:text-gray-2">
                  24/05/2022
                </h1>
                <div className=" md:divide-y-[1px]">
                  <InfoButton
                    heading={"Upload your profile photo"}
                    subHeading={
                      "Your photo helps driver to identify you for safer rides.Upload Photo"
                    }
                    icon={"helpProfile"}
                  />

                  <InfoButton
                    heading={"Reservation confirmed"}
                    subHeading={
                      "You have made a reservation for 23/05/2022 at 10:00 AM. Get ready to picked up by our driver at scheduled time."
                    }
                    icon={"helpConfirm"}
                    className={"pt-4"}
                  />

                  <InfoButton
                    heading={"Ride Cancelled"}
                    subHeading={
                      " Your ride was cancelled due to unavailability of drivers. Please try again after some time."
                    }
                    icon={"helpWarning"}
                    className={"pt-4"}
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

export default HelpNotificationView;
