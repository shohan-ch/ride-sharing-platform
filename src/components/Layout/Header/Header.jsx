import IconSvg from "@/icons/IconSvg";
import Router from "next/router";

const Header = ({ drawerHandle }) => {
  return (
    <nav className="sticky top-0 z-50 hidden w-full bg-primary-500 px-20 py-4 pl-20 lg:block">
      <div className="flex flex-shrink-0 items-center text-26 text-white">
        {/* Drawer Button */}
        <div className="mr-3 -mb-2 text-left">
          <button
            id="drawer_btn"
            type="button"
            onClick={drawerHandle}
            className="transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        Get<span className="font-semibold tracking-tight">Ryd</span>
        <div className="ml-auto flex items-center gap-4">
          <button className="rounded-full bg-white p-2 text-[12px] font-bold text-primary shadow-md">
            {" "}
            Install on phone
          </button>

          <div
            onClick={() => Router.push("/rider_profile")}
            className="avatarContainer flex cursor-pointer items-center gap-x-3 rounded-2xl"
          >
            <img
              width={40}
              src="/assets/images/driver_profile/Ellipse 27driver_pic.png"
              alt=""
            />

            {/* <img src="" alt="img" /> */}
            <p className="text-[14px] "> Md. Sadat Hussin</p>
            <span
              className="flex h-6 items-center rounded-full bg-[#FFC123] px-2 text-[12px] font-medium"
              title=""
            >
              <IconSvg name={"starBlack"} />
              <span className="text-black">4.9</span>
            </span>
          </div>

          {/* <div className="p-2 bg-white rounded-full shadow-md">
            <p className=" text-[12px] font-bold text-primary">
              Install on phone
            </p>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
