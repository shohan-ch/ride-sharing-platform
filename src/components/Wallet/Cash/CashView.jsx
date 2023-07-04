import Radio from "@/components/Forms/Radio";
import Switch from "@/components/Forms/Switch";
import Button from "@/components/Utils/Button/Button";
import Link from "next/link";

const CashView = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  const RadioList = () => {
    const list = [];
    let value = [25, 50, 100];
    for (let i = 0; i < value.length; i++) {
      list[i] = (
        <div className="list mb-6 flex items-center gap-x-4">
          <Radio
            value={value[i]}
            changeHandler={changeHandler}
            className="!p-0"
          />
          <span className="pr-3 text-lg font-medium text-black dark:text-white">
            {value[i]} USD
          </span>
        </div>
      );
    }
    return list;
  };

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-gray-1 pr-4 pl-[19px] pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xs:h-full 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:mb-[30px] 2xl:h-[450px] 3xl:h-[700px]">
              <div className="pickup_header mb-10 flex md:pr-[76px] lg:pr-[30px] 2xs:mb-3 2xs:pr-4">
                <div>
                  <Link href="/wallet/business_email">
                    <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                  </Link>
                </div>
                <h2 className="mx-auto font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Add Cash
                </h2>
              </div>
              <div className="rounded-5 mx-auto mt-2 rounded-lg px-0 pb-8 dark:text-white 2xs:mt-2 2xs:pt-0">
                <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                  Choose amount
                </p>
                <p className="mt-4 text-gray-light dark:text-white">
                  Plan ahead with GetRyd Cash. You can use it with coupons or
                  other promos.
                </p>
              </div>
              {/* radion button List  */}
              <div className="radio_wrapper">
                {RadioList()}

                <div className="mt-10">
                  <p className="font-bold md:text-[20px] lg:text-[22px] 2xs:text-[18px]">
                    GetRyd Cash
                  </p>
                  <div className="mt-3 mb-6 flex items-center justify-between">
                    <span className="pr-3 text-sm font-medium text-black dark:text-white">
                      Automatiocally add GetRyd cash when your balance is lower
                      than 15 USD.
                    </span>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button color="blue">Check Out</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CashView;
