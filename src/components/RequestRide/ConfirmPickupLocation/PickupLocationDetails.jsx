import IconSvg from "@/icons/IconSvg";

const PickupLocationDetails = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="mb-2 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
          Rockefeller Center
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <IconSvg name={"dot"} />

            <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
              Pickup in
              <span className="font-bold text-black dark:text-gray-1">
                3 min
              </span>
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <IconSvg name={"dot"} />

              <p className="ml-1 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
                Fare
                <span className="font-bold text-black dark:text-gray-1">
                  $35.50
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupLocationDetails;
