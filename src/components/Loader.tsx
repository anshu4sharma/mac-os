import AppleSvg from "../assets/AppleSvg";
import  { useState, useEffect } from "react";

const Loader = () => {
  // State to track the progress (between 0 and 100)
  const [progress, setProgress] = useState(0);

  // Simulate the progress increment over time (you can replace this logic)
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      role="status"
      className="fixed top-0 flex items-center justify-center w-full left-0 right-0 bottom-0 h-[100vh] flex-col gap-4"
      style={{ background: "black" }}
    >
      <AppleSvg height={100} width={100} />

      <div className="w-full bg-gray-200 rounded-md h-2.5 dark:bg-gray-700 max-w-xs mt-10">
        <div
          className="bg-white h-2.5 rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
