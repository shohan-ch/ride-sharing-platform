export default (props) => {
  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" defaultValue="" className="peer sr-only" />
        <div className="peer h-6 w-11 rounded-full  bg-gray-2 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-primary-500 after:transition-all after:content-[''] peer-checked:bg-primary-500 peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      </label>
    </>
  );
};
