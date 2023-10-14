const ProfileTripHistory = () => {
  return (
    <>
      <div className="flex w-full items-center gap-3 border-b-[1px] border-gray-2 px-5 pb-5 text-center">
        <div className="w-full rounded-xl bg-gray-1 py-4 dark:bg-dark-2">
          <h3 className="mb-1 text-[14px] font-extrabold dark:text-gray-2">
            15,581
          </h3>
          <p className="text-[12px] text-gray-light dark:text-gray-2">Trips</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-xl bg-gray-1 py-4 dark:bg-dark-2">
          <div className="flex items-center justify-center gap-1">
            <h3 className="text-[14px] font-extrabold dark:text-gray-2">
              4.98
            </h3>
            <svg
              width={20}
              height={20}
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6415 4.63829L7.66615 4.20586L6.33608 1.50938C6.29975 1.43555 6.23998 1.37579 6.16615 1.33946C5.981 1.24805 5.756 1.32422 5.66342 1.50938L4.33334 4.20586L1.35795 4.63829C1.27592 4.65 1.20092 4.68868 1.1435 4.74727C1.07408 4.81862 1.03582 4.91461 1.03714 5.01416C1.03846 5.1137 1.07924 5.20864 1.15053 5.27813L3.30326 7.37696L2.79467 10.3406C2.78274 10.4096 2.79037 10.4805 2.81669 10.5453C2.84301 10.6101 2.88697 10.6663 2.94358 10.7074C3.00019 10.7485 3.06719 10.7729 3.13697 10.7779C3.20676 10.7829 3.27655 10.7682 3.33842 10.7356L5.99975 9.33633L8.66108 10.7356C8.73373 10.7742 8.81811 10.7871 8.89897 10.7731C9.10287 10.7379 9.23998 10.5445 9.20483 10.3406L8.69623 7.37696L10.849 5.27813C10.9076 5.22071 10.9462 5.14571 10.958 5.06368C10.9896 4.8586 10.8466 4.66875 10.6415 4.63829Z"
                fill="url(#paint0_linear_829_12692)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_829_12692"
                  x1="5.99972"
                  y1="1.30078"
                  x2="5.99972"
                  y2="10.7789"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE298" />
                  <stop offset={1} stopColor="#FFBB0D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-[12px] text-gray-light dark:text-gray-2">Rating</p>
        </div>
        <div className="w-full rounded-xl bg-gray-1 py-4 dark:bg-dark-2">
          <h3 className="mb-1 text-[14px] font-extrabold dark:text-gray-2">
            4.5
          </h3>
          <p className="text-[12px] text-gray-light dark:text-gray-2">Years</p>
        </div>
      </div>
    </>
  );
};

export default ProfileTripHistory;
