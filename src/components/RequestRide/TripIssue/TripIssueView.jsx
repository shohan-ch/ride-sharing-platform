import InfoButton from "@/components/Utils/Button/InfoButton";
import Link from "next/link";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";
const TripIssueView = () => {
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="scroll_div h-full overflow-y-auto overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:text-left   lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[650px] 2xs:pt-0">
            <div className="flex items-center justify-between bg-bg-color pt-2 pb-[25px] pl-5 dark:bg-dark-bg md:pb-10">
              <Link href="/help">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="bg-bg-color px-5 pt-8 dark:bg-dark-bg md:pt-0">
              <div className="">
                <p className="mb-9 font-bold dark:text-white md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  More driver &amp; trip issue
                </p>

                <InfoButton
                  heading={"Dangerous driving"}
                  icon={"requestRideDanger"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                />

                <InfoButton
                  heading={"Vehicle Related"}
                  icon={"requestRideVehicle"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/account_setting/my_places")}
                />

                <InfoButton
                  heading={"Driver Behaviour"}
                  icon={"requestRideBehaviour"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/my_preference")
                  }
                />

                <InfoButton
                  heading={"Navigation"}
                  icon={"requestRideNavigation"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/trusted_contact")
                  }
                />

                <InfoButton
                  heading={"Pickup/Dropoff"}
                  icon={"requestRidePickup"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/account_setting/security")}
                />

                <InfoButton
                  heading={"Payment Issue"}
                  icon={"requestRidePaymentIssue"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/ride_accessibility")
                  }
                />

                <InfoButton
                  heading={"Health and Hygiene"}
                  icon={"requestRideHealth"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/privacy_center")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripIssueView;
