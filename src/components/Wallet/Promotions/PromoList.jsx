const PromoList = ({
  clickHandler,
  heading,
  subHeading,
  dayCount,
  bgColor,
}) => {
  return (
    <>
      <div
        className={`${bgColor} item mx-auto mb-4 rounded-lg p-[6px] dark:bg-dark-2 dark:text-white`}
      >
        <div className="rounded-5 mx-2 rounded-lg px-4 py-4 pb-3 dark:text-white">
          <p className="font-bold md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
            {heading}
          </p>
          <p className="mt-2 text-sm text-gray-light dark:text-white">
            {subHeading}
          </p>
        </div>
        <div className=" flex justify-between rounded bg-white px-5 py-3 dark:text-white">
          <p className="font-semibold text-black">Apply</p>
          <p className="text-[14px] text-gray-light 2xs:text-[13px]">
            {dayCount} days left
          </p>
        </div>
      </div>
    </>
  );
};

export default PromoList;
