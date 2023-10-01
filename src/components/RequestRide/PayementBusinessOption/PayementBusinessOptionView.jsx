import PaymentButton from "@/components/Utils/Button/PaymentButton";
import IconSvg from "@/icons/IconSvg";
import Router from "next/router";

const PayementBusinessOptionView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 py-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-2 sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[25px] dark:bg-dark-2 md:pb-10">
              <div className="mb-5">
                <h2 className="mt-8 font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Payment Options
                </h2>
              </div>
              <div>
                <div className="mb-6 flex items-center justify-between gap-2 rounded-lg bg-[#F0F0F0] p-3 dark:bg-dark-2">
                  <PaymentButton
                    handleClick={() =>
                      Router.push("/request_ride/payment_personal")
                    }
                  >
                    Personal
                  </PaymentButton>

                  <PaymentButton
                    active={true}
                    handleClick={() =>
                      Router.push("/request_ride/payment_business")
                    }
                  >
                    Business
                  </PaymentButton>
                </div>
                <div className="mb-16 rounded-lg bg-bg-color p-5 pb-4 dark:bg-dark-2">
                  <div className="center mb-4 flex gap-2">
                    <IconSvg name={"requestRideBag"} />

                    <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                      Get more with Business Travel
                    </h2>
                  </div>
                  <div className="">
                    <p className="mb-2 text-[17px] font-medium text-black dark:text-white 2xs:text-[14px]">
                      &gt; Quicker, Easier, Expensing
                    </p>
                    <p className="mb-2 text-[17px] font-medium text-black dark:text-white 2xs:text-[14px]">
                      &gt; Kepp work trips separate
                    </p>
                    <p className="text-[17px] font-medium text-black dark:text-white 2xs:text-[14px]">
                      &gt; Gert Travel reports
                    </p>
                  </div>
                </div>
                <button
                  onclick="location.href=''"
                  className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
                >
                  Turn on
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayementBusinessOptionView;
