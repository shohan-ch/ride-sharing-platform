import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const BackupCodesView = () => {
  const clickHandeler = () => {
    console.log("button click");
  };
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color py-5 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[25px] dark:bg-dark-bg md:pb-10">
              <div className="mb-12 flex items-center">
                <Link href="/help/payment_option">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className="mx-auto font-extrabold text-black dark:text-white 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Back Up Codes
                </h2>
              </div>
              <div>
                <p className="mb-6 font-bold dark:text-white md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Save these backup codes
                </p>
                <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                  Screenshot these codes and store them in a safe place. If you
                  have trouble receiving a code, you can use one of those codes
                  instead.
                </p>
                <div className="mt-8 rounded-xl bg-gray-1 py-6 dark:bg-dark-2">
                  <div className="mb-4 flex justify-center gap-10">
                    <div>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          1.
                        </span>{" "}
                        6135-5563
                      </p>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          2.
                        </span>{" "}
                        1235-4568
                      </p>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          3.
                        </span>{" "}
                        6532-9865
                      </p>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          4.
                        </span>{" "}
                        1245-7458
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          5.
                        </span>{" "}
                        6135-5563
                      </p>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          6.
                        </span>{" "}
                        1235-4568
                      </p>
                      <p className="mb-2 dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          7.
                        </span>{" "}
                        6532-9865
                      </p>
                      <p className="dark:text-gray-1">
                        <span className="text-[#5C5C5C] dark:text-gray-2">
                          8.
                        </span>
                        1245-7458
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-gray-light dark:text-gray-1">
                    Each code can be used only once
                  </p>
                </div>
                <a href="get_new_code.html">
                  <h3 className="mt-4 mb-16 text-[#29225E] dark:text-gray-1">
                    Get new backup codes
                  </h3>
                </a>

                <Button handler={clickHandeler} color={"blue"}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackupCodesView;
