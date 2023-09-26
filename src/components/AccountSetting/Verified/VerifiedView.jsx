import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const VerifiedView = () => {
  const clickHandeler = () => {
    console.log("button click");
    Router.push("/account_setting/security");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color py-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div
            className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-2 sm:pt-0
            sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-full 2xs:px-0 2xs:pt-0 2xs:text-left"
          >
            <div className="px-5 pt-2 pb-[25px] dark:bg-dark-2 md:pb-10">
              <div className="mb-12 flex items-center">
                <Link href="/account_setting/verification_method">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-white 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  2-step verification
                </h2>
              </div>
              <div>
                <div className="mb-8 flex items-center border-b-[1px] border-[#F6F6F6] pb-5 dark:border-[#2C2C35]">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h1 className="mb-[2px]  text-[16px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                        2-step verification{" "}
                        <span className="rounded-2xl bg-[#4DAA6C] py-1 px-2 text-[16px] text-white">
                          On
                        </span>
                      </h1>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        When this is on, you will be asked for your password and
                        verification code when you sign in to your account
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-8 border-b-[1px] border-[#F6F6F6] pb-5 dark:border-[#2C2C35]">
                    <div>
                      <div className="flex justify-between">
                        <h1 className="mb-[2px]  text-[16px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                          Delivery Settings
                        </h1>
                        <a href="./varify_code_from_email.html">
                          <h1 className="mb-[2px]  text-[16px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                            Edit
                          </h1>
                        </a>
                      </div>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        Code will be sent to +1 325 425125 via SMS
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 pb-5">
                    <div>
                      <div
                        className="flex cursor-pointer justify-between"
                        onClick={() =>
                          Router.push("/account_setting/backup_codes")
                        }
                      >
                        <h1 className="mb-[2px]  text-[16px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                          Backup Codes
                        </h1>
                        <a href="./backup_codes.html">
                          <h1 className="mb-[2px]  text-[16px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                            View
                          </h1>
                        </a>
                      </div>
                      <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1  md:font-medium ">
                        Save these backup codes in case you lose your phone.{" "}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pt-10 ">
                      <Button
                        handler={clickHandeler}
                        color={"gray"}
                        className="!border-[#EAEAEA]"
                      >
                        Turn Off
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifiedView;
