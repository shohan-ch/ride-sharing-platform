import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";

import Link from "next/link";
export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative  border bg-gray-1 pr-4  pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3">
                <Link href="/trip_history/report_safty_isuue">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Help
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Call driver about a lost item
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  Enter your phone number to get connected to the driver. Your
                  driver, John Smith Knight, won’t be able to see this number.
                </p>
              </div>
              {/* Form */}
              <form action="#">
                <div className="px-1 sm:mb-8 2xs:mb-4">
                  <InputField
                    label="Your mobile number"
                    placeholder="Mobile Number"
                    type="text"
                  />
                </div>
              </form>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  US $0.00 return fee
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  Your account is charged US $0.00 when the driver returns your
                  item. 100% of this fee goes to driver for their time.
                </p>
              </div>
            </div>

            <Button color="blue" iconPosition="left" iconName="mobile">
              {" "}
              Submit Info
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
