import React from "react";
import {
  Fackbook,
  Instagram,
  Linkedin,
  Loaction,
  Phone,
  Twitter,
} from "../common/Icons";

const Profile = () => {
  return (
    <>
      <div>
        <h2 className="text-[#ff014f] text-center">Deepanshu</h2>
        <div className="text-[white] mt-3 mb-3 rounded-[10px] bg-card-gradient  shadow-box-shadow p-5 text-center">
          <p>Frontend Dev</p>
        </div>
        <div className=" flex gap-[10px]">
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%] cursor-pointer">
            <Fackbook />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%] cursor-pointer">
            <Instagram />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%] cursor-pointer">
            <Twitter />
          </div>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[39%] cursor-pointer">
            <Linkedin />
          </div>
        </div>
        <div className=" mt-[32px]">
          <div className=" flex text-center items-center gap-5">
            <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[23%] cursor-pointer">
              <Phone />
            </div>
            <div>
              <p className="text-[13px] text-start mb-2">Phone</p>
              <p>9350537156</p>
            </div>
          </div>
          <div className=" flex text-center items-center gap-5 mt-[30px]">
            <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[23%] cursor-pointer">
              <Phone />
            </div>
            <div>
              <p className="text-[13px] text-start mb-2">Email</p>
              <p>emailgmail.com</p>
            </div>
          </div>
          <div className=" flex text-center items-center gap-5 mt-[30px]">
            <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] w-[23%] cursor-pointer">
              <Loaction />
            </div>
            <div>
              <p className="text-[13px] text-start mb-2">Location</p>
              <p>Hisar</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-[30px]">
          <button className="text-[white] mt-3 mb-3 rounded-[10px] bg-card-gradient  shadow-box-shadow p-5 text-center">
            Download Cv{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
