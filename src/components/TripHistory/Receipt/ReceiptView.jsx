import Button from "@/components/Utils/Button/Button";
import Link from "next/link";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[760px]">
              <div className="pickup_header mb-10  flex md:pr-[86px]  lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <Link href="/trip_history/details">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Receipt
                </h2>
              </div>
              {/* Item content */}

              <div className="payment_section mb-[60px]">
                <div className="mb-5 text-right text-[16px] text-gray-light dark:text-gray-2">
                  <p>Receipt #1234545</p>
                  <p>
                    <span> 19/05/2022,</span> <span>8:40 PM</span>
                  </p>
                </div>
                <div className="list dark:text-white flex items-center justify-between clear-right mb-6">
                  <h4 className="dark:text-white pr-3 text-2xl font-bold text-black">
                    Total
                  </h4>
                  <h2 className="text-[28px] font-bold">US $23.65</h2>
                </div>
                <hr className="border-b border-[#1A1A1A]" />
                <div className="list dark:text-gray-2 flex items-center justify-between clear-right mt-5 mb-6">
                  <h4 className="pr-3 text-[16px] text-gray-light  dark:text-white">
                    Trip fare
                  </h4>
                  <h2 className="text-[16px]">US $23.65</h2>
                </div>
                <hr className="border-b border-[#1A1A1A]" />
                <div className="list dark:text-gray-2 flex items-center justify-between clear-right mt-5 mb-6">
                  <h4 className="pr-3 text-[16px] text-gray-light  dark:text-white">
                    Sub-Total
                  </h4>
                  <h2 className="text-[16px]">US $23.65</h2>
                </div>
                <div className="list dark:text-gray-2 flex items-center justify-between clear-right mt-5 mb-6">
                  <h4 className="pr-3 text-[16px] text-gray-light  dark:text-white">
                    Promotions
                  </h4>
                  <h2 className="text-[16px]">-US $23.65</h2>
                </div>
                <hr className="border-b border-[#1A1A1A]" />
                <h4 className="mt-5 pr-3 text-[18px] font-bold text-black dark:text-white">
                  Amount Charged
                </h4>
                <div className="list dark:text-gray-2 flex items-center justify-between clear-right mt-5 mb-6">
                  <h4 className="pr-3 text-[16px] text-gray-light  dark:text-white">
                    Paypal (Personal)
                  </h4>
                  <h2 className="text-[16px]">US $23.65</h2>
                </div>
              </div>
              <div className="button_list lg:pt-4 mx-auto mb-16 space-y-2">
                <Button
                  color="gray"
                  iconPosition="left"
                  iconName="pdf"
                  className=" hover:bg-primary-hover hover:text-white"
                >
                  Download PDF
                </Button>

                <Button
                  color="gray"
                  iconPosition="left"
                  iconName="mail"
                  className=" hover:bg-primary-hover hover:text-white"
                >
                  Resend Email
                </Button>

                <Button
                  color="gray"
                  iconPosition="left"
                  iconName="alert"
                  className=" hover:bg-primary-hover hover:text-white"
                >
                  Review my fees and fares
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
