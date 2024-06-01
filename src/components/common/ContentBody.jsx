import React from "react";

const ContentBody = ({ title, content }) => {
  return (
    <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-5 w-full">
      <div className="flex items-center gap-4 relative pb-6 after:absolute after:bg-[#121415] after:h-[1px] after:w-full after:contents-[''] after:left-0 after:-bottom-0">
        <h3 className="font-bold text-xl uppercase text-white">{title}</h3>
        <span className="w-[200px] h-[2px] bg-primary"></span>
      </div>
      <div className="mt-5">{content}</div>
    </div>
  );
};

export default ContentBody;
