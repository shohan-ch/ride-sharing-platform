const MessageProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-[56px] w-[56px]"
          src="/assets/rider/avatarTwo.png"
          alt=""
        />
        <h2 className="mb-3 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
          John Smith Knight
        </h2>
        <ul className="flex items-center text-[12px] text-gray-light dark:text-gray-2 md:text-[14px]">
          <li>Toyota Camry Hybrid</li>
          <li className="ml-7 list-disc">215 BG2</li>
        </ul>
      </div>
    </>
  );
};

export default MessageProfile;
