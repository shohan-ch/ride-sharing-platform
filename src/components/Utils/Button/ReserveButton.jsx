export default (props) => {
  const { children, clickHandler, isFocus } = props;

  return (
    <>
      <button
        onClick={clickHandler}
        className={`${
          isFocus && "ring-2 ring-primary-500"
        } rounded-5 dark:shadow-dark group flex items-center justify-center rounded-md
           border text-base font-semibold shadow-xl shadow-black/5 hover:border-0 
           hover:outline-0 hover:ring-2 hover:ring-primary-500 hover:duration-500 
           focus:border-0 focus:border-primary-500 focus:outline-0 focus:ring-2 focus:ring-primary-500 disabled:cursor-default
            disabled:opacity-70 dark:border-transparent dark:bg-gray-700 dark:text-white 
            dark:ring-2 dark:ring-white dark:hover:ring-white dark:focus:border-white 
            sm:h-[50px] sm:w-[450px] lg:h-[51px] lg:w-[301px]
            2xs:h-[53px] 2xs:w-[180px]`}
      >
        <span className="self-center"> {children}</span>
      </button>
    </>
  );
};
