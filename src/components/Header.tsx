import AppleSvg from "../assets/AppleSvg";
import SettingsSvg from "../assets/SettingsSvg";
const date = new Date();
// Get the day of the week, date, and month
const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
  date
);
const dayOfMonth = date.getDate();
const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);

// Get the time (hours and minutes) in AM/PM format
const hours = date.getHours() % 12 || 12; // Convert 0 to 12
const minutes = date.getMinutes();
const ampm = date.getHours() >= 12 ? "PM" : "AM";

// Combine them into the desired format
const formattedDate = `${dayOfWeek}  ${month} ${dayOfMonth} ${hours}:${minutes} ${ampm}`;
const Header = () => {
  return (
    <div className="text-xs items-center text-white font-medium flex justify-between bg-black/20 backdrop-blur-md p-2 px-4 h-full">
      <div className="flex gap-4 items-center">
        <AppleSvg width={20} height={20} />
        <p className="font-bold text-sm">Finder</p>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Window</p>
        <p>Help</p>
      </div>
      <div className="md:flex hidden gap-2 items-center">
        <SettingsSvg width={16} height={16} />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default Header;
