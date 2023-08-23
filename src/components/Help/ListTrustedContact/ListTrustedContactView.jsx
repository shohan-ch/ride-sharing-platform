import Button from "@/components/Utils/Button/Button";
import InfoButton from "@/components/Utils/Button/InfoButton";
import ContactListWithImage from "@/components/Utils/List/ContactListWithImage";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import Router from "next/router";
const ListTrustedContactView = () => {
  const clickHandeler = (id) => {
    console.log("button click" + id);
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
      image: "profile.svg",
    },
    {
      name: "Ornold Stack",
      mobile: "+1 354 654986",
      email: "asdas@email.com",
      image: "profile.svg",
    },
  ];

  return (
    <>
      <section className="sec md:block md:h-full md:w-full lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-5 dark:bg-dark-bg sm:pb-8 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl  lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full snap-start  overflow-y-auto overflow-x-hidden border-0 bg-bg-color dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[350px] lg:pt-0 xl:h-[550px] 2xl:h-[380px] 3xl:h-[650px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            {/* The header of the page */}
            <div className="flex items-center pt-2 pb-[25px] pl-5  dark:bg-dark-bg md:pb-10">
              <Link href="/help/payment_option">
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

                <div className="mb-8 flex items-center border-b-[1px] border-[#F6F6F6] pb-5 dark:border-[#2C2C35]">
                  <img
                    src="./assets/images/icons/Account Settings/profile.svg"
                    alt=""
                  />
                  <div className="ml-4 flex w-full items-center justify-between md:ml-6">
                    <div>
                      <h1 className="mb-[2px]  text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                        Albert Flores
                      </h1>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        +1 385 845840
                      </p>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        alberflores111@gmail.com{" "}
                      </p>
                    </div>
                    <div className="mr-[6px] md:mr-3">
                      <svg
                        className="md:h-4 md:w-2"
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dark:stroke-gray-2"
                          d="M1 9.5L5 5.5L1 1.5"
                          stroke="#1A1A1A"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mb-8 flex items-center border-b-[1px] border-[#F6F6F6] pb-5 dark:border-[#2C2C35]">
                  <img
                    src="./assets/images/icons/trusted-contact-01.png"
                    alt=""
                  />
                  <div className="ml-4 flex w-full items-center justify-between md:ml-6">
                    <div>
                      <h1 className="mb-[2px]  text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                        Frank Abagnale
                      </h1>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        +1 385 845840
                      </p>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        frank@firestudio.co{" "}
                      </p>
                    </div>
                    <div className="mr-[6px] md:mr-3">
                      <svg
                        className="md:h-4 md:w-2"
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dark:stroke-gray-2"
                          d="M1 9.5L5 5.5L1 1.5"
                          stroke="#1A1A1A"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex items-center pb-5">
                  <img
                    src="./assets/images/icons/trusted-contact-02.png"
                    alt=""
                  />
                  <div className="ml-4 flex w-full items-center justify-between md:ml-6">
                    <div>
                      <h1 className="mb-[2px]  text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2">
                        James Smith
                      </h1>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        +1 385 845840
                      </p>
                      <p className="mb-[2px] text-[13px] font-[450] text-gray-light dark:text-gray-1 md:mb-2  md:font-medium ">
                        smith.james@gmail.com
                      </p>
                    </div>
                    <div className="mr-[6px] md:mr-3">
                      <svg
                        className="md:h-4 md:w-2"
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dark:stroke-gray-2"
                          d="M1 9.5L5 5.5L1 1.5"
                          stroke="#1A1A1A"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pt-10">
            <button
              onclick="location.href='./choose_trusted_contact.html'"
              className="w-full rounded  bg-[#29225E] px-[auto] py-[13px] text-[16px] font-bold text-[#FFFEFD] hover:bg-primary-hover dark:bg-[#493DA8] dark:text-[#FFFEFD] dark:hover:bg-[#29225E] md:py-[17px] md:text-lg"
            >
              <span>Add Trusted Contact</span>
            </button>
          </div>
        </div>
      </section>

      {/* <section className="sec items-center justify-center md:block md:h-full md:w-full  lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-bg-color pt-6 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto  overflow-x-hidden border-0 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[490px] 3xl:h-[750px] 2xs:px-0  2xs:pt-0 2xs:text-left">
            <div className="px-5 pt-2 pb-[30px] md:pb-7">
              <Link href="/help/payment_option">
                <img src="/assets/icons/back.svg" alt="svg_icon" />
              </Link>
            </div>
            <div className="mx-5">
              <img
                src="/assets/images/help/trusted_conact_banner.png"
                className="block w-full h-full px-5 mx-auto dark:hidden"
                alt=""
              />
              <img
                src="/assets/images/help/trusted_conact_banner_dark.png"
                className="mb-[50px] hidden h-full w-full px-5 dark:block md:mb-12"
                alt=""
              />
              <div className="mt-[50px] mb-9 text-center md:mt-12 md:mb-7">
                <h1 className="text-left text-2xl font-bold  text-[#1A1A1A] dark:text-white md:text-2xl">
                  Keep your friends or family updated during rides
                </h1>
              </div>
              <div>
                <div className="mb-[25px] flex items-center border-b-[1px] border-[#F6F6F6] pb-[25px] dark:border-[#2C2C35] md:mb-7  md:pb-7">
                  <img src="/assets/images/help/location.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Share trip status{" "}
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You will be able to share your live location with one or
                      more contacts during any GetRyd trip.{" "}
                    </p>
                  </div>
                </div>
                <div className="mb-[50px] flex items-center md:mb-[100px]">
                  <img src="/assets/images/help/body.svg" alt="" />
                  <div className="ml-4 md:ml-5">
                    <h1 className="mb-2 text-[14px] font-bold text-[#1A1A1A] dark:text-white md:mb-2 md:text-[18px]">
                      Set your emergency contacts
                    </h1>
                    <p className="text-[13px] text-gray-light dark:text-gray-1 md:text-[16px]">
                      You can make a trusted contacted as an emergency contact.
                      GetRyd can call them if we can’t reach you, in case of an
                      emergency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bottom-0 left-0 right-0 2xs:sticky">
                <Button color="blue" handler={clickHandeler}>
                  Add Trusted Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ListTrustedContactView;
