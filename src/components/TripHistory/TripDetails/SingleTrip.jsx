import IconSvg from "@/icons/IconSvg";

export default () => {
  return (
    <>
      <div className="item rounded-5  relative mx-1 mb-[50px] mt-8 rounded-lg bg-white pb-6 shadow-md dark:bg-dark-2 dark:text-white 2xs:mb-5">
        <div className="mb-5">
          {/* Google Map  */}
          <img
            src="/assets/trip//map/map.png"
            alt="img"
            className=" w-full h-full"
          />
        </div>
        <div className="px-4">
          <div className="flex justify-between mb-2">
            <p>
              <span className="ml-2 inline-block font-semibold text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                Today, 8:40 PM
              </span>
            </p>
            <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              US $23.65
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p>
              <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                <IconSvg name={"car"} />
                Toyota Camry Hybrid
              </span>
            </p>
            <p className="self-center text-gray-light md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Paypal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
