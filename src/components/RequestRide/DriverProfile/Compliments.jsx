const Compliments = () => {
  return (
    <>
      <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
        Compliments
      </h2>
      <div className="w-full overflow-auto">
        <div className="flex w-[500px] items-center gap-2 sm:w-full lg:w-[550px]">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/Frame 202.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              Expert <br />
              Navigation
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/Frame 202-1.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              Neat and <br />
              Tidy
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/Frame 202-2.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              Late-Night <br />
              Hero
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/Frame 202-3.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              Excellent <br />
              Service
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/Frame 202-4.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              Excellent <br />
              Service
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compliments;
