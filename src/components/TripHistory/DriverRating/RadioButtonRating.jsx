import IconSvg from "@/icons/IconSvg";
import Radio from "@/components/Forms/Radio";

export default ({ numberOfStar }) => {
  const stars = [];
  const starIcon = () => {
    for (let i = 0; i < numberOfStar; i++) {
      stars[i] = <IconSvg name={"star"} width={26} height={26} />;
    }
  };
  starIcon();
  return (
    <>
      <div className="list mb-6 flex items-center justify-between">
        {/* Star icon */}
        <div>
          {/* <IconSvg name={"star"} width={26} height={26} /> */}
          {stars}
        </div>
        <Radio />
      </div>
    </>
  );
};
