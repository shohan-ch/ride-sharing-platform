import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";

const AddFavouriteView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 py-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-2 sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[25px] dark:bg-dark-2 md:pb-10">
              <div className="mb-8 flex items-center">
                <Link href="/help/payment_option">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className="mx-auto font-extrabold text-black dark:text-white 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add Favorite
                </h2>
              </div>
            </div>
            <div className="mx-5">
              <h1 className="mb-4 text-lg font-bold text-[#1A1A1A] dark:text-white md:mb-7 md:text-[26px]">
                Choose Icon
              </h1>
              <div className="mb-10 flex">
                <IconSvg name={"home"} width={48} height={48} />
                <IconSvg name={"suiteCaseBg"} width={48} height={48} />
                <IconSvg name={"loveWithBg"} width={48} height={48} />
              </div>
              <h1 className="mb-6 text-lg font-bold text-[#1A1A1A] dark:text-white md:mb-7 md:text-[26px]">
                Other Information
              </h1>

              <InputField
                label="Place name (private)"
                placeholder="Home"
                className="mb-5 bg-white"
              />

              <InputField
                label="Address"
                placeholder="700 4th Street, Fairmont San Francisco"
                className="bg-white md:mb-2"
              />

              <img
                src="/assets/images/help/map.png"
                className="mt-4 mb-14 w-full lg:mb-28"
                alt=""
              />

              <div className="absolute left-0 right-0 mx-5  md:bottom-0 lg:absolute lg:bottom-[22px] lg:block 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
                <Button
                  color="blue"
                  iconPosition="right"
                  iconName="rightArrow"
                  handler={() => alert(123)}
                >
                  Save Address
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddFavouriteView;
