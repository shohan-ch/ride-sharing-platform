import IconSvg from "@/icons/IconSvg";

const Details = () => {
  return (
    <>
      <div className="item mb-5 flex justify-between">
        <p>
          <span className="-mb-1 inline-block">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72693 3.15152C1.72693 2.66931 1.91849 2.20684 2.25946 1.86587C2.60044 1.52489 3.0629 1.33334 3.54511 1.33334H10.4138C10.896 1.33334 11.3585 1.52489 11.6994 1.86587C12.0404 2.20684 12.232 2.66931 12.232 3.15152V9.41414H15.0603V12.0404C15.0603 12.7369 14.7836 13.4049 14.291 13.8975C13.7985 14.39 13.1305 14.6667 12.434 14.6667H4.35319C3.65666 14.6667 2.98866 14.39 2.49614 13.8975C2.00362 13.4049 1.72693 12.7369 1.72693 12.0404V3.15152ZM12.232 10.6263V13.4545H12.434C12.8091 13.4545 13.1687 13.3056 13.4339 13.0404C13.6992 12.7752 13.8481 12.4155 13.8481 12.0404V10.6263H12.232ZM11.0199 13.4545V3.15152C11.0199 2.99078 10.956 2.83663 10.8423 2.72297C10.7287 2.60931 10.5745 2.54546 10.4138 2.54546H3.54511C3.38437 2.54546 3.23022 2.60931 3.11656 2.72297C3.0029 2.83663 2.93905 2.99078 2.93905 3.15152V12.0404C2.93905 12.821 3.57259 13.4545 4.35319 13.4545H11.0199ZM4.15117 5.17172C4.15117 5.01098 4.21502 4.85683 4.32868 4.74317C4.44234 4.62951 4.59649 4.56566 4.75723 4.56566H9.20168C9.36241 4.56566 9.51657 4.62951 9.63023 4.74317C9.74388 4.85683 9.80774 5.01098 9.80774 5.17172C9.80774 5.33246 9.74388 5.48661 9.63023 5.60027C9.51657 5.71393 9.36241 5.77778 9.20168 5.77778H4.75723C4.59649 5.77778 4.44234 5.71393 4.32868 5.60027C4.21502 5.48661 4.15117 5.33246 4.15117 5.17172ZM4.15117 8C4.15117 7.83927 4.21502 7.68511 4.32868 7.57145C4.44234 7.4578 4.59649 7.39394 4.75723 7.39394H9.20168C9.36241 7.39394 9.51657 7.4578 9.63023 7.57145C9.74388 7.68511 9.80774 7.83927 9.80774 8C9.80774 8.16074 9.74388 8.31489 9.63023 8.42855C9.51657 8.54221 9.36241 8.60606 9.20168 8.60606H4.75723C4.59649 8.60606 4.44234 8.54221 4.32868 8.42855C4.21502 8.31489 4.15117 8.16074 4.15117 8ZM4.15117 10.8283C4.15117 10.6675 4.21502 10.5134 4.32868 10.3997C4.44234 10.2861 4.59649 10.2222 4.75723 10.2222H6.77743C6.93817 10.2222 7.09232 10.2861 7.20598 10.3997C7.31964 10.5134 7.38349 10.6675 7.38349 10.8283C7.38349 10.989 7.31964 11.1432 7.20598 11.2568C7.09232 11.3705 6.93817 11.4343 6.77743 11.4343H4.75723C4.59649 11.4343 4.44234 11.3705 4.32868 11.2568C4.21502 11.1432 4.15117 10.989 4.15117 10.8283Z"
                fill="#1A1A1A"
                className="dark:fill-white"
              />
            </svg>
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Reservation No.
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          #897788
        </p>
      </div>

      <div className="item mb-5 flex justify-between">
        <p>
          <span className="-mb-1 inline-block">
            <IconSvg name={"calender"} />
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Pickup Date456
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          Jun 6, 2022
        </p>
      </div>

      <div className="item mb-5 flex justify-between">
        <p>
          <span className="-mb-1 inline-block">
            <IconSvg name={"clock"} />
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Pickup Time
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          8:45 PM
        </p>
      </div>
      <div className="item mb-5 flex justify-between">
        <p>
          <span className="-mb-1 inline-block">
            <IconSvg name={"clock"} />
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Spot Time
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          8:45 PM
        </p>
      </div>

      <div className="item mb-5 flex justify-between">
        <p>
          <span className="-mb-1 inline-block">
            <IconSvg name={"distance"} />
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Trip Type
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          By The Hour
        </p>
      </div>

      <div className="item mb-3 flex justify-between">
        <p>
          <span className="-mb-1 inline-block ">
            <IconSvg name={"alarmClock"} />
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Duration
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          2 Hours
        </p>
      </div>

      <div className="item mb-3 flex justify-between">
        <p>
          <span className="-mb-1 inline-block ">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.39355 4.33301C5.39355 5.98701 6.73955 7.33301 8.39355 7.33301C10.0476 7.33301 11.3936 5.98701 11.3936 4.33301C11.3936 2.67901 10.0476 1.33301 8.39355 1.33301C6.73955 1.33301 5.39355 2.67901 5.39355 4.33301ZM13.7269 13.9997H14.3936V13.333C14.3936 10.7603 12.2996 8.66634 9.72689 8.66634H7.06022C4.48689 8.66634 2.39355 10.7603 2.39355 13.333V13.9997H13.7269Z"
                fill="#1A1A1A"
                className="dark:fill-white"
              />
            </svg>
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Passengers
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          1
        </p>
      </div>

      <div className="item mb-3 flex justify-between">
        <p>
          <span className="-mb-1 inline-block ">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0602 3.33333V2.66666C11.0602 2.31304 10.9197 1.9739 10.6697 1.72385C10.4196 1.4738 10.0805 1.33333 9.72685 1.33333H7.06018C6.70656 1.33333 6.36742 1.4738 6.11737 1.72385C5.86732 1.9739 5.72685 2.31304 5.72685 2.66666V3.33333C5.0196 3.33333 4.34133 3.61428 3.84123 4.11438C3.34113 4.61447 3.06018 5.29275 3.06018 6V13.3333C3.06018 13.687 3.20066 14.0261 3.4507 14.2761C3.70075 14.5262 4.03989 14.6667 4.39351 14.6667H12.3935C12.7471 14.6667 13.0863 14.5262 13.3363 14.2761C13.5864 14.0261 13.7268 13.687 13.7268 13.3333V6C13.7268 5.29275 13.4459 4.61447 12.9458 4.11438C12.4457 3.61428 11.7674 3.33333 11.0602 3.33333ZM7.06018 2.66666H9.72685V3.33333H7.06018V2.66666ZM8.39351 6L9.72685 7.33333L8.39351 8.66666L7.06018 7.33333L8.39351 6ZM12.3935 13.3333H4.39351V11H5.72685H6.39351H12.3935V13.3333ZM12.3935 10H4.39351V6C4.39351 5.64637 4.53399 5.30723 4.78404 5.05719C5.03409 4.80714 5.37323 4.66666 5.72685 4.66666H11.0602C11.4138 4.66666 11.7529 4.80714 12.003 5.05719C12.253 5.30723 12.3935 5.64637 12.3935 6V10Z"
                fill="#1A1A1A"
                className="dark:fill-white"
              />
            </svg>
          </span>
          <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            Luggage Weight
          </span>
        </p>
        <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
          25 KG
        </p>
      </div>
    </>
  );
};

export default Details;
