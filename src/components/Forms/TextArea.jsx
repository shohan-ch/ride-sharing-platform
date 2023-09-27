const TextArea = (props) => {
  const { handleChange, value, placeholder } = props;

  return (
    <>
      <textarea
        onChange={handleChange}
        placeholder={placeholder}
        className="h-[156px] w-full rounded bg-gray-100 p-5 text-gray-light dark:bg-[#2C2C35] sm:h-[100px]"
        defaultValue={""}
      />
    </>
  );
};

export default TextArea;
