import MakeDraggable from "./MakeDraggable";
const Terminal = ({
  HandleTerminal,
}: {
  HandleTerminal: (action: string) => void;
}) => {
  return (
    <MakeDraggable>
      <div
        className="flex max-w-xl h-64 handle flex-col rounded-xl text-white "
      >
        <div className="w-full flex bg-[#38343D] gap-2 py-2 px-4 items-center">
          <div className="flex gap-4 justify-start">
            <div
              onClick={() => {
                HandleTerminal("OpenTerminal");
              }}
              className="dot flex bg-red-500 h-3 w-3 rounded-full cursor-pointer"
            />
            <div className="dot flex bg-yellow-500 h-3 w-3 rounded-full  cursor-pointer" />
            <div className="dot flex bg-green-500 h-3 w-3 rounded-full  cursor-pointer" />
          </div>
          <div className="flex w-full justify-center mr-8 h-full">
            <p className="text-sm">anshu@anshu:~$</p>
          </div>
        </div>
        <div className="flex bg-[#1E1E1E] p-4 h-full gap-4 items-start w-full">
          <p>anshu@anshu:~$ </p>
          <input
            type="text"
            autoFocus
            className="bg-transparent appearance-none border-none w-full active:border-none outline-none text-white font-semibold"
          />
        </div>
      </div>
    </MakeDraggable>
  );
};

export default Terminal;
