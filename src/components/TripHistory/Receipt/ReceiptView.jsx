import Button from "@/components/Utils/Button/Button";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[760px]">
              <div className="pickup_header mb-10  flex md:pr-[86px]  lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <a href="./trip_details.html" className="mt-[7px] 2xs:mt-1">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={36} height={36} rx={4} fill="#F8F8F8" />
                      <path
                        d="M25 16.9998H13.14L16.77 12.6398C16.9397 12.4356 17.0214 12.1723 16.997 11.9079C16.9726 11.6434 16.8442 11.3995 16.64 11.2298C16.4358 11.06 16.1725 10.9784 15.9081 11.0028C15.6437 11.0271 15.3997 11.1556 15.23 11.3598L10.23 17.3598C10.1964 17.4075 10.1663 17.4576 10.14 17.5098C10.14 17.5598 10.14 17.5898 10.07 17.6398C10.0247 17.7544 10.0009 17.8765 10 17.9998C10.0009 18.1231 10.0247 18.2451 10.07 18.3598C10.07 18.4098 10.07 18.4398 10.14 18.4898C10.1663 18.5419 10.1964 18.5921 10.23 18.6398L15.23 24.6398C15.324 24.7527 15.4418 24.8434 15.5748 24.9057C15.7079 24.9679 15.8531 25 16 24.9998C16.2337 25.0002 16.4601 24.9189 16.64 24.7698C16.7413 24.6858 16.825 24.5827 16.8863 24.4664C16.9477 24.35 16.9855 24.2227 16.9975 24.0918C17.0096 23.9608 16.9957 23.8287 16.9567 23.7031C16.9176 23.5775 16.8542 23.4608 16.77 23.3598L13.14 18.9998H25C25.2652 18.9998 25.5196 18.8944 25.7071 18.7069C25.8946 18.5194 26 18.265 26 17.9998C26 17.7346 25.8946 17.4802 25.7071 17.2927C25.5196 17.1051 25.2652 16.9998 25 16.9998Z"
                        fill="#29225E"
                      />
                    </svg>
                  </a>
                </div>
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
