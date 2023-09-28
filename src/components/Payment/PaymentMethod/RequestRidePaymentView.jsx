import Switch from "@/components/Forms/Switch";
import Button from "@/components/Utils/Button/Button";
import PaymentButton from "@/components/Utils/Button/PaymentButton";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router, { useRouter } from "next/router";
const RequestRidePaymentView = ({ backLink }) => {
  const router = useRouter();
  console.log(router.asPath);

  // let link = backLink;
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative border bg-white px-4 pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className="sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[450px] xl:h-[590px] 2xl:h-[490px] 3xl:h-full">
              <div className="mb-5">
                <h2 className="mt-8 font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Payment Options
                </h2>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F0F0F0] p-3 dark:bg-dark-2">
                <PaymentButton active={true} handleClick={() => alert(123)}>
                  Personal
                </PaymentButton>

                <PaymentButton handleClick={() => alert(123)}>
                  Business
                </PaymentButton>
              </div>
              <div className="mt-8 px-[6px]">
                <h1 className="2xs:text-18 mb-3 font-extrabold text-black dark:text-gray-2 2xl:text-22">
                  GetRyd Cash
                </h1>

                <div className="flex items-start justify-between">
                  <span className="pr-3 text-sm font-medium text-black dark:text-white">
                    GetRyd Cash
                  </span>
                  <Switch />
                </div>
              </div>

              <div className="mx-auto px-[6px] py-1 pb-10 dark:text-white 2xs:px-1">
                <h1 className="2xs:text-18 font-extrabold text-black dark:text-gray-2 2xl:text-22 2xs:mb-2">
                  Choose other payment method
                </h1>
                <div className="relative">
                  <Button color={"gray"} iconPosition="left" iconName="paypal">
                    Paypal
                  </Button>
                  <div className="absolute right-5 top-10">
                    <IconSvg name={"checkMark"} />
                  </div>
                </div>
                <div className="my-4">
                  <Button color={"gray"} iconPosition="left" iconName="apple">
                    Apple Pay
                  </Button>
                </div>
                <div className="mt-4">
                  <Button color={"gray"} iconPosition="left" iconName="google">
                    Google Pay
                  </Button>
                </div>
              </div>
              <div className="">
                <div className="mx-2">
                  <Button
                    color="gray"
                    className="border bg-white"
                    handler={() => Router.push("/reserve/card")}
                  >
                    + Add Payment method
                  </Button>

                  <Button
                    color="gray"
                    className="border bg-white"
                    handler={() => Router.push("/reserve/card")}
                  >
                    + Add Voucher code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestRidePaymentView;
