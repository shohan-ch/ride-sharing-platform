import IconSvg from "@/icons/IconSvg";

const HomeRequestList = ({
  heading,
  subHeading,
  iconName,
  color,
  clickHandler,
}) => {
  return (
    <>
      <div>
        <div
          className={`${color} flex cursor-pointer items-center justify-center rounded-full  bg-[#F8F8FC] dark:bg-dark-2 md:h-[180px] md:w-[180px] 2xs:h-[155px] 2xs:w-[155px]`}
          onClick={clickHandler}
        >
          <div className="space-y-2">
            <div className="flex justify-center">
              <IconSvg name={iconName} />
            </div>
            <div className="px-5 ">
              <h1 className="font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 3xl:text-[18px] 2xs:text-[15px]">
                {heading}
              </h1>
            </div>

            {/* <p className="text-[12px] text-gray-light dark:text-gray-2">
            {subHeading}
          </p> */}
          </div>
        </div>

        <p className="mt-3 text-center text-[12px] font-medium text-gray-light dark:text-gray-2">
          {subHeading}
        </p>
      </div>
    </>
  );
};

export default HomeRequestList;
