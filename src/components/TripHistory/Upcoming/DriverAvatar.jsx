import IconSvg from "@/icons/IconSvg";
import Router from "next/router";

const DriverAvatar = ({ isNotCall }) => {
  return (
    <>
      <div className="my-4 px-1 ">
        <div className="flex gap-3">
          <div
            className="flex cursor-pointer gap-3"
            onClick={() => Router.push("/request_ride/driver_profile")}
          >
            <div>
              <img src="/assets/trip/avatar.png" alt="img" />
            </div>
            <div>
              <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[16px] 2xs:mb-2 2xs:text-[14px]">
                John Smith Knight
              </h1>
              <div>
                <IconSvg name={"star"} />
                <span className="ml-2 font-medium dark:text-white">4.8</span>
              </div>
            </div>
          </div>

          {isNotCall || (
            <div className="messenger_icon ml-auto">
              <div className="inline-block h-10 w-10 rounded-full bg-primary-500">
                <IconSvg name={"messenger"} />
              </div>
              <div className="ml-2  inline-block h-10 w-10 rounded-full bg-[#BB3069]">
                <IconSvg name={"cellPhone"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DriverAvatar;
