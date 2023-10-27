import { useEffect, useRef, useState } from "react";
import Dock from "./components/Dock";
import Header from "./components/Header";
import ContextMenu from "./components/ContextMenu";
import Terminal from "./components/Terminal";
import { Item } from "./types";

const App = () => {
  const TerminalRef = useRef<HTMLDivElement>(null);
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, show: false });

  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setContextMenu({
      x: e.pageX,
      y: e.pageY,
      show: true,
    });
  };

  const handleClick = () => {
    setContextMenu({ ...contextMenu, show: false });
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  const OpenTerminal = (item: Item) => {
    if (!TerminalRef && TerminalRef !== null) {
      return;
    }
    if (item.action == "OpenTerminal") {
      // @ts-ignore
      TerminalRef.current.classList.replace("hidden", "flex");
    }
  };
  return (
    <div className="h-screen">
      <Header />
      <section onContextMenu={handleContextMenu} className="min-h-full w-full ">
        <Terminal ref={TerminalRef} />
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          showMenu={contextMenu.show}
        />
      </section>
      <Dock OpenTerminal={OpenTerminal} />
    </div>
  );
};

export default App;
