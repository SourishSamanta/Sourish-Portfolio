"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/data";


const RecentProjects = () => {
  return (
    <section className="pt-52" id="projects">
      <h1 className="heading mb-16">
        A small selection of{" "}
        <span className="text-violet-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-10">
        {projects.map((item) => (
          <a
            className="lg:min-h-[32.5rem] h-[32rem] sm:h-[41rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id} href={item.link} target="_blank"
          >
            <CardContainer
              className="inter-var"
              
            >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[88vw] sm:w-[620px] h-auto rounded-xl p-6 border flex flex-col items-center ">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <div>
                <h1 className="font-bold lg:text-2xl text-left md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              </div>

              <div className="flex w-full items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center" >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
              </CardBody>
            </CardContainer>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;