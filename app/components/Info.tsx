import { MapIcon, PhoneIcon } from "./Icons";

const Info = () => {
  return (
    <div className="flex items-center space-x-4 text-sm mx-3">
      <div className="flex flex-row items-center">
        <PhoneIcon /> <a href="tel:0888393339"> 0888393339</a>
      </div>
      <div className="flex flow-row items-center">
        <MapIcon />
        51/12 Đường 3/2, NK, CT
      </div>
    </div>
  );
};

export default Info;
