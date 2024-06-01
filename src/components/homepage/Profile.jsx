import React from "react";
import { Fackbook, Instagram, Twitter } from "../common/Icons";

const Profile = () => {
  return (
    <>
      <div>
        <h2 className="text-[#ff014f] text-center">Deepanshu</h2>
        <div className="text-[white] mt-3 mb-3 rounded-[10px] bg-card-gradient  shadow-box-shadow p-5 text-center">
          <p>Frontend Dev</p>
        </div>
        <div className=" flex gap-[10px]">
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%]">
            <Fackbook />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%]">
            <Instagram />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%]">
            <Twitter />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%]">
            <Fackbook />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Profile;
