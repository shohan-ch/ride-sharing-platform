const InputField = (props) => {
  const {
    label,
    type,
    placeholder,
    value,
    name,
    handeleInputChange,
    innerRef,
    handleClick,
    className,
  } = props;

  return (
    <>
      <label
        htmlFor="firstName"
        className="mb-5 text-base font-medium text-gray-light dark:text-white 2xs:hidden"
      >
        {label}
      </label>

      <input
        ref={innerRef}
        type={type}
        name={name}
        value={value}
        className={`${className} mt-3 h-[48px] w-full rounded-md border bg-gray-1 p-2 focus:shadow-md focus:outline-0 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:outline-1 dark:focus:ring-black`}
        placeholder={placeholder}
        onChange={handleClick || handeleInputChange}
        onClick={handleClick}
      />
    </>
  );
};
export default InputField;
