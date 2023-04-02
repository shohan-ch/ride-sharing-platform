import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

export default () => {
  return (
    <>
      <h1 className="mt-7 self-center font-extrabold text-black dark:text-gray-2 2xl:text-[18px] 2xs:mb-2 2xs:text-[16px]">
        Driver Rating
      </h1>
      {/* Driver avatar section */}
      <div className="mt-4 flex justify-between px-1">
        <div className="flex gap-3">
          <div>
            <img src="/assets/trip/avatar.png" alt="img" />
          </div>
          <div>
            <h1 className="self-center font-extrabold text-black dark:text-gray-2 2xl:text-[16px] 2xs:mb-2 2xs:text-[14px]">
              John Smith Knight
            </h1>
            <div>
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
              <IconSvg name={"star"} />
            </div>
          </div>
        </div>
        <div>
          <Link href={"/rider_profile"} legacyBehavior>
            <a className="shadow-one dark:shadow-dark flex h-[35px] items-center justify-center rounded-[48px] bg-primary-500 px-5 text-[12px] text-white shadow-sm hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 2xs:text-[10px]">
              View Profile
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
