import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import ContactListWithImage from "@/components/Utils/List/ContactListWithImage";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const ListTrustedContactView = () => {
  const clickHandeler = (id) => {
    alert(id);
    Router.push("/account_setting/choose_contacts");
  };
  let getContacts = [
    {
      name: "Arnold Michaels",
      mobile: "+1 354 654986",
      email: "admin@admin.com",
      image: "profile.svg",
    },
    {
      name: "Abagnale Frank",
      mobile: "+1 354 654986",
      email: "sertr@admin.com",
      image: "trusted-contact-01.png",
    },
    {
      name: "Ornold Stack",
      mobile: "+1 354 654986",
      email: "asdas@email.com",
      image: "trusted-contact-02.png",
    },
  ];

  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full snap-start  overflow-y-auto overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[350px] lg:pt-0 xl:h-[550px] 2xl:h-[380px] 3xl:h-[650px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            {/* The header of the page */}
            <div className="flex items-center pt-2 pb-[25px] pl-5  dark:bg-dark-bg md:pb-10">
              <Link href="/account_setting/save_contact">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>

              <h2 className="mx-auto font-extrabold  text-black dark:text-white lg:ml-16 2xl:text-22 3xl:text-[24px]  2xs:text-[18px]">
                Trusted Contacts (3)
              </h2>
            </div>
            <div className="bg-bg-color px-5 pt-8 dark:bg-dark-bg dark:text-white md:pt-10">
              <div className="">
                <ContactListWithImage
                  contacts={getContacts}
                  handleClick={clickHandeler}
                />
              </div>
            </div>
          </div>

          <div className="px-5 pt-10">
            <Button color="blue" handler={clickHandeler}>
              Add Trusted Contacts
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListTrustedContactView;
