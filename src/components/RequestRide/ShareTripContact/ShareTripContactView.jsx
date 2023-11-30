import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
import RequestRideShareContactList from "@/components/Utils/List/RequestRideShareContactList";
import Router from "next/router";

const ShareTripContactView = () => {
  let suggestedContacts = [
    {
      name: "James",
      image: "Ellipse 23james.png",
    },
    {
      name: "Colin",
      image: "Frame 145.png",
    },
  ];

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full  bg-gray-1 dark:bg-dark-bg sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh]  2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1 dark:bg-dark-bg sm:pt-0 sm:text-left lg:h-[460px] lg:rounded-3xl lg:pt-0 xl:h-[600px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="pb-[25px] blur-[3px] brightness-75 dark:bg-dark-bg sm:hidden md:pb-10">
              <div className="absolute top-7 mb-12 flex items-center px-5">
                <Link href="/request_ride/sharetrip_status">
                  <img src="/assets/icons/backBgWhite.svg" alt="svg_icon" />
                </Link>
              </div>
              <div className="w-full">
                <img
                  className="w-full dark:hidden"
                  src="/assets/images/request_ride/Group 199.jpg"
                  alt=""
                />
                <img
                  className="hidden w-full dark:block"
                  src="/assets/images/request_ride/Group 199_dark.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-full rounded-3xl bg-bg-color dark:bg-dark-2 lg:relative">
              <div className="h-full overflow-y-auto lg:h-[300px] xl:h-[400px] 2xl:h-[300px] 3xl:h-full">
                <div className="mb-6 border-b-[1px] border-[#F6F6F6] px-5 pb-6 pt-5 dark:border-[#383838]">
                  <h2 className="mb-1 font-bold dark:text-white md:text-[16px] lg:text-[20px] 2xs:text-[14px]">
                    Share trip status
                  </h2>
                  <p className="mb-4 text-[13px] font-[450] text-black dark:text-gray-1 md:font-medium ">
                    Tap a contact to share your trip status
                  </p>
                  <p className="text-[13px] font-[450] text-gray-light dark:text-gray-1 md:font-medium ">
                    By clicking 'Share', I agree that I have given permission to
                    have GetRyd send my contact a push or text message.
                  </p>
                </div>
                <div className="flex items-start gap-4 border-b-[1px] border-[#F6F6F6] px-5 pb-3 dark:border-[#383838]">
                  <Link href={"/request_ride/sharetrip_contact_list"}>
                    <div className="w-[64px] text-center">
                      <IconSvg name={"plusPayment"} width={58} height={58} />
                      <p className="mb-4 mt-1 text-[13px] font-bold text-black dark:text-gray-1 ">
                        Add Contact
                      </p>
                    </div>
                  </Link>
                  {/* List  */}
                  {suggestedContacts.length > 0 &&
                    suggestedContacts.map((contact, index) => (
                      <RequestRideShareContactList
                        name={contact.name}
                        image={contact.image}
                      />
                    ))}
                </div>
              </div>

              <div className="mx-auto mb-16 mt-6 space-y-4 px-4 lg:pt-4 2xs:mt-5">
                <Button
                  color="gray"
                  iconName="download"
                  iconPosition="left"
                  className="border hover:bg-primary-hover hover:text-white"
                >
                  Copy Share Link
                </Button>

                <Button
                  color="blue"
                  handler={() => Router.push("/request_ride/rider_accept")}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShareTripContactView;
