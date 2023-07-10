import IconSvg from "@/icons/IconSvg";

const HelpList = ({ leftIcon, heading, rightIcon, clickhandler }) => {
  return (
    <>
      <div
        className="mb-8 flex cursor-pointer items-center justify-between"
        onClick={clickhandler}
      >
        <div>
          <IconSvg name={leftIcon} />

          <span className="ml-2 pr-3 text-[18px] font-medium text-black dark:text-white 2xs:text-[14px]">
            {heading}
          </span>
        </div>
        <label className=" relative mr-2 inline-flex items-center">
          {rightIcon && <IconSvg name={rightIcon} />}
        </label>
      </div>
    </>
  );
};

export default HelpList;
