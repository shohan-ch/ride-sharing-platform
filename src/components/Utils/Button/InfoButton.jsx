import IconSvg from "@/icons/IconSvg";

const InfoButton = ({ heading, subHeading, icon, iconTwo, clickHandler }) => {
  return (
    <>
      <div className="mb-8 flex cursor-pointer gap-x-6" onClick={clickHandler}>
        <div>
          <IconSvg name={icon} />
        </div>
        <div>
          <p className="pr-3 text-[18px]  font-medium text-black dark:text-white 2xs:text-[14px]">
            {heading}
          </p>
          {subHeading && (
            <p className="text-sm text-gray-light dark:text-white">
              {subHeading}
            </p>
          )}
        </div>

        {iconTwo && (
          <label className="ml-auto">
            <IconSvg name={iconTwo} />
          </label>
        )}
      </div>
    </>
  );
};

export default InfoButton;
