import IconSvg from "@/icons/IconSvg";
import Image from "next/image";

const vehicleImage = {
  economy: (
    <Image
      src="/assets/images/request_ride/vehicles/car.svg"
      width={64}
      height={64}
      className="mx-auto text-center"
    ></Image>
  ),
  economyXl: (
    <Image
      src="/assets/images/request_ride/vehicles/Xlcar.png"
      width="64"
      height="64"
      className="mx-auto text-center"
    ></Image>
  ),
  black: (
    <Image
      src="/assets/images/request_ride/vehicles/black.png"
      width="64"
      height="64"
      className="mx-auto text-center"
    ></Image>
  ),
};

const RequestRideVehicleList = (props) => {
  const { name, fare, vehicleType, isActive } = props;

  return (
    <>
      <div
        className={`relative flex items-center justify-between py-2 px-5 dark:bg-[#2C2C35]  ${
          isActive && "bg-[#FCF3F7]"
        }`}
      >
        <div
          className={`absolute left-0 h-[80px] w-1 rounded-full ${
            isActive && "bg-[#BB3069]"
          } `}
        ></div>
        <div className="flex items-center gap-4">
          <div>{vehicleImage[vehicleType]}</div>
          <div className="dark:text-white">
            <h2 className="font-bold md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
              {name}
              <span className="inline-block">
                <IconSvg name={"avatarBlack"} />
              </span>{" "}
              4
            </h2>
            <p className="text-[#5C5C5C] dark:text-gray-1">12:45pm drop-off</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
            US${fare}
          </h2>
        </div>
      </div>
    </>
  );
};

export default RequestRideVehicleList;
