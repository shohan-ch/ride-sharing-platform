import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";
import Router from "next/router";
const BusinessEmailView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border  bg-white pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-screen 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full dark:border-[#2C2C35]">
              <div className="pickup_header mb-10 flex pl-5 md:pr-[76px] lg:pr-[30px] 2xs:mb-3">
                <Link href="/wallet/business_profile">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Business Email
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-5 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  What is your businees email?
                </p>
              </div>
              <div className="form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="px-4 sm:mb-8 2xs:mb-4">
                    <InputField label="Business email" />
                  </div>
                  <div className="mx-auto mb-16 space-y-4 lg:pt-4">
                    <div className="absolute left-0 right-0 mx-4 md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                      <Button
                        color="blue"
                        iconPosition="right"
                        iconName="rightArrow"
                        handler={() => Router.push("wallet")}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessEmailView;
