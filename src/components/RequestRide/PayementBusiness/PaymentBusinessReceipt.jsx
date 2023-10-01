const PaymentBusinessReceipt = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="2xs:text-18 mb-3 font-extrabold text-black dark:text-gray-2 2xl:text-22">
          GetRyd Cash
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <svg
              width={18}
              height={18}
              viewBox="0 0 16 17"
              fill="none"
              className="-mt-[6px] inline-block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_829_15018)">
                <path
                  d="M8.00001 0.166748V5.16675C8.00001 5.60878 8.17561 6.0327 8.48817 6.34526C8.80073 6.65782 9.22465 6.83342 9.66668 6.83342H14.6667V15.1667C14.6667 15.6088 14.4911 16.0327 14.1785 16.3453C13.866 16.6578 13.442 16.8334 13 16.8334H3.00001C2.55798 16.8334 2.13406 16.6578 1.8215 16.3453C1.50894 16.0327 1.33334 15.6088 1.33334 15.1667V1.83341C1.33334 1.39139 1.50894 0.967464 1.8215 0.654903C2.13406 0.342343 2.55798 0.166748 3.00001 0.166748H8.00001ZM9.25001 0.583415V5.16675C9.25001 5.27726 9.29391 5.38324 9.37205 5.46138C9.45019 5.53952 9.55617 5.58342 9.66668 5.58342H14.25L9.25001 0.583415Z"
                  fill="#1A1A1A"
                  className="dark:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_829_15018">
                  <rect
                    width={16}
                    height={16}
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[16px] font-extrabold text-black dark:text-gray-2">
              Receipts to rootsoft@gmail
            </h1>
          </div>
          <svg
            width={10}
            height={15}
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:stroke-white"
              d="M1 9.5L5 5.5L1 1.5"
              stroke="#1A1A1A"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PaymentBusinessReceipt;
