const Tripfare = () => {
  return (
    <>
      <div className="mt-5">
        <div className="item mb-3 flex justify-between">
          <p>
            <span className="inline-block  text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Trip fare
            </span>
          </p>
          <p className="font-semibold dark:text-white md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            US $250.50
          </p>
        </div>
        <div className="item mb-3 flex justify-between">
          <p>
            <span className="inline-block  text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              Driver tip (3%)
            </span>
          </p>
          <p className="font-semibold dark:text-white md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
            US $7.52
          </p>
        </div>
        <div className="item mb-3 flex justify-between">
          <p>
            <span className="inline-block font-semibold  dark:text-[#CACACA] md:text-[20px] lg:text-[20px] 2xs:text-[18px]">
              Total
            </span>
          </p>
          <p className="font-bold dark:text-white md:text-[20px] lg:text-[22px] 2xs:text-[17px]">
            US $258.02
          </p>
        </div>
      </div>
    </>
  );
};

export default Tripfare;
