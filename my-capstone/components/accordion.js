import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
          class="justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
          style={{
              width: "100%",
              marginBottom: "15px",
              lineHeight: "15px",
              border: "1px solid rgba(209, 213, 219, 0.5)"
          }}
      >
          <button
              style={{
                  width: "100%",
                  position: "relative",
                  textAlign: "left",
                  padding: "4px",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  cursor: "pointer"
              }}
              onClick={toggle}
              type="button"
          >
              <p>{props.title}</p>
          </button>
          <div
              class="p-5 border mb-2 border-b-0 bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-900"
              style={{ display: isShowing ? "block" : "none", padding: "10px" }}
              dangerouslySetInnerHTML={{
                  __html: props.content
              }} 
              />
      </div>

  );
}