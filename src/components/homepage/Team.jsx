import Image from "next/image";
import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "../common/Icons";
import { TeamMembers } from "../common/Helper";

const Team = () => {
  return (
    <div className="flex items-center flex-wrap">
      {TeamMembers.map((obj, index) => (
        <div
          className="px-3 w-full sm:w-1/2 lg:w-full xl:w-1/2 mt-5"
          key={index}
        >
          <div className="rounded-[10px] gap-2 bg-card-gradient shadow-box-shadow flex items-center">
            <Image
              className="w-full object-cover h-[130px] object-top max-w-[160px] max-[1500px]:max-w-[100px] rounded-l-[10px]"
              width={200}
              height={150}
              src={obj.profile}
              alt="profile"
            />
            <div>
              <p className="font-medium text-primary text-base md:text-xl text-nowrap">
                {obj.name}
              </p>
              <p className="text-white max-[400px]:text-sm md:text-lg">
                {obj.profession}
              </p>
              <div className=" flex gap-[10px] mt-2 justify-start">
                {obj.gitHub && (
                  <a
                    href={obj.gitHub}
                    target="_blank"
                    className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[10px] flex items-center justify-center cursor-pointer size-[30px] md:size-[35px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
                  >
                    <GitHub />
                  </a>
                )}
                {obj.instagram && (
                  <a
                    href={obj.instagram}
                    target="_blank"
                    className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[10px] flex items-center justify-center cursor-pointer size-[30px] md:size-[35px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
                  >
                    <Instagram />
                  </a>
                )}
                {obj.twitter && (
                  <a
                    href={obj.twitter}
                    target="_blank"
                    className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[10px] flex items-center justify-center cursor-pointer size-[30px] md:size-[35px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
                  >
                    <Twitter />
                  </a>
                )}
                {obj.linkedin && (
                  <a
                    href={obj.linkedin}
                    target="_blank"
                    className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[10px] flex items-center justify-center cursor-pointer size-[30px] md:size-[35px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
                  >
                    <Linkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
