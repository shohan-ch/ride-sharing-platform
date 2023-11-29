import IconSvg from "@/icons/IconSvg";

export default (props) => {
  const { heding, subHeading, icon } = props;
  return (
    <>
      <div className="list mb-3 flex gap-[15px] rounded-md bg-gray-1 px-2  py-4 hover:shadow-md hover:duration-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 md:mb-4 md:h-[80px] md:pl-4 lg:h-[93px] lg:pl-4 2xs:h-[90px] 2xs:pl-4">
        <div className="flex items-center">
          <IconSvg name={icon} />
        </div>
        <div>
          <h3 className="mb-1 text-base font-bold dark:text-white 2xs:text-[14px]">
            {heding}
          </h3>
          <p className="text-xs text-gray-light dark:text-white/60">
            {subHeading}
          </p>
        </div>
      </div>
    </>
  );
};
