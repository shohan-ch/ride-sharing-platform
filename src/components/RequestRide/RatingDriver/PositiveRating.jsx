import IconSvg from "@/icons/IconSvg";

const PositiveRating = () => {
  return (
    <>
      <div>
        <div className="mb-[15px] flex items-center">
          <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
            Tip the Driver
          </h2>
        </div>
        <div className="mb-5 flex items-center gap-4">
          <button className="rounded-3xl bg-gray-1 px-4 py-2 font-bold dark:bg-dark-2 dark:text-gray-1">
            1%
          </button>
          <button className="rounded-3xl bg-[#BB3069] py-2 px-4 font-bold text-white dark:text-gray-1">
            3%
          </button>
          <button className="rounded-3xl bg-gray-1 px-4 py-2 font-bold dark:bg-dark-2 dark:text-gray-1">
            5%
          </button>
          <button className="rounded-3xl bg-gray-1 px-4 py-2 font-bold dark:bg-dark-2 dark:text-gray-1">
            10%
          </button>
        </div>

        <div className="mb-5 flex items-center gap-1">
          <p className="text-[14px] font-bold text-black dark:text-gray-1">
            Custom Amount
          </p>

          <IconSvg name={"rightGrayArrow"} />
        </div>
      </div>
    </>
  );
};

export default PositiveRating;
