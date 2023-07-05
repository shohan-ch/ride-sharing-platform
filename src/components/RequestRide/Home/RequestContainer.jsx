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
      <div
        className={`${color} cursor-pointer rounded-lg bg-[#F8F8FC] dark:bg-dark-2`}
        onClick={clickHandler}
      >
        <IconSvg name={iconName} />
        <div className="px-5 pb-2">
          <h1 className="font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 3xl:text-[18px] 2xs:text-26">
            {heading}
          </h1>
          <p className="text-[12px] text-gray-light dark:text-gray-2">
            {subHeading}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeRequestList;
