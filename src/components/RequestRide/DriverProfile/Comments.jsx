const Comments = () => {
  return (
    <>
      <div className="mt-5 overflow-auto border-b-[1px] border-gray-2 pb-5">
        <div className="flex w-[600px] items-center gap-3 sm:w-full lg:w-[600px]">
          <div className="mb-4 w-full rounded bg-gray-1 p-5 dark:bg-[#2C2C35]">
            <p className="mb-3 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium">
              “Thank you for getting us to the station on time. We were almost
              sure that we are going to be missing our train if you did not show
              up on time.”
            </p>
            <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
              6 months ago
            </p>
          </div>
          <div className="mx-5 mb-4 w-full rounded bg-gray-1 p-5 dark:bg-[#2C2C35]">
            <p className="mb-3 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium">
              “Thank you for getting us to the station on time. We were almost
              sure that we are going to be missing our train if you did not show
              up on time.”
            </p>
            <p className="mb-3 text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium">
              6 months ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
