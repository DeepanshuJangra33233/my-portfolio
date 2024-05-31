"use client";
import React, { useEffect } from "react";
// import { useRouter } from "next/router";
import { tabList } from "./Helper";
import { useRouter, useSearchParams } from "next/navigation";

const Tabs = ({ setActiveTab, activeTab }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setTabActiveHandler = (value) => {
    router.push(`/?t=${value}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const tab = searchParams.get("t");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams, setActiveTab]);

  return (
    <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-5">
      {tabList.map((obj, index) => (
        <div
          key={index}
          onClick={() => setTabActiveHandler(obj.title)}
          className={`rounded-md duration-300 tab_parent hover:shadow-box-shadow p-4 flex items-center flex-col cursor-pointer ${
            index !== 0 && "mt-4"
          } ${
            activeTab === obj.title
              ? "bg-primary"
              : "bg-transparent hover:bg-card-gradient"
          }`}
        >
          <span
            className={`duration-300 ${
              activeTab === obj.title ? "active_icon" : ""
            }`}
          >
            {obj.icon}
          </span>
          <p
            className={`text-lg font-medium pt-1 duration-300 ${
              activeTab === obj.title ? "text-white" : "text-secondary"
            }`}
          >
            {obj.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
