import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Button from "../Utils/Button/Button";
import NavigateButon from "../Utils/Button/NavigateButon";
import ProfileInformation from "./ProfileInformation";
import Router from "next/router";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-white pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[480px] 3xl:h-[760px] 2xs:pt-0">
              <div className="pickup_header mb-10 flex pl-5 md:px-6 lg:pr-8 2xs:mb-5 2xs:pr-3">
                <Link href="/trip_history/details">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>

                <h2 className=" mx-auto mt-2 inline-block text-center  font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Rider Profile
                </h2>

                <NavigateButon
                  isActive={true}
                  handler={() => Router.push("/rider_profile/edit")}
                >
                  Edit
                </NavigateButon>
              </div>
              <ProfileInformation />
              <div className="list mb-1 flex gap-[15px] bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                <div className="flex items-center">
                  <IconSvg name={"profileMobile"} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold dark:text-white">
                    Phone Number{" "}
                    <span className="text-[#4DAA6C]">Verified</span>
                  </h3>
                  <p className="text-xs text-gray-light dark:text-white/60">
                    +1 307 215532
                  </p>
                </div>
              </div>
              <a href="./rider_verify_email.html">
                <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                  <div className="flex items-center">
                    <IconSvg name={"profileMail"} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold dark:text-white">
                      Email <span className="text-[#EC1D1D]">Unverified</span>
                    </h3>
                    <p className="text-xs text-gray-light dark:text-white/60">
                      sayem@rootsoftit.com
                    </p>
                  </div>
                </div>
              </a>
              <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                <div className="flex items-center">
                  <IconSvg name={"lock"} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold dark:text-white">
                    Password
                  </h3>
                  <p className="text-xs text-gray-light dark:text-white/60">
                    **********
                  </p>
                </div>
              </div>
              <div className="list mb-1 flex gap-[15px]  bg-white px-2 py-3 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 md:mb-2 md:h-[80px] md:pl-[30px] lg:h-[73px] lg:pl-[20px] 2xs:h-[63px] 2xs:pl-5">
                <div className="flex items-center">
                  <IconSvg name={"profileCash"} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold dark:text-white">
                    Default Payment Method
                  </h3>
                  <p className="text-xs text-gray-light dark:text-white/60">
                    Personal PayPal
                  </p>
                </div>
              </div>
              <div className="btn-list space-y-3 px-5">
                <Button color="gray" iconName="facebook" iconPosition="left">
                  Add Facebook account
                </Button>
                <Button color="gray" iconName="google" iconPosition="left">
                  Add Google account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
