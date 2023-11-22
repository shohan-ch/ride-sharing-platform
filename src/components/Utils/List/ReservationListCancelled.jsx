import DriverAvatar from "@/components/TripHistory/Upcoming/DriverAvatar";
import IconSvg from "@/icons/IconSvg";
import Button from "../Button/Button";

export default ({ isCallDriver }) => {
  return (
    <>
      <div>
        <h1 className="mb-8 self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
          June 22, 2022
        </h1>
        <div className="myt-8 mb-4 flex justify-between px-1">
          <div>
            <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
              US $225.60
            </h1>
            <p className="text-sm text-gray-light dark:text-white">Trip Fare</p>
          </div>
          <div>
            <span className="rounded-full bg-gray-2 p-2 text-[12px] font-medium text-[#EC1D1D]">
              Ride Cancelled at 8:45 PM, Jun 16
            </span>
          </div>
        </div>
        <div className="ml-1 pt-3">
          <div className="">
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full border-[3px] border-primary-500 dark:bg-white"></div>
                </div>
                <div className="h-full w-px bg-gray-300" />
              </div>
              <div className="pb-8">
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  San Francisco Internation Airport - 781 McDonell Rd, San
                  Francisco.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-3 w-3 items-center justify-center rounded-full  border-[3px] border-[#BB3069] dark:bg-white"></div>
                </div>
              </div>
              <div>
                <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#CACACA]">
                  Fairmont San Francisco. 700 4th Street Avenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 pt-5 pb-2">
        <span className="mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-2 text-[12px] font-medium text-black">
          <IconSvg name={"van"} />
          <span className="ml-2 text-[12px]">Business Van/SUV</span>
        </span>
        <span className="mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-2 text-[12px] font-medium text-black">
          <IconSvg name={"direction"} />
          <span className="ml-2 ">29 Mins</span>
        </span>
        <span className="mb-3 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gray-1 px-2 text-[12px] font-medium text-black">
          One Way
        </span>
      </div>

      {isCallDriver && <DriverAvatar isNotCall={true} />}

      {isCallDriver || (
        <span className="block w-full rounded-full bg-gray-2 py-4 px-7 text-center text-[12px] font-medium text-[#633CAE] 2xs:mb-4 2xs:font-normal">
          Driver info will appear 2 hours before pickup time
        </span>
      )}

      <div className="button_list mx-auto mb-16 space-y-2 lg:pt-4">
        <Button iconPosition="right" color="blue">
          Request Again
        </Button>

        <Button color="gray" className="rounded-lg">
          View Details
        </Button>
      </div>
    </>
  );
};
