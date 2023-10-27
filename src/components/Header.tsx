import AppleSvg from "../assets/AppleSvg";
import SettingsSvg from "../assets/SettingsSvg";

const Header = () => {
  return (
    <div className="text-xs items-center text-white font-medium flex justify-between bg-white/10 backdrop-blur-md px-4 py-2">
      <div className="flex gap-4 items-center">
        <AppleSvg width={20} height={20} />
        <p className="font-semibold">Finder</p>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Window</p>
        <p>Help</p>
      </div>
      <div className="flex gap-2 items-center">
        <SettingsSvg width={16} height={16} />
        <p>Fri Oct 27</p>
        <p>4:30 PM</p>
      </div>
    </div>
  );
};

export default Header;
