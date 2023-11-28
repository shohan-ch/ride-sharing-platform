import InputFieldWithIcon from "@/components/Forms/InputFieldWithIcon";
import Link from "next/link";
import LocationInput from "./LocationInput";
import { useEffect, useState, useRef } from "react";
import Router from "next/router";

const AddLocationView = () => {
  const [inputFields, setInputFields] = useState([{ id: 1 }]);
  let [inputCount, setInputCount] = useState(1);
  const [formData, setFormData] = useState({
    currentLocation: "",
  });

  const currentLocationRef = useRef(null);
  useEffect(() => {
    currentLocationRef.current.focus();
  }, []);

  const addInputs = () => {
    if (inputFields.length < 5) {
      setInputCount(++inputCount);
      setInputFields([...inputFields, { id: inputCount }]);
    } else {
      return;
    }
  };

  const removeInput = (id) => {
    if (inputFields.length === 5) {
      setInputCount(0);
    }
    // alert(id);
    setInputFields(inputFields.filter((item) => item.id != id));
    setFormData((prevData) => {
      // Remove
      const { ["destination" + id]: _, ...rest } = prevData;
      return rest;
    });
  };

  const inputChangeHandler = (id) => (e) => {
    setFormData({ ...formData, ["destination" + id]: e.target.value });
  };
  console.log(formData);
  console.log(inputCount);

  return (
    <>
      <section className="sec items-center justify-center md:block md:h-full md:w-full lg:flex lg:justify-start lg:pl-[480px] lg:pt-[10px] 2xs:block 2xs:h-full 2xs:w-full">
        <div className="wrapper relative h-full bg-gray-1 pt-5 dark:bg-dark-2 sm:dark:border-0 lg:w-[428px] lg:rounded-3xl lg:dark:border  2xl:min-h-[85vh] 3xl:min-h-[88vh] 2xs:w-auto 2xs:pb-10 2xs:dark:border-0">
          <div className="h-full overflow-y-auto overflow-x-hidden border-0 bg-gray-1  dark:bg-dark-2 sm:pt-0 sm:text-left lg:h-[450px] lg:rounded-3xl lg:pt-0 xl:h-[650px] 2xl:h-[500px] 3xl:h-[750px] 2xs:px-0 2xs:pt-0 2xs:text-left">
            <div className="bg-gray-1 pt-2 pb-0 dark:bg-dark-2 md:pb-10">
              <div className="mb-8 flex items-center px-5">
                <Link href="/request_ride/location">
                  <img src="/assets/icons/backbgWhite.svg" alt="svg_icon" />
                </Link>

                <h2 className="mx-auto font-extrabold  text-black dark:text-white lg:ml-[100px] 2xl:text-22 3xl:text-[24px] 2xs:text-[18px]">
                  Request Now
                </h2>
                <button
                  onClick={() => Router.push("/request_ride/choose_vehicle")}
                  className="text-[16px ] font-bold text-black dark:text-gray-1"
                >
                  Done
                </button>
              </div>
              {/* Input Setion  Start*/}
              <div className="flex w-full items-center justify-between gap-2 border-b-4 border-white px-5 dark:border-[#202028]">
                <div className="w-full">
                  <InputFieldWithIcon
                    innerRef={currentLocationRef}
                    placeholder="Current Location"
                    leftIconName="dot"
                    className="!bg-white"
                  />
                  {/* Add more destination input */}

                  {inputFields.length > 0 &&
                    inputFields.map((item, index) => (
                      <>
                        {/* {alert(item)} */}
                        <LocationInput
                          ChangleHandler={inputChangeHandler(item.id)}
                          key={item.id}
                          icon={
                            item == inputFields[inputFields.length - 1]
                              ? "add"
                              : ""
                          }
                          buttonHandler={
                            item == inputFields[inputFields.length - 1]
                              ? addInputs
                              : () => removeInput(item.id)
                          }
                        />
                      </>
                    ))}
                  {/* <LocationInput icon={"add"} buttonHandler={addInputs} /> */}
                </div>
              </div>
              {/* Input Section End  */}
              <div className="mt-3">
                <p className="mb-3 px-5 text-[12px] text-black dark:text-gray-1">
                  Now you can add multiple stops to your ride. You can change
                  the order of your stop by dragging the right icon in the
                  destination address field.
                </p>
                <img
                  className="w-full dark:hidden"
                  src="/assets/images/request_ride/3_Street.png"
                  alt=""
                />
                <img
                  className="hidden w-full dark:block"
                  src="/assets/images/request_ride/3_Street_dark.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddLocationView;
