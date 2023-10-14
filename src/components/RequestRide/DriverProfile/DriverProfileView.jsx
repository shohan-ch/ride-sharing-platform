import Profile from "@/components/AccountSetting/AccountSetting/Profile";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import ProfileView from "./ProfileView";
import ProfileTripHistory from "./ProfileTripHistory";
import Compliments from "./Compliments";
import Comments from "./Comments";
import Achievements from "./Achievements";

const DriverProfileView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:rounded-3xl lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="">
            <div className="relative lg:rounded-t-3xl">
              <div className="h-full">
                <img
                  src="/assets/images/driver_profile/Rectangle 76driver_profile.jpg"
                  className="w-full lg:rounded-t-3xl"
                  alt=""
                />
              </div>

              <Link
                href="/request_ride/location"
                className="absolute top-[30px] left-5 z-50"
              >
                <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
              </Link>

              <div className="absolute top-[30px] right-5 z-50 flex items-center gap-1 rounded-3xl bg-bg-color py-2 px-4 drop-shadow-xl dark:bg-dark-2">
                <IconSvg name={"home2"} />

                <button
                  onclick="location.href='./home.html'"
                  className="text-[14px] font-bold dark:text-gray-2"
                >
                  Go Home
                </button>
              </div>
              <div className="absolute -bottom-[50px] left-5 z-50">
                <img
                  src="/assets/images/driver_profile/Ellipse 27driver_pic.png"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-dark:bg-dark-bg relative mt-14 rounded-3xl py-2">
              <div>
                <div className="h-full overflow-y-auto overflow-x-hidden rounded-3xl lg:h-[180px] xl:h-[350px] 2xl:h-[200px] 3xl:h-[500px]">
                  <ProfileView />

                  <ProfileTripHistory />

                  <div className="mt-6 px-5">
                    <Compliments />

                    <Comments />

                    <Achievements />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverProfileView;
