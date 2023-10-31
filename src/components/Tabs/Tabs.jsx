import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export function Tabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex items-center self-start mt-2 lg:self-center sm:flex-col gap-4 sm:gap-0 w-full">
          {items.map((item, index) => (
            <button
              type="button"
              ref={index === 0 ? firstBtnRef : null}
              key={item.title}
              onClick={() => setSelectedTab(index)}
              className={`flex w-[50%] sm:w-full items-center justify-center bg-dark text-light p-4 px-6 rounded-lg text-xl font-bold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 ${selectedTab === index
                ? "dark:text-dark border-dark dark:bg-dark underline "
                : ""
                } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="content">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={item.title}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    }),
  ),
};
