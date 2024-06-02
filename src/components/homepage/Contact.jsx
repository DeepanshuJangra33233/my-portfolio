import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" flex gap-3">
        <div className="">
          <label
            htmlFor=""
            className=" text-[#a0a8b3] text-[12px] font-medium uppercase "
          >
            Your Name
          </label>
          <input
            className=" bg-[#191b1e] px-[15px] py-[15px] rounded-[6px] mt-[15px]"
            type="text"
          />
        </div>
        <div className="">
          <label
            htmlFor=""
            className=" text-[#a0a8b3] text-[12px] font-medium uppercase "
          >
            Phone Number
          </label>
          <input
            className=" bg-[#191b1e] px-[15px] py-[15px] rounded-[6px] mt-[15px]"
            type="text"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor=""
          className=" text-[#a0a8b3] text-[12px] font-medium uppercase text-start"
        >
          Email
        </label>
        <input
          className=" bg-[#191b1e] px-[15px] py-[15px] rounded-[6px] mt-[15px]"
          type="text"
        />
      </div>
    </div>
  );
};

export default Contact;
