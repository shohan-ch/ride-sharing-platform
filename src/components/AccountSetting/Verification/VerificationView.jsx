import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const VerificationView = () => {
  const clickHandeler = () => {
    console.log("button click");
  };
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div
            className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0
           sm:text-left lg:h-[300px] lg:rounded-3xl lg:pt-0 xl:h-[500px] 2xl:h-[350px] 3xl:h-[650px] 2xs:px-0 2xs:pt-0 2xs:text-left"
          >
            <div className="flex items-center pt-2 pb-[130px] pl-5 dark:bg-dark-bg md:pb-[84px]">
              <Link href="/account_setting/security">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>

              <h1 className="mx-auto font-extrabold text-black dark:text-white lg:ml-[80px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                2-step verification
              </h1>
            </div>
            <div className="mb-12 px-5 md:mb-7">
              <div className="">
                <img
                  className="mx-auto dark:hidden"
                  src="/assets/images/help/Group 183.jpg"
                  alt=""
                />
                <img
                  className="mx-auto hidden dark:block"
                  src="/assets/images/help/undraw_two_factor_authentication_namy 1.png"
                  alt=""
                />
              </div>
              <div className="mt-14 text-center">
                <h1 className="mb-2 text-[22px] font-bold text-[#1A1A1A] dark:text-white md:mb-4">
                  Security beyond your password{" "}
                </h1>
                <p className="px-11 text-[14px] text-gray-light dark:text-gray-2">
                  Add your most frequest places, such as To keep your account
                  more secure, we will ask you for your password and
                  verification code at sign-in
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 pt-10">
            <Button color="blue" handler={clickHandeler}>
              Set up now
            </Button>
          </div>

          {/* <div className="px-5 pt-10 md:">
            <button
              onclick="location.href='./2_step_verification2.html'"
              className="w-full rounded bg-[#29225E] px-[auto] py-[13px] text-[16px] font-bold text-bg-color  hover:bg-primary-hover dark:bg-[#493DA8]  dark:text-white dark:hover:bg-[#29225E]"
            >
              <span>Set up now</span>
            </button>
          </div> */}
        </div>
      </section>

      {/* <section className="sec items-center justify-center md:block md:h-full md:w-full  lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-6 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[490px] 3xl:h-[750px] 2xs:px-0  2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[30px] md:pb-7">
              <Link href="/help/payment_option">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>Z
            </div>
            <div className="mx-5">
              <img
                src="/assets/images/help/trusted_conact_banner.png"
                className="block w-full h-full px-5 mx-auto dark:hidden"
                alt=""
              />
              <img
                src="/assets/images/help/trusted_conact_banner_dark.png"
                className="mb-[50px] hidden h-full w-full px-5 dark:block md:mb-12"
                alt=""
              />
              <div className="mt-[50px] mb-9 text-center md:mt-12 md:mb-7">
                <h1 className="text-left text-2xl font-bold  text-[#1A1A1A] dark:text-white md:text-2xl">
                  Keep your friends or family updated during rides
                </h1>
              </div>
              <div>
                <div className="mb-[25px] flex items-center border-b-[1px] border-[#F6F6F6] pb-[25px] dark:border-[#2C2C35] md:mb-7  md:pb-7">
                  <img src="/assets/images/help/location.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Share trip status{" "}
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You will be able to share your live location with one or
                      more contacts during any GetRyd trip.{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-[50px] flex items-center md:mb-[100px]">
                  <img src="/assets/images/help/body.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Set your emergency contacts
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You can make a trusted contacted as an emergency contact.
                      GetRyd can call them if we can’t reach you, in case of an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <Button color="blue" handler={clickHandeler}>
                  Add Trusted Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default VerificationView;
