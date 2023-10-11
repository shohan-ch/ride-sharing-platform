const PoorRating = () => {
  return (
    <>
      <div className="mt-4">
        <div className="">
          <div className="mx-0 mb-[15px]">
            <h2 className="font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
              Select an issue
            </h2>
            <p className="text-[14px] text-gray-light dark:text-gray-1">
              Choose up to 3 issues
            </p>
          </div>
          <div className="mt-4 overflow-auto ">
            <div className="mb-5 flex w-[600px] items-center gap-4 pr-5">
              <button className="w-full rounded-3xl bg-gray-1 px-4 py-2 dark:bg-dark-2 dark:text-gray-1">
                Cash payment issue
              </button>
              <button className=" w-full rounded-3xl bg-[#BB3069] py-2 px-4 text-white  dark:text-gray-1">
                Reckless Driving
              </button>
              <button className="w-full rounded-3xl bg-gray-1 px-4 py-2 dark:bg-dark-2 dark:text-gray-1">
                Didn't follow map
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoorRating;
