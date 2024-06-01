import React from "react";
import { Profile } from "./Icons";
import { tabList } from "./Helper";

const Tabs = () => {
  return (
    <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-5">
      {tabList.map((obj, index) => (
        <div
          key={index}
          className={`rounded-md duration-300 hover:bg-card-gradient tab_parent hover:shadow-box-shadow p-4 flex items-center flex-col cursor-pointer ${
            index !== 0 && "mt-4"
          }`}
        >
          {obj.icon}
          <p className="text-lg font-medium text-secondary pt-1 duration-300">
            {obj.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
