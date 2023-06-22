import InputField from "@/components/Forms/InputField";
import Button from "@/components/Utils/Button/Button";
import IconSvg from "@/icons/IconSvg";
import Link from "next/link";
const ProfileEditView = () => {
  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative bg-white pt-5 dark:bg-dark-bg sm:pb-8  sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border 2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pt-2 2xs:pb-10 2xs:dark:border-0">
          <div className=" sm:pt-4 sm:text-left lg:pt-0 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="scroll_div h-full overflow-y-auto overflow-x-hidden py-2 dark:border-[#2C2C35] md:h-full lg:h-[390px] xl:h-[490px] 2xl:h-[390px] 3xl:h-[700px] 2xs:pt-0">
              <div className="pickup_header 2xs:br13 mb-10 flex pl-5 md:px-6 lg:pr-8 2xs:mb-5">
                <Link href="/rider_profile">
                  <img src="/assets/icons/back.svg" alt="svg_icon" />
                </Link>
                <h2 className=" mx-auto mt-2 inline-block text-center font-extrabold text-black dark:text-gray-2 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Edit Profile
                </h2>
              </div>
              <div className="avatar_header relative mb-8 px-5">
                <div>
                  <img src="/assets/rider/avatar.png" alt="avatar" width={85} />
                </div>
                <a href="#" className="edit_pen">
                  <IconSvg name={"penWithBg"} />
                </a>
              </div>
              <div className="form px-5">
                <form action="#">
                  <div className="sm:mb-8 2xs:mb-4">
                    <InputField
                      label="First Name"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="sm:mb-8 2xs:mb-4">
                    <InputField
                      label="Last Name"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div className="sm:mb-8 2xs:mb-4">
                    <InputField
                      label=" Phone Number"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="sm:mb-8 2xs:mb-4">
                    <InputField
                      label="Email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="sm:mb-8 2xs:mb-4">
                    <InputField label="Password" placeholder="Enter Password" />
                  </div>
                </form>
              </div>
            </div>
            <div className="absolute left-0 right-0 mx-5 md:bottom-0 lg:absolute lg:bottom-[0px] 2xs:fixed 2xs:bottom-[8px] 2xs:left-0 2xs:right-0">
              <Button color="blue">Save</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileEditView;
