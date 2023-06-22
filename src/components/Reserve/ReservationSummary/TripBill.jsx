const TripBill = () => {
  return (
    <>
      <div className="mt-8 dark:text-white md:mb-[150px] md:w-[668px] lg:mb-0 lg:w-[380px] 2xs:w-full 2xs:pr-[6px]">
        <div className="item mb-7 flex justify-between">
          <p>
            <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Trip fare
            </span>
          </p>
          <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            US $250.50
          </p>
        </div>
        <div className="item mb-7 flex justify-between">
          <p>
            <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Driver tip (3%)
            </span>
          </p>
          <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            US $7.52
          </p>
        </div>
        <div className="item mb-3 flex justify-between">
          <p>
            <span className="ml-2 inline-block font-bold text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[20px] 2xs:text-[16px]">
              Total
            </span>
          </p>
          <p className="font-bold md:text-[20px] lg:text-[20px] 2xs:text-[16px]">
            US $258.02
          </p>
        </div>
      </div>
    </>
  );
};

export default TripBill;
