import { forwardRef } from "react";
import MakeDraggable from "./MakeDraggable";
enum TerminalACTIONS {
  MIN = "min",
  MAX = "max",
  CLOSE = "close",
}
const Terminal = forwardRef((_props, ref: any) => {
  const handleResize = (action: TerminalACTIONS) => {
    if (!ref || !ref.current || ref == undefined) {
      return;
    }
    switch (action) {
      case "min":
        ref.current.classList.add("max-w-x");
        ref.current.classList.remove("w-full");
        break;
      case "max":
        ref.current.classList.replace("w-full", "max-w-xl");
        ref.current.classList.replace("h-64", "h-full");
        break;
      case "close":
        ref.current.classList.replace("flex", "hidden");
        break;
      default:
        break;
    }
  };
  return (
    <MakeDraggable>
      <div
        ref={ref}
        className="flex max-w-xl h-64 handle flex-col rounded-xl text-white "
      >
        <div className="w-full flex bg-[#38343D] gap-2 py-2 px-4 items-center">
          <div className="flex gap-4 justify-start">
            <div
              onClick={() => {
                handleResize(TerminalACTIONS.CLOSE);
              }}
              className="dot flex bg-red-500 h-3 w-3 rounded-full cursor-pointer"
            ></div>
            <div
              onClick={() => {
                handleResize(TerminalACTIONS.MAX);
              }}
              className="dot flex bg-yellow-500 h-3 w-3 rounded-full  cursor-pointer"
            ></div>
            <div
              onClick={() => {
                handleResize(TerminalACTIONS.MIN);
              }}
              className="dot flex bg-green-500 h-3 w-3 rounded-full  cursor-pointer"
            ></div>
          </div>
          <div className="flex w-full justify-center mr-8 h-full">
            <p className="text-sm">anshu@anshu:~$</p>
          </div>
        </div>
        <div className="flex bg-[#1E1E1E] p-4 h-full gap-4 items-start w-full">
          <p>anshu@anshu:~$ </p>
          <input
            type="text"
            className="bg-transparent appearance-none border-none w-full active:border-none outline-none text-green-700"
            name=""
            id=""
          />
        </div>
      </div>
    </MakeDraggable>
  );
});

export default Terminal;
