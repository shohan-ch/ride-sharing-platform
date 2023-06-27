const BusinessProfileInfo = () => {
  return (
    <>
      <div className="mb-[50px] flex gap-x-5">
        <div className="self-center">
          <svg
            width={74}
            height={74}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={36} cy={36} r={36} fill="#F8F8F8" />
            <g clipPath="url(#clip0_1292_19044)">
              <path
                d="M36.0001 35.9999C40.261 35.9999 43.7143 32.5465 43.7143 28.2856C43.7143 24.0246 40.261 20.5713 36.0001 20.5713C31.7391 20.5713 28.2858 24.0246 28.2858 28.2856C28.2858 32.5465 31.7391 35.9999 36.0001 35.9999ZM41.4001 37.9284H40.3936C39.0556 38.5432 37.567 38.8927 36.0001 38.8927C34.4331 38.8927 32.9505 38.5432 31.6065 37.9284H30.6001C26.1282 37.9284 22.5001 41.5566 22.5001 46.0284V48.5356C22.5001 50.1327 23.7958 51.4284 25.3929 51.4284H46.6072C48.2043 51.4284 49.5001 50.1327 49.5001 48.5356V46.0284C49.5001 41.5566 45.8719 37.9284 41.4001 37.9284Z"
                fill="#B0B0B0"
              />
            </g>
            <defs>
              <clipPath id="clip0_1292_19044">
                <rect
                  width="30.8571"
                  height="30.8571"
                  fill="white"
                  transform="translate(20.5714 20.5713)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <h1 className="mt-5 mb-2 font-extrabold text-black dark:text-gray-2 2xl:mt-5 2xl:text-[20px] 3xl:text-[24px] 2xs:mb-2 2xs:mt-1 2xs:text-[18px]">
            RootSoft IT
          </h1>
          <p className="text-[14px] text-gray-light dark:text-white">
            My business profile <span>Default profile</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BusinessProfileInfo;
