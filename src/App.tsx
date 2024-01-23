import { useEffect, useState } from "react";
import Dock from "./components/Dock";
import Header from "./components/Header";
import ContextMenu from "./components/ContextMenu";
import Terminal from "./components/Terminal";
import Loader from "./components/Loader";
import CommandPallete from "./components/CommandPallete";

const App = () => {
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, show: false });
  const [openTerminal, SetOpenTerminal] = useState(false);
  const [showCommandPallete, setshowCommandPallete] = useState(false);
  setshowCommandPallete;
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let isBgloaded = false;
    const image = new Image();
    image.src = "/assets/bg.jpg"; // Replace with the actual image URL

    image.onload = () => {
      isBgloaded = true;
      // Set imagesLoaded to true when the image is loaded properly
    };

    // Handle cases where the image fails to load
    image.onerror = () => {
      window.location.reload();
      // Handle the error or retry loading the image
    };
    // Simulate image loading by using a setInterval
    const timeout = setInterval(() => {
      if (isBgloaded) {
        setImagesLoaded(true);
      }
    }, 3000); // Replace with your image loading logic

    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 32) {
        setshowCommandPallete(true);
      }
    });
    // Clear the timeout to handle cases where images don't load
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("keydown", function (event) {
        if (event.keyCode === 32) {
          setshowCommandPallete(true);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* {imagesLoaded ? ( */}
        <>
          <Header />
          <CommandPallete
            setshowCommandPallete={setshowCommandPallete}
            showCommandPallete={showCommandPallete}
          />
          <section
            onContextMenu={handleContextMenu}
            className="h-screen w-full"
          >
            <ContextMenu
              x={contextMenu.x}
              y={contextMenu.y}
              showMenu={contextMenu.show}
            />
            {openTerminal && <Terminal HandleTerminal={HandleTerminal} />}
          </section>
          <Dock OpenTerminal={HandleTerminal} />
        </>
      {/* ) : (
        <Loader />
      )} */}
    </div>
  );
};

export default App;
