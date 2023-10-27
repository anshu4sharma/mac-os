import DockImages from "../constants/DockImages";
import { Item } from "../types";

const DockItem = ({ item }: { item: Item }) => {
  return (
    <div className="flex flex-col gap-2 items-center group cursor-pointer">
      <img src={item.url} className="w-16 h-16 group-hover:animate-bounce" alt="notfound" />
      {item.showDot && <div className="flex h-2 w-2 bg-white rounded-full" />}
    </div>
  );
};
const Dock = () => {
  return (
    <div className="text-xs absolute justify-center bottom-2 w-full items-center text-white font-medium flex px-4 py-2">
      <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2">
        {DockImages.map((item, index) => {
          return <DockItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Dock;
