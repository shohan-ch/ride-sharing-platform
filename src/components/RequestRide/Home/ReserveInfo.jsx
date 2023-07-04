import IconSvg from "@/icons/IconSvg";

const ReserveInfo = () => {
  return (
    <>
      <div className="mb-7 flex items-center gap-4 rounded-3xl bg-gray-1 p-4 dark:bg-dark-2">
        <IconSvg name={"calender"} width={48} height={49} />

        <div>
          <h3 className="mb-1 text-[14px] font-bold dark:text-gray-2">
            Next reservation on May 25, 8:45 PM
          </h3>
          <p className="text-[12px] text-gray-light dark:text-gray-2">
            You are scheduled to be picked up from Boston Internation Airport
            Terminal 4
          </p>
        </div>
      </div>
    </>
  );
};

export default ReserveInfo;
