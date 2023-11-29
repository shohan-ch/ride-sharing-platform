import InfoButton from "@/components/Utils/Button/InfoButton";
import Profile from "./Profile";
import Link from "next/link";
import Button from "@/components/Utils/Button/Button";
import Router from "next/router";
const AccountSettingview = () => {
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="scroll_div h-full overflow-y-auto overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:text-left   lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[650px] 2xs:pt-0">
            <div className="flex items-center justify-between bg-bg-color pt-2 pb-[25px]  dark:bg-dark-bg md:pb-10">
              {/* <Link href="/help">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link> */}

              <h2 className="mx-auto text-center font-extrabold text-black dark:text-white  2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                Account Settings
              </h2>
            </div>
            <div className="bg-bg-color px-5 pt-8 dark:bg-dark-bg md:pt-10">
              <div className="">
                {/* Profile */}
                <Profile />

                <InfoButton
                  heading={"My Info"}
                  subHeading={"Edit email, password.."}
                  icon={"helpCheck2"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/rider_profile")}
                />

                <InfoButton
                  heading={"My Places"}
                  subHeading={"Save your favourite locations"}
                  icon={"myPlace"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/account_setting/my_places")}
                />

                <InfoButton
                  heading={"My Preferences"}
                  subHeading={"Make your journey special"}
                  icon={"setting"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/my_preference")
                  }
                />

                <InfoButton
                  heading={"Trusted Contacts"}
                  subHeading={"Share all your journeys with others"}
                  icon={"hands"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/trusted_contact")
                  }
                />

                <InfoButton
                  heading={"Security"}
                  subHeading={"Control your account with 2-step verification"}
                  icon={"security"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/account_setting/security")}
                />

                <InfoButton
                  heading={"Ride Accessibility"}
                  subHeading={"Let us know if you have any special needs"}
                  icon={"access"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/ride_accessibility")
                  }
                />

                <InfoButton
                  heading={"Privacy Center"}
                  subHeading={"Manage the data you share with us"}
                  icon={"privacy"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() =>
                    Router.push("/account_setting/privacy_center")
                  }
                />

                <InfoButton
                  heading={"Legal"}
                  subHeading={"Read all terms, policy &amp; licenses"}
                  icon={"legal"}
                  iconTwo={"rightGrayArrow"}
                  className="font-extrabold"
                  clickHandler={() => Router.push("/account_setting/legal")}
                />

                <Button color="gray" className="border bg-white">
                  Sign out
                </Button>

                <Button color="gray" className="border bg-white">
                  Delete my account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountSettingview;
