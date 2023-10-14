const Achievements = () => {
  return (
    <>
      <div className="mt-6">
        <h2 className="mb-4 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
          Achievements
        </h2>
        <div className="flex items-center gap-2">
          <div className="itemsmcenter-center justify-gapr4 flex flex-col">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/desi34a.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              10,000 5- <br />
              star trips
            </h3>
          </div>
          <div className="itemsmcenter-center justify-gapr4 flex flex-col">
            <img
              className="h-[72px] w-[72px]"
              src="/assets/images/driver_profile/human_dfa.svg"
              alt=""
            />
            <h3 className="text-center text-[14px] font-bold dark:text-gray-2">
              4 years with <br />
              GetRyd
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
