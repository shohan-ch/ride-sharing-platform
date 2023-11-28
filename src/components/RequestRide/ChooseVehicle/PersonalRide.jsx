import IconSvg from "@/icons/IconSvg";
import Router from "next/router";
import { useState } from "react";

const PersonalRide = () => {
  const [header, setHeader] = useState("Personal");

  const handleCheckChange = (e) => {
    if (e.target.checked) {
      setHeader("Business");
    } else {
      setHeader("Personal");
    }
  };

  const handleHeaderClick = () => {
    if (header === "Personal") {
      Router.push("/request_ride/payment_personal");
    } else {
      Router.push("/request_ride/payment_business");
    }
  };

  return (
    <>
      <div className="mb-[15px] flex items-center">
        <div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              defaultValue=""
              className="peer sr-only"
              // onChange={(e) => console.log(e.target.checked)}
              onChange={handleCheckChange}
            />
            <div className="peer flex h-[35px] w-[60px] items-center rounded-full bg-gray-2 after:transition-all peer-checked:after:translate-x-full peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <div className="absolute px-[2px] transition duration-700 peer-checked:right-0">
              <IconSvg name={"switchAvatar"} />
            </div>
          </label>
        </div>
        <div className="ml-4 w-full md:ml-6" onClick={handleHeaderClick}>
          <h2 className="cursor-pointer font-bold hover:text-primary dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
            {header} Ride
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
              Paypal
            </p>
            <IconSvg name={"rightGrayArrow"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalRide;
