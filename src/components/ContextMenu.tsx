import ContextItems from "../constants/ContextItems";

const ContextMenu = ({
  x,
  y,
  showMenu,
}: {
  x: number;
  y: number;
  showMenu: boolean;
}) => {
  return (
    <div
      className={`absolute bg-white/10 backdrop-blur-md p-3 text-white border rounded-lg shadow-md max-w-[260px] w-full ${
        showMenu ? "block" : "hidden"
      }`}
      style={{ top: y, left: x }}
    >
      <ul>
        {ContextItems.map((item, index) => {
          return (
            <li key={index} className="p-2 hover:bg-white/10 text-sm cursor-pointer font-medium">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextMenu;
