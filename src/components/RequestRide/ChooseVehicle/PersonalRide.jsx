import IconSvg from "@/icons/IconSvg";

const PersonalRide = () => {
  return (
    <>
      <div className="mb-[15px] flex items-center">
        <div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" defaultValue="" className="peer sr-only" />
            <div className="peer flex h-[35px] w-[60px] items-center rounded-full bg-gray-2 after:transition-all peer-checked:after:translate-x-full peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <div className="absolute px-[2px] transition duration-700 peer-checked:right-0">
              <IconSvg name={"switchAvatar"} />
            </div>
          </label>
        </div>
        <div className="ml-4 w-full md:ml-6">
          <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
            Personal Ride
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
              Paypal
            </p>
            <IconSvg name={"rightGrayArrow"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalRide;
