import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";

export default () => {
  return (
    <>
      <section className="sec items-center justify-center bg-gray-2 md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-gray-1 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex pl-5 md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:px-3">
                <Link href="/reserve/vehicles">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add optional info
                </h2>
              </div>
              {/* Item content */}
              <div className="mx-auto mt-8 bg-white px-5 py-8 dark:bg-dark-2  dark:text-white md:w-[668px] lg:mb-0 lg:w-[380px] 2xs:w-full">
                <div className="item mb-7 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <svg
                        className="fill-[#1A1A1A] dark:fill-white"
                        width={20}
                        height={20}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.6668 2.66536H11.3335V1.9987C11.3335 1.82189 11.2633 1.65232 11.1382 1.52729C11.0132 1.40227 10.8436 1.33203 10.6668 1.33203C10.49 1.33203 10.3204 1.40227 10.1954 1.52729C10.0704 1.65232 10.0002 1.82189 10.0002 1.9987V2.66536H6.00016V1.9987C6.00016 1.82189 5.92992 1.65232 5.8049 1.52729C5.67988 1.40227 5.51031 1.33203 5.3335 1.33203C5.15669 1.33203 4.98712 1.40227 4.86209 1.52729C4.73707 1.65232 4.66683 1.82189 4.66683 1.9987V2.66536H3.3335C2.80306 2.66536 2.29436 2.87608 1.91928 3.25115C1.54421 3.62622 1.3335 4.13493 1.3335 4.66536V12.6654C1.3335 13.1958 1.54421 13.7045 1.91928 14.0796C2.29436 14.4547 2.80306 14.6654 3.3335 14.6654H12.6668C13.1973 14.6654 13.706 14.4547 14.081 14.0796C14.4561 13.7045 14.6668 13.1958 14.6668 12.6654V4.66536C14.6668 4.13493 14.4561 3.62622 14.081 3.25115C13.706 2.87608 13.1973 2.66536 12.6668 2.66536ZM13.3335 12.6654C13.3335 12.8422 13.2633 13.0117 13.1382 13.1368C13.0132 13.2618 12.8436 13.332 12.6668 13.332H3.3335C3.15669 13.332 2.98712 13.2618 2.86209 13.1368C2.73707 13.0117 2.66683 12.8422 2.66683 12.6654V7.9987H13.3335V12.6654ZM13.3335 6.66536H2.66683V4.66536C2.66683 4.48855 2.73707 4.31898 2.86209 4.19396C2.98712 4.06894 3.15669 3.9987 3.3335 3.9987H4.66683V4.66536C4.66683 4.84218 4.73707 5.01174 4.86209 5.13677C4.98712 5.26179 5.15669 5.33203 5.3335 5.33203C5.51031 5.33203 5.67988 5.26179 5.8049 5.13677C5.92992 5.01174 6.00016 4.84218 6.00016 4.66536V3.9987H10.0002V4.66536C10.0002 4.84218 10.0704 5.01174 10.1954 5.13677C10.3204 5.26179 10.49 5.33203 10.6668 5.33203C10.8436 5.33203 11.0132 5.26179 11.1382 5.13677C11.2633 5.01174 11.3335 4.84218 11.3335 4.66536V3.9987H12.6668C12.8436 3.9987 13.0132 4.06894 13.1382 4.19396C13.2633 4.31898 13.3335 4.48855 13.3335 4.66536V6.66536Z" />
                      </svg>
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Pickup Date
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    Jun 6, 2022
                  </p>
                </div>
                <div className="item mb-7 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <svg
                        className="fill-[#1A1A1A] dark:fill-white dark:stroke-white"
                        width={20}
                        height={20}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2269_51296)">
                          <path
                            d="M8.48486 2.98438H7.48486V8.55034L11.0978 10.2675L11.5271 9.36428L8.48486 7.91841V2.98438Z"
                            strokeWidth="0.4"
                          />
                          <path
                            d="M8 0.5C3.85787 0.5 0.5 3.85787 0.5 8C0.5 12.1421 3.85787 15.5 8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85787 12.1421 0.5 8 0.5ZM8 14.5C4.41016 14.5 1.5 11.5898 1.5 8C1.5 4.41016 4.41016 1.5 8 1.5C11.5898 1.5 14.5 4.41016 14.5 8C14.5 11.5898 11.5898 14.5 8 14.5Z"
                            strokeWidth="0.4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2269_51296">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Pickup Time
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    8:45 PM
                  </p>
                </div>
                <div className="item mb-3 flex justify-between">
                  <p>
                    <span className="-mb-1 inline-block">
                      <svg
                        className="dark:fill-white/70 dark:stroke-white/70"
                        width={20}
                        height={20}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dark:stroke-white/5"
                          d="M8 14.6641C11.3137 14.6641 14 11.9778 14 8.66406C14 5.35035 11.3137 2.66406 8 2.66406C4.68629 2.66406 2 5.35035 2 8.66406C2 11.9778 4.68629 14.6641 8 14.6641Z"
                          stroke="#1A1A1A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="dark:stroke-white/70"
                          d="M8.00016 2.66536V1.33203M10.3335 6.33203L8.00016 8.66536L10.3335 6.33203ZM12.6668 12.6654L13.3335 14.6654L12.6668 12.6654ZM3.3335 12.6654L2.66683 14.6654L3.3335 12.6654ZM1.3335 3.33203L3.3335 1.33203L1.3335 3.33203ZM12.6668 1.33203L14.6668 3.33203L12.6668 1.33203Z"
                          stroke="#1A1A1A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                      Duration
                    </span>
                  </p>
                  <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                    2 Hour 38 Minutes
                  </p>
                </div>
              </div>
              <div className=" dext-whitt-8 me mx-auto mt-8 mb-5 px-5">
                <p className="mb-8 text-sm font-normal text-gray-600 dark:text-gray-3 sm:mb-5 2xs:mb-8">
                  Enter your flight number to ensure your chauffeur is waiting,
                  even if your flight is delayed.
                </p>
                <div className="">
                  <form action="#">
                    <div className="sm:mb-6 2xs:mb-4">
                      {/* <label
                        htmlFor="firstName"
                        className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                      >
                        Fight Number
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#040407] focus:shadow-md"
                        placeholder="Fight Number"
                      /> */}

                      <InputField
                        type="text"
                        label="Fight Number"
                        placeholder="Fight Number"
                        className="bg-white shadow-md"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                      >
                        Pickup Sign
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#040407] focus:shadow-md"
                        placeholder="Pickup Sign"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                      >
                        Notes for the chauffeur
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#040407] focus:shadow-md"
                        placeholder="Notes for the chauffeur"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                      >
                        Book for someone else
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#040407] focus:shadow-md"
                        placeholder="Book for someone else"
                      />
                    </div>
                    <div className="mt-2 sm:mb-6 2xs:mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                      >
                        Reference number
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#040407] focus:shadow-md"
                        placeholder="Reference number"
                      />
                      <p
                        id="helper-text-explanation"
                        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        The reference number appears on your invoice.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button color="blue" iconPosition="right" iconName="rightArrow">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
