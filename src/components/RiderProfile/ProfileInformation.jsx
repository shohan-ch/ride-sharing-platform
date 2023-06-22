import IconSvg from "@/icons/IconSvg";

const ProfileInformation = () => {
  return (
    <>
      <div className="px-5">
        <div>
          <img src="/assets/rider/avatar.png" alt="avatar" />
        </div>
        <h1 className="mt-5 mb-2 font-extrabold text-black dark:text-gray-2 2xl:mt-5 2xl:text-[20px] 3xl:text-[24px] 2xs:mb-2 2xs:mt-1 2xs:text-[18px]">
          Md. Sadat Hussein Khan
        </h1>
        <div className="icon-list">
          <div className="space-x-2 whitespace-nowrap pt-5 pb-2">
            <span
              className="mb-3 h-8 rounded-full bg-[#FFC123] px-2 pb-[10px] pt-2  text-[12px] font-medium"
              title=""
            >
              <IconSvg name={"starBlack"} />
              <span>4.9</span>
            </span>
            <span className=" mb-3 inline-flex  h-8 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-3 text-[12px] font-medium">
              86 Rides
            </span>
            <span className="mb-3 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-3 text-[12px] font-medium text-black">
              Joined Mar 2022
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
