"use client";

import { PhoneIcon } from "./Icons";

const AlwaysOnTop = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded z-10">
      <button
        className="flex flex-row justify-between"
        onClick={() => window.open("tel:900300400")}
      >
        <PhoneIcon /> 0888.39.33.39
      </button>
    </div>
  );
};

export default AlwaysOnTop;
