import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

const MyPlacesView = () => {
  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div
            className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0
           sm:text-left lg:h-[400px] lg:rounded-3xl lg:pt-0 xl:h-[500px] 2xl:h-[420px] 3xl:h-[650px] 2xs:px-0 2xs:pt-0 2xs:text-left"
          >
            <div className="flex items-center pt-2 pb-[25px] pl-5 md:pb-10">
              <Link href="/help/payment_option">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
              <h1 className="mx-auto font-extrabold text-black dark:text-white lg:ml-[100px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                My Places
              </h1>
            </div>
            <div className="mb-8 px-5 md:mb-10">
              <div className="">
                <img
                  className="mx-auto"
                  src="/assets/images/help/forbidden 1.svg"
                  alt=""
                />
              </div>
              <div className="mt-14 text-center">
                <h1 className="mb-2 text-[22px] font-bold text-[#1A1A1A] dark:text-white md:mb-4">
                  You haven’t added anything yet
                </h1>
                <p className="px-11 text-[14px] text-gray-light dark:text-gray-2">
                  Add your most frequest places, such as home &amp; work so you
                  can tap and go.
                </p>
              </div>
            </div>
          </div>

          <div className="px-5">
            <Button color="blue">Add places</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPlacesView;
