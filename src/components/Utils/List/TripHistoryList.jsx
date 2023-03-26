import IconSvg from "@/icons/IconSvg";
import Image from "next/image";

export default (props) => {
  const { isActive } = props;
  return (
    <>
      <div className="item -d-5 bg-whdark:oundark-2 dark:text-ded-l relative mx-1 mt-8 mb-5 rounded-lg bg-white py-6">
        <div className="px-4">
          <div className="mb-2 flex justify-between">
            <p>
              <span className="ml-2 inline-block font-semibold text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                Today, 8:40 PM
              </span>
            </p>
            <p className="font-semibold md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              US $23.65
            </p>
          </div>
          <div className="mb-2 flex justify-between">
            <p>
              <span className="ml-2 inline-block text-gray-light dark:text-[#CACACA] md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
                Toyota Camry Hybrid, 215BG2
              </span>
            </p>

            <p className="text-gray-light md:text-[20px] lg:text-[16px] 2xs:text-[14px]">
              {isActive && (
                <>
                  Paypal
                  <IconSvg name="rightArrow" />
                </>
              )}
              {isActive || "Cancelled"}
            </p>
          </div>
          {/* Start icon */}
          <div className="mb-3">
            <p className="ml-1">
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
            </p>
          </div>
        </div>
        <div className="mb-1">
          {/* Google Map  */}
          <img
            src="/assets/trip/map/map.png"
            alt="img"
            className="h-full w-full shadow-md"
          />

          {/* <Image src={"/assets/trip/map/map.png"} sizes="100vw" fill /> */}
        </div>
      </div>
    </>
  );
};
