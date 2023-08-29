import { useEffect } from "react";
import Cookies from "cookies";

export default function SetCookie() {
  const handleClick = () => {
    document.cookie = "theme=dark; path=/;";
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleClick}
      >
        Set Dark Theme
      </button>
    </div>
  );
}
