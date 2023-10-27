import DockImages from "../constants/DockImages";
import { DockContextType, Item } from "../types";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import DockItem from "./Dockitem";
import { MouseProvider } from "../context/MouseProvider";

const DockUi = ({
  item,
  OpenTerminal,
}: {
  item: Item;
  OpenTerminal: (item: string) => void;
}) => {
  return (
    <DockItem>
      <div className="relative flex-col flex h-full w-full items-center justify-center ">
        <img src={item.url} className="" onClick={() => OpenTerminal(item.action)} />
        {item.showDot && <div className="flex h-2 w-2 bg-white rounded-full" />}
      </div>
    </DockItem>
  );
};
const DockContext = createContext<DockContextType | null>(null);

export const useDock = () => {
  return useContext(DockContext);
};
const Dock = ({ OpenTerminal }: { OpenTerminal: (item: string) => void }) => {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    setWidth(ref?.current?.clientWidth);
  }, []);
  return (
    <MouseProvider>
      <footer className="fixed inset-x-0 bottom-6 z-40 flex w-full justify-center">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2"
          >
            <ul className="flex h-10 items-end justify-center space-x-3">
              {DockImages.map((item, index) => {
                return (
                  <DockUi item={item} key={index} OpenTerminal={OpenTerminal} />
                );
              })}
            </ul>
          </nav>
        </DockContext.Provider>
      </footer>
    </MouseProvider>
  );
};

export default Dock;
