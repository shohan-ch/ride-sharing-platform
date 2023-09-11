import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const VerificationView = () => {
  const clickHandeler = () => {
    Router.push("/account_setting/verification_form");
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
        </div>
      </section>
    </>
  );
};

export default VerificationView;
