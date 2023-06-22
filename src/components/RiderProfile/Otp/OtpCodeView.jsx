import Link from "next/link";
import Button from "@/components/Utils/Button/Button";

const OtpCodeView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border  bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-screen 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full dark:border-[#2C2C35]">
              <div className="pickup_header mb-10 flex md:pl-[16px] md:pr-[76px] lg:pl-0 lg:pr-[30px] 2xs:mb-3 2xs:pr-4 2xs:pl-0">
                <Link href="/rider_profile/verify_email">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Verify Code
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  OTP Verification
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  Please enter the OTP verification code we sent to your email
                  address
                </p>
              </div>
              <div>
                <form>
                  <input
                    maxLength={4}
                    defaultValue=""
                    id="under_textInput"
                    className="under_textInput dark:under_textInputDark focus:text-primary-500 dark:text-gray-2 sm:mb-10 lg:my-10 lg:mx-auto 2xs:float-left 2xs:mt-0 2xs:mb-10"
                  />

                  <Button color="blue" handler={() => alert(123)}>
                    Verify Code
                  </Button>
                </form>
                <p className="text-center dark:text-gray-2 lg:mt-8 lg:text-base 2xs:text-center">
                  Didn’t received code?
                  <span className="ml-8 font-bold 2xs:ml-4">
                    <a
                      href="#"
                      className="text-primary-500 underline decoration-primary-500 underline-offset-4 dark:text-gray-2 dark:decoration-gray-2"
                    >
                      Resend Now
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OtpCodeView;
