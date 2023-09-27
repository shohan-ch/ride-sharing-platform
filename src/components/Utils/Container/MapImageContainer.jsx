const MapImageContainer = () => {
  return (
    <>
      <div className="w-full">
        <img
          className="w-full dark:hidden"
          src="/assets/images/request_ride/Group 199.jpg"
          alt=""
        />
        <img
          className="hidden dark:block"
          src="/assets/images/request_ride/Group 199_dark.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default MapImageContainer;
