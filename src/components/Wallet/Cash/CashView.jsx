import Radio from "@/components/Forms/Radio";

const CashView = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  const RadioList = () => {
    const list = [];
    let value = [25, 50, 100];
    for (let i = 0; i < value.length; i++) {
      list[i] = (
        <div className="list mb-6 flex items-center gap-x-4">
          <Radio
            value={value[i]}
            changeHandler={changeHandler}
            className="!p-0"
          />
          <span className="pr-3 text-lg font-medium text-black dark:text-white">
            {value[i]} USD
          </span>
        </div>
      );
    }
    return list;
  };

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:mb-[30px] 2xl:h-[450px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <a
                    href="./report_safty_issue.html"
                    className="mt-[7px] 2xs:mt-1"
                  >
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={36} height={36} rx={4} fill="#FFFEFD" />
                      <path
                        d="M25 17.0003H13.14L16.77 12.6403C16.9397 12.4361 17.0214 12.1728 16.997 11.9084C16.9726 11.6439 16.8442 11.4 16.64 11.2303C16.4358 11.0605 16.1725 10.9789 15.9081 11.0033C15.6436 11.0276 15.3997 11.1561 15.23 11.3603L10.23 17.3603C10.1964 17.408 10.1663 17.4581 10.14 17.5103C10.14 17.5603 10.14 17.5903 10.07 17.6403C10.0247 17.7549 10.0009 17.877 10 18.0003C10.0009 18.1236 10.0247 18.2456 10.07 18.3603C10.07 18.4103 10.07 18.4403 10.14 18.4903C10.1663 18.5424 10.1964 18.5926 10.23 18.6403L15.23 24.6403C15.324 24.7532 15.4418 24.8439 15.5748 24.9062C15.7079 24.9684 15.8531 25.0005 16 25.0003C16.2337 25.0007 16.4601 24.9194 16.64 24.7703C16.7413 24.6863 16.825 24.5832 16.8863 24.4669C16.9477 24.3505 16.9855 24.2232 16.9975 24.0922C17.0096 23.9613 16.9957 23.8292 16.9567 23.7036C16.9176 23.578 16.8542 23.4613 16.77 23.3603L13.14 19.0003H25C25.2652 19.0003 25.5196 18.8949 25.7071 18.7074C25.8946 18.5198 26 18.2655 26 18.0003C26 17.7351 25.8946 17.4807 25.7071 17.2932C25.5196 17.1056 25.2652 17.0003 25 17.0003Z"
                        fill="#29225E"
                      />
                    </svg>
                  </a>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add Cash
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Choose amount
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  Plan ahead with GetRyd Cash. You can use it with coupons or
                  other promos.
                </p>
              </div>
              {/* radion button List  */}
              <div className="radio_wrapper">
                {RadioList()}

                <div className="mt-10">
                  <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                    GetRyd Cash
                  </p>
                  <div className="mt-3 mb-6 flex items-center justify-between">
                    <span className="pr-3 text-sm font-medium text-black dark:text-white">
                      Automatiocally add GetRyd cash when your balance is lower
                      than 15 USD.
                    </span>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultValue=""
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 rounded-full  bg-gray-2 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-primary-500 after:transition-all after:content-[''] peer-checked:bg-primary-500 peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              onclick="location.href='./reservation_confirm.html'"
              className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
            >
              Check Out
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CashView;
