const PaymentButton = (props) => {
  const { children, handleClick, active } = props;

  const style = {
    blue: "shadow-one dark:shadow-dark w-[50%] rounded-lg bg-primary-500 py-1 px-12 font-bold text-white hover:bg-primary-hover hover:text-white focus:border-blue-500 focus:ring-blue-500 disabled:cursor-default disabled:opacity-70 dark:bg-primary dark:hover:bg-primary-500",
    white:
      "hover w-[50%] rounded-lg bg-[#FFFFFF] py-1 px-12 font-bold text-black hover:bg-gray-2 dark:bg-dark-bg dark:text-white dark:hover:bg-slate-600",
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${active ? style["blue"] : style["white"]} `}
      >
        {children}
      </button>
    </>
  );
};

export default PaymentButton;
