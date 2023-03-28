import { RatingContext } from "@/context/Context";
import { useContext } from "react";

export default (props) => {
  const { radioHandler, value } = useContext(RatingContext);
  return (
    <>
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor="html"
        data-ripple-dark="true"
      >
        <input
          id="html"
          name="type"
          type="radio"
          value={value}
          onChange={radioHandler}
          className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary-500 text-primary-500  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary-500 checked:before:bg-primary-500 hover:before:opacity-10 dark:border-white"
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary-500 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 dark:fill-white"
            viewBox="0 0 16 16"
            fill="#29225E"
          >
            <circle data-name="ellipse" cx={8} cy={8} r={8} />
          </svg>
        </div>
      </label>
    </>
  );
};
