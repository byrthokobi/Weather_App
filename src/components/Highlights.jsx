import React from "react";

function Highlights({ stats }) {
  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
      <h2 className="font-bold text-sm text-black mt-2">{stats.title}</h2>
      <div className="mt-2">
        <span className="font-bold text-4xl">{stats.value}</span>
        <span className="font-bold text-2xl">{stats.unit}</span>
      </div>

      {stats.wind_direction ? (
        <div className="mt-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
          <div className="ms-2 text-red-200">{stats.wind_direction}</div>
        </div>
      ) : null}

      {stats.title == "Humidity" ? (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default Highlights;
