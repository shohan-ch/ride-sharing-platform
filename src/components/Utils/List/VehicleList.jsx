import Image from "next/image";

export default (props) => {
  const { name, fare, vehicleType, isActive } = props;

  const vehicleImage = {
    car: (
      <Image
        src="/assets/icons/car.svg"
        width="174"
        height="80"
        className="mx-auto text-center"
      ></Image>
    ),
    sedanCar: (
      <Image
        src="/assets/icons/car_sedan.svg"
        width="142"
        height="75"
        className="mx-auto text-center"
      ></Image>
    ),
  };

  return (
    <>
      <div
        className={`${
          isActive && "ring-2 ring-primary-500"
        }  list dark:shadow-dark mx-5 mb-2 rounded-lg bg-white px-5 py-8 hover:border-0 hover:outline-0 hover:ring-2 hover:ring-primary-500 hover:duration-500 focus:border-primary-500 disabled:cursor-default disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:ring-2 dark:ring-white dark:focus:border-white md:mb-[10px]`}
      >
        <div className="text-center">
          {vehicleImage[vehicleType]}
          <h2 className="md: font-bold md:text-[26px] lg:text-[22px] 2xs:text-[20px]">
            {name}
          </h2>
          <p className="font-bold md:text-[22px] lg:text-[20px] 2xs:text-[18px]">
            USD ${fare}
          </p>
          <div className="mt-2 flex justify-center gap-x-7">
            <div className="flex gap-x-2">
              <div className="self-center">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 14 14"
                  className="dark:fill-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.56226 4.02051C4.56226 5.36438 5.65588 6.45801 6.99976 6.45801C8.34363 6.45801 9.43726 5.36438 9.43726 4.02051C9.43726 2.67663 8.34363 1.58301 6.99976 1.58301C5.65588 1.58301 4.56226 2.67663 4.56226 4.02051ZM11.3331 11.8747H11.8748V11.333C11.8748 9.24272 10.1734 7.54134 8.08309 7.54134H5.91642C3.82559 7.54134 2.12476 9.24272 2.12476 11.333V11.8747H11.3331Z"
                    fill="#1A1A1A"
                    className="dark:fill-white"
                  />
                </svg>
              </div>
              <p className="md:text-[24px] lg:text-[16px] 2xs:text-[14px]">
                3 Passengers
              </p>
            </div>
            <div className="flex gap-x-2">
              <div className="self-center">
                <svg
                  className="dark:fill-white"
                  width={18}
                  height={18}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16675 3.20801V2.66634C9.16675 2.37902 9.05261 2.10347 8.84945 1.90031C8.64628 1.69714 8.37073 1.58301 8.08341 1.58301H5.91675C5.62943 1.58301 5.35388 1.69714 5.15072 1.90031C4.94755 2.10347 4.83341 2.37902 4.83341 2.66634V3.20801C4.25878 3.20801 3.70768 3.43628 3.30135 3.84261C2.89502 4.24894 2.66675 4.80004 2.66675 5.37467V11.333C2.66675 11.6203 2.78088 11.8959 2.98405 12.099C3.18721 12.3022 3.46276 12.4163 3.75008 12.4163H10.2501C10.5374 12.4163 10.8129 12.3022 11.0161 12.099C11.2193 11.8959 11.3334 11.6203 11.3334 11.333V5.37467C11.3334 4.80004 11.1051 4.24894 10.6988 3.84261C10.2925 3.43628 9.74138 3.20801 9.16675 3.20801ZM5.91675 2.66634H8.08341V3.20801H5.91675V2.66634ZM7.00008 5.37467L8.08341 6.45801L7.00008 7.54134L5.91675 6.45801L7.00008 5.37467ZM10.2501 11.333H3.75008V9.43717H4.83341H5.37508H10.2501V11.333ZM10.2501 8.62467H3.75008V5.37467C3.75008 5.08736 3.86422 4.81181 4.06738 4.60864C4.27055 4.40548 4.5461 4.29134 4.83341 4.29134H9.16675C9.45407 4.29134 9.72962 4.40548 9.93278 4.60864C10.1359 4.81181 10.2501 5.08736 10.2501 5.37467V8.62467Z"
                    fill="#1A1A1A"
                    className="dark:fill-white"
                  />
                </svg>
              </div>
              <p className="md:text-[24px] lg:text-[16px] 2xs:text-[14px]">
                3 Bags
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
