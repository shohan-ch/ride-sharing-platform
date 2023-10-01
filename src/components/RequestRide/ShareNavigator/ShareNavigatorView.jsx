import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
const ShareNavigatorView = () => {
  return (
    <div>
      <div className="relative sm:hidden lg:rounded-t-3xl">
        <div className="h-[300px] overflow-hidden 3xl:h-[400px]">
          <img
            src="/assets/images/request_ride/Group 200.jpg"
            className="w-full dark:hidden lg:rounded-t-3xl"
            alt=""
          />
          <img
            src="/assets/images/request_ride/Group 201.png"
            className="hidden w-full dark:block lg:rounded-t-3xl"
            alt=""
          />
        </div>

        <Link href="/request_ride">
          <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
        </Link>

        <div className="absolute bottom-28 right-4 z-50 flex flex-col gap-4">
          <div className="drop-shadow-xl">
            <IconSvg name={"loactionSider"} />
          </div>
          <div className="drop-shadow-xl">
            <IconSvg name={"locationSider2"} />
          </div>
          <a href="./safety_toolkit.html">
            <div className="drop-shadow-xl">
              <IconSvg name={"locationSafety"} />
            </div>
          </a>
        </div>
        <div className="absolute left-0 right-0 bottom-10 z-50 mx-auto flex w-[90%] justify-between rounded-lg bg-bg-color px-5 py-3 drop-shadow-lg dark:bg-dark-bg">
          <div className="flex items-center gap-2">
            <IconSvg name={"locationShare"} />

            <p className="text-[13px] font-[450] text-black dark:text-gray-1">
              Share with James
            </p>
          </div>
          <p className="text-[13px] font-bold text-black dark:text-gray-1">
            Share
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareNavigatorView;
