const RequestRideShareContactList = (props) => {
  const { name, image, handleClick } = props;
  return (
    <>
      <div
        className="w-[64px] text-center"
        id="share-contact"
        onClick={handleClick}
      >
        <img
          src={"/assets/images/request_ride/" + image}
          alt=""
          className=" w-[64px]"
        />
        <p className="mt-1 text-[13px] font-[450] text-[#303030] dark:text-gray-1 ">
          {name}
        </p>
      </div>
    </>
  );
};

export default RequestRideShareContactList;
