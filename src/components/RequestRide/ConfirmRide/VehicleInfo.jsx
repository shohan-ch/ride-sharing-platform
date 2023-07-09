import IconSvg from "@/icons/IconSvg";

const VehicleInfo = () => {
  return (
    <>
      <div className="w-full">
        <div>
          <img src="/assets/images/request_ride/vehicles/car.svg" alt="" />
        </div>
        <div className="flex w-full justify-between dark:text-white">
          <div>
            <h2 className="font-bold md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
              Economy XL
              <span className="inline-block">
                <IconSvg name={"avatarBlack"} />
              </span>{" "}
              6
            </h2>
            <p className="text-[#5C5C5C] dark:text-gray-1">12:45pm drop-off</p>
            <p className="text-[#5C5C5C] dark:text-gray-1">
              Affordable ride for your group journey
            </p>
          </div>
          <div>
            <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
              US$34.70
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleInfo;
