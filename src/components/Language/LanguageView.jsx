import Link from "next/link";
import CountryFlagList from "./CountryFlagList";

const LanguageView = () => {
  let languageData = [
    {
      name: "Bangla",
      flag: "arabic",
    },
    {
      name: "English",
      flag: "arabic",
    },
    {
      name: "Arabic",
      flag: "arabic",
    },
  ];
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[490px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex px-4">
                <div>
                  <Link href={`/wallet/business_profile`}>
                    <img src="/assets/icons/back.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="ml-auto font-extrabold text-black dark:text-gray-2  2xl:text-[20px] 2xs:text-[18px]">
                  Skip
                </h2>
              </div>
              {/* Item content */}
              <div className="mx-auto mt-4 rounded-lg px-4 dark:bg-dark-2 dark:text-white">
                <div className="item rounded-5 rounded-lg dark:text-white">
                  <h2 className="mb-8 font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                    Choose Your Language
                  </h2>

                  {languageData &&
                    languageData.map((language) => (
                      <CountryFlagList
                        title={language.name}
                        flag={language.flag}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LanguageView;
