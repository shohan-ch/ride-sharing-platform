import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Button from "@/components/Utils/Button/Button";
import ContactList from "@/components/Utils/List/ContactList";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const ChooseContactView = () => {
  const clickHandeler = () => {
    console.log("button click");
  };
  let getContacts = [
    {
      name: "Arnold Michaels",
      mobile: "+1 354 654986",
      type: "mobile",
    },
    {
      name: "Abagnale Frank",
      mobile: "+1 354 654986",
      type: "mobile",
      status: true,
    },
    {
      name: "Ornold Stack",
      mobile: "+1 354 654986",
      type: "mobile",
    },
    {
      name: "Abel Putin",
      mobile: "+1 354 654986",
      type: "mobile",
      status: true,
    },
  ];
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 pt-5 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden rounded-b-3xl border-0 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[450px] lg:pt-0 xl:h-[590px] 2xl:h-[490px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="flex items-center justify-between bg-gray-1 px-5 pt-2 pb-[30px] dark:bg-dark-bg md:pb-12">
              <h1 className="t font-extrabold text-black dark:text-white 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                Choose Contact
              </h1>
              <Link
                href="/help/payment_option"
                className="text-bold text-[16px] text-[#29225E] dark:text-white"
              >
                Close
              </Link>
            </div>

            <InputFieldWithIcon
              leftIconName="searchHelp"
              placeholder="Search for a name or phone number"
              className=" !rounded-none border-y-[1px] border-[#2F276D] bg-gray-1 py-3 pl-12 placeholder:text-[#2F276D]"
            />

            <div className="dark:bg- mb-16 w-full bg-gray-1">
              <h1 className="py-[7px] pl-5 text-[12px] font-bold dark:text-white md:text-[14px]">
                A
              </h1>

              <ContactList contacts={getContacts} />
            </div>

            <div className="mt-5 mb-10 px-5">
              <button
                onClick={() => alert(123)}
                className="rounded-5 shadow-one dark:shadow-dark absolute left-0 right-0 mx-5 flex items-center justify-center rounded-md border-2 border-transparent bg-primary-500 py-4 text-base font-semibold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500 md:bottom-0 lg:absolute lg:bottom-[22px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0"
              >
                Choose Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseContactView;
