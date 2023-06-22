const Summary = () => {
  return (
    <>
      <div className="item">
        <span className="mb-3 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-3 text-[14px] font-medium text-black">
          Business Class
        </span>
        <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
          USD $250.50
        </p>
        <p className="pt-2 text-sm font-normal text-gray-600 dark:text-gray-2">
          Mercedes-Benz E-Class or similar
        </p>
        <div className="item mb-2 flex justify-between pt-4">
          <p>
            <span className="-mb-1 inline-block">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                className="fill-current text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4.33301C5 5.98701 6.346 7.33301 8 7.33301C9.654 7.33301 11 5.98701 11 4.33301C11 2.67901 9.654 1.33301 8 1.33301C6.346 1.33301 5 2.67901 5 4.33301ZM13.3333 13.9997H14V13.333C14 10.7603 11.906 8.66634 9.33333 8.66634H6.66667C4.09333 8.66634 2 10.7603 2 13.333V13.9997H13.3333Z"
                  fill="#1A1A1A"
                />
              </svg>
            </span>
            <span className="ml-2 inline-block text-[#5C5C5C] dark:text-[#CACACA] md:text-[16px] lg:text-[16px] 2xs:text-[16px]">
              Max 3 Passengers
            </span>
          </p>
        </div>
        <div className="item mb-2 flex justify-between">
          <p>
            <span className="-mb-1 inline-block">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                className="fill-current"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6665 3.33301V2.66634C10.6665 2.31272 10.526 1.97358 10.276 1.72353C10.0259 1.47348 9.68679 1.33301 9.33317 1.33301H6.6665C6.31288 1.33301 5.97374 1.47348 5.72369 1.72353C5.47365 1.97358 5.33317 2.31272 5.33317 2.66634V3.33301C4.62593 3.33301 3.94765 3.61396 3.44755 4.11406C2.94746 4.61415 2.6665 5.29243 2.6665 5.99967V13.333C2.6665 13.6866 2.80698 14.0258 3.05703 14.2758C3.30708 14.5259 3.64622 14.6663 3.99984 14.6663H11.9998C12.3535 14.6663 12.6926 14.5259 12.9426 14.2758C13.1927 14.0258 13.3332 13.6866 13.3332 13.333V5.99967C13.3332 5.29243 13.0522 4.61415 12.5521 4.11406C12.052 3.61396 11.3737 3.33301 10.6665 3.33301ZM6.6665 2.66634H9.33317V3.33301H6.6665V2.66634ZM7.99984 5.99967L9.33317 7.33301L7.99984 8.66634L6.6665 7.33301L7.99984 5.99967ZM11.9998 13.333H3.99984V10.9997H5.33317H5.99984H11.9998V13.333ZM11.9998 9.99967H3.99984V5.99967C3.99984 5.64605 4.14031 5.30691 4.39036 5.05687C4.64041 4.80682 4.97955 4.66634 5.33317 4.66634H10.6665C11.0201 4.66634 11.3593 4.80682 11.6093 5.05687C11.8594 5.30691 11.9998 5.64605 11.9998 5.99967V9.99967Z"
                  fill="#1A1A1A"
                />
              </svg>
            </span>
            <span className="ml-2 inline-block text-[#5C5C5C] dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Max 2 bags 30kg
            </span>
          </p>
        </div>
        <div className="item mb-2 flex justify-between">
          <p>
            <span className="-mb-1 inline-block">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                className="fill-current dark:text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 2.66634H11.3335V1.99967C11.3335 1.82286 11.2633 1.65329 11.1382 1.52827C11.0132 1.40325 10.8436 1.33301 10.6668 1.33301C10.49 1.33301 10.3204 1.40325 10.1954 1.52827C10.0704 1.65329 10.0002 1.82286 10.0002 1.99967V2.66634H6.00016V1.99967C6.00016 1.82286 5.92992 1.65329 5.8049 1.52827C5.67988 1.40325 5.51031 1.33301 5.3335 1.33301C5.15669 1.33301 4.98712 1.40325 4.86209 1.52827C4.73707 1.65329 4.66683 1.82286 4.66683 1.99967V2.66634H3.3335C2.80306 2.66634 2.29436 2.87705 1.91928 3.25213C1.54421 3.6272 1.3335 4.13591 1.3335 4.66634V12.6663C1.3335 13.1968 1.54421 13.7055 1.91928 14.0806C2.29436 14.4556 2.80306 14.6663 3.3335 14.6663H12.6668C13.1973 14.6663 13.706 14.4556 14.081 14.0806C14.4561 13.7055 14.6668 13.1968 14.6668 12.6663V4.66634C14.6668 4.13591 14.4561 3.6272 14.081 3.25213C13.706 2.87705 13.1973 2.66634 12.6668 2.66634ZM13.3335 12.6663C13.3335 12.8432 13.2633 13.0127 13.1382 13.1377C13.0132 13.2628 12.8436 13.333 12.6668 13.333H3.3335C3.15669 13.333 2.98712 13.2628 2.86209 13.1377C2.73707 13.0127 2.66683 12.8432 2.66683 12.6663V7.99967H13.3335V12.6663ZM13.3335 6.66634H2.66683V4.66634C2.66683 4.48953 2.73707 4.31996 2.86209 4.19494C2.98712 4.06991 3.15669 3.99967 3.3335 3.99967H4.66683V4.66634C4.66683 4.84315 4.73707 5.01272 4.86209 5.13775C4.98712 5.26277 5.15669 5.33301 5.3335 5.33301C5.51031 5.33301 5.67988 5.26277 5.8049 5.13775C5.92992 5.01272 6.00016 4.84315 6.00016 4.66634V3.99967H10.0002V4.66634C10.0002 4.84315 10.0704 5.01272 10.1954 5.13775C10.3204 5.26277 10.49 5.33301 10.6668 5.33301C10.8436 5.33301 11.0132 5.26277 11.1382 5.13775C11.2633 5.01272 11.3335 4.84315 11.3335 4.66634V3.99967H12.6668C12.8436 3.99967 13.0132 4.06991 13.1382 4.19494C13.2633 4.31996 13.3335 4.48953 13.3335 4.66634V6.66634Z"
                  fill="#1A1A1A"
                />
              </svg>
            </span>
            <span className="ml-2 inline-block text-[#5C5C5C] dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              8th November, 8:00 PM
            </span>
          </p>
        </div>
        <div className="ml-1 pt-3">
          <div className="">
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-black dark:bg-white"></div>
                </div>
                <div className="h-full w-px bg-gray-300" />
              </div>
              <div className="pb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  Pickup
                </p>
                <p className="text-gray-700 dark:text-[#CACACA]">
                  Fairmont San
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-black dark:bg-white"></div>
                </div>
              </div>
              <div>
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  Destination
                </p>
                <p className="text-gray-700 dark:text-[#CACACA]">
                  Boston International
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Summary;
