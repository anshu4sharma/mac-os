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
      className={`absolute bg-black/10 backdrop-blur-md p-3 text-white border-[0.5px] rounded-lg shadow-md max-w-fit w-full ${
        showMenu ? "block" : "hidden"
      }`}
      style={{ top: y, left: x }}
    >
      <ul>
        {ContextItems.map((item, index) => {
          return (
            <li key={index} className="p-2 hover:bg-blue-500 text-sm cursor-pointer font-medium rounded">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextMenu;
