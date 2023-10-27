import { useEffect, useState } from "react";
import Dock from "./components/Dock";
import Header from "./components/Header";
import ContextMenu from "./components/ContextMenu";
import Terminal from "./components/Terminal";

const App = () => {
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, show: false });
  const [openTerminal, SetOpenTerminal] = useState(false);
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
  const HandleTerminal = (action: string) => {
    if (action !== "OpenTerminal") {
      return;
    }
    SetOpenTerminal(!openTerminal);
  };
  return (
    <div className="min-h-screen">
      <Header />
      <section onContextMenu={handleContextMenu} className="min-h-full w-full ">
        {openTerminal && <Terminal HandleTerminal={HandleTerminal} />}
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          showMenu={contextMenu.show}
        />
      </section>
      <Dock OpenTerminal={HandleTerminal} />
    </div>
  );
};

export default App;
