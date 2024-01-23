import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Items = [
  {
    name: "About Finder",
  },
  {
    name: "Prefences",
  },
  {
    name: "Empty Trashed",
  },
  {
    name: "Hide Finder",
  },
  {
    name: "Hide Others",
  },
  {
    name: "Show All",
  },
];
interface IPopoverComp {
  title: string;
  className?: string;
}
export default function PopoverComp(props: IPopoverComp) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Popover
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {() => (
          <>
            <Popover.Button>
              <span className={props.className}>{props.title}</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-[200px] px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid bg-black/20 backdrop-blur-md py-2">
                    {Items.map((item) => (
                      <span
                        key={item.name}
                        className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-black/5 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="ml-4">
                          <p className="text-sm font-normal text-white">
                            {item.name}
                          </p>
                        </div>
                      </span>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
