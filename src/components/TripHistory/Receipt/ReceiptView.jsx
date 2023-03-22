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
                <button
                  onclick="location.href=''"
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4690_2000)">
                      <path
                        d="M3.35599 6.07812C2.72547 6.23679 2.17458 6.62023 1.80683 7.15642C1.43908 7.69261 1.27978 8.34463 1.35887 8.98998C1.43795 9.63534 1.74997 10.2296 2.2363 10.6611C2.72264 11.0927 3.34981 11.3317 3.99999 11.3335H4.66666M7.99999 14.6668V8.66679V14.6668ZM7.99999 14.6668L6.33333 13.3335L7.99999 14.6668ZM7.99999 14.6668L9.66666 13.3335L7.99999 14.6668Z"
                        stroke="#1A1A1A"
                        className="dark:stroke-white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5533 4.75864C10.3255 3.85636 9.76306 3.07447 8.98009 2.57148C8.19712 2.06849 7.25219 1.88204 6.33684 2.04991C5.4215 2.21779 4.60423 2.72743 4.05071 3.47553C3.4972 4.22364 3.24884 5.15422 3.356 6.07864C3.356 6.07864 3.458 6.66664 3.66667 6.99997"
                        stroke="#1A1A1A"
                        className="dark:stroke-white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3333 11.3332C11.804 11.3328 12.2693 11.2328 12.6986 11.0397C13.1278 10.8466 13.5113 10.5648 13.8238 10.2128C14.1363 9.86082 14.3707 9.44664 14.5116 8.99752C14.6525 8.54841 14.6966 8.07455 14.6412 7.60713C14.5857 7.13972 14.4319 6.68935 14.1898 6.28566C13.9478 5.88198 13.623 5.53414 13.2368 5.26503C12.8506 4.99592 12.4118 4.81165 11.9493 4.72434C11.4868 4.63704 11.011 4.64868 10.5533 4.7585L9.66666 4.99984"
                        stroke="#1A1A1A"
                        className="dark:stroke-white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4690_2000">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-2">Download PDF</span>
                </button>
                <button
                  onclick="location.href=''"
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    className="dark:fill-white inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4690_4352)">
                      <path
                        d="M2.77809 3.00012H14.0634L8.42858 8.62715L2.77809 3.00012Z"
                        fill="#1A1A1A"
                        stroke="#1A1A1A"
                        strokeWidth="0.666667"
                        className="dark:fill-white dark:stroke-white"
                      />
                      <path
                        d="M15.5267 3.28467L9.05557 9.72911C8.88902 9.89467 8.66373 9.9876 8.4289 9.9876C8.19407 9.9876 7.96878 9.89467 7.80223 9.72911L1.3889 3.33356C1.36918 3.40602 1.35873 3.48069 1.35779 3.55578V12.4447C1.35779 12.6804 1.45144 12.9065 1.61814 13.0732C1.78484 13.2399 2.01093 13.3336 2.24668 13.3336H14.6911C14.9269 13.3336 15.153 13.2399 15.3197 13.0732C15.4864 12.9065 15.58 12.6804 15.58 12.4447V3.55578C15.5765 3.46318 15.5585 3.37171 15.5267 3.28467ZM2.85557 12.4447H2.23779V11.8091L5.4689 8.60467L6.09557 9.23134L2.85557 12.4447ZM14.6822 12.4447H14.06L10.82 9.23134L11.4467 8.60467L14.6778 11.8091L14.6822 12.4447Z"
                        fill="#1A1A1A"
                        className="dark:fill-white dark:stroke-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4690_4352">
                        <rect
                          width={16}
                          height={16}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-2">Resend Email</span>
                </button>
                <button
                  onclick="location.href=''"
                  className="rounded-5 shadow-one dark:shadow-dark group flex w-full items-center justify-center bg-gray-3 py-4 px-6 text-base font-semibold text-black hover:bg-primary-hover hover:text-white dark:bg-dark-2 dark:text-white dark:hover:bg-[#29225E]"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    className="dark:fill-white dark:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.574 2.87277C5.5881 2.19516 6.78036 1.8335 8.00001 1.8335C8.80983 1.8335 9.61172 1.993 10.3599 2.30291C11.1081 2.61281 11.7879 3.06704 12.3605 3.63967C12.9331 4.2123 13.3874 4.89211 13.6973 5.64028C14.0072 6.38846 14.1667 7.19034 14.1667 8.00016C14.1667 9.21981 13.805 10.4121 13.1274 11.4262C12.4498 12.4403 11.4867 13.2307 10.3599 13.6974C9.23308 14.1642 7.99317 14.2863 6.79696 14.0483C5.60074 13.8104 4.50195 13.2231 3.63952 12.3607C2.7771 11.4982 2.18978 10.3994 1.95184 9.20322C1.7139 8.007 1.83602 6.76709 2.30276 5.64028C2.7695 4.51347 3.55989 3.55037 4.574 2.87277ZM8.82497 11.4918C9.04376 11.273 9.16668 10.9762 9.16668 10.6668V7.3335C9.16668 7.02408 9.04376 6.72733 8.82497 6.50854C8.75714 6.44071 8.68182 6.38209 8.60094 6.3335C8.68182 6.2849 8.75714 6.22628 8.82497 6.15845C9.04376 5.93966 9.16668 5.64292 9.16668 5.3335C9.16668 5.10275 9.09826 4.87719 8.97006 4.68533C8.84187 4.49347 8.65966 4.34394 8.44648 4.25564C8.2333 4.16733 7.99872 4.14423 7.77241 4.18925C7.5461 4.23426 7.33822 4.34538 7.17506 4.50854C7.0119 4.6717 6.90078 4.87958 6.85576 5.10589C6.81075 5.3322 6.83385 5.56678 6.92215 5.77996C7.01046 5.99314 7.15999 6.17535 7.35185 6.30354C7.36738 6.31392 7.38313 6.32391 7.39909 6.33349C7.31821 6.38209 7.24289 6.44071 7.17506 6.50854C6.95626 6.72733 6.83335 7.02408 6.83335 7.3335V10.6668C6.83335 10.9762 6.95626 11.273 7.17506 11.4918C7.39385 11.7106 7.6906 11.8335 8.00001 11.8335C8.30943 11.8335 8.60618 11.7106 8.82497 11.4918Z"
                      fill="#1A1A1A"
                      stroke="#1A1A1A"
                      className="dark:fill-white dark:stroke-white"
                    />
                  </svg>
                  <span className="ml-2">Review my fees and fares</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
