import InfoButton from "@/components/Utils/Button/InfoButton";
import PromoList from "./PromoList";
import Link from "next/link";

const PromotionsView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[460px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[86px] lg:pr-[62px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <Link href="/wallet">
                    <img src="/assets/icons/back.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Promotions
                </h2>
              </div>
              {/* Item content */}
              <PromoList
                heading={"60% promo for 10 rides"}
                subHeading={"Maximum promo US $14"}
                dayCount={5}
                bgColor={"bg-[#F1ECF8]"}
              />

              <PromoList
                heading={"30% promo for 25 rides"}
                subHeading={"Maximum promo US $10"}
                dayCount={5}
                bgColor={"bg-[#FFEBEB]"}
              />

              <PromoList
                heading={"80% promo for 50 rides"}
                subHeading={"Maximum promo US $100"}
                dayCount={5}
                bgColor={"bg-[#EBFAF2]"}
              />

              {/* Add Code */}
              <div className=" mx-auto mt-4 rounded-lg bg-white px-4 pt-10 pb-1 dark:bg-dark-2 dark:text-white">
                <InfoButton
                  heading={"Add Promo Code Instead"}
                  icon={"promoCode"}
                  iconTwo={"rightGrayArrow"}
                  clickHandler={() => console.log(123)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionsView;
