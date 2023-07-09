import React from "react";

const About = () => {
  return (
    <div name="about"
    className=" w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white">
        <div className=" flex flex-col
        justify-center items-center w-full h-full ">
          <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className=" sm:text-right text-4xl pb-8">
                <p className=" text-4xl font-bold inline border-b-4
                 border-pink-500">About</p>
            </div>
            <div></div>
            </div>
            
            <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className=" sm:text-right text-4xl font-bold">
            <p> Hi, I'm Shivam,nice to meet you. Please take a look around.
 </p>
 </div>
           <div>
            <p>
           I am a hard working, honest individual. I am a good timekeeper, always will-
ing to learn new skills. I am friendly, helpful and polite, have a good sense
of humour. I am able to work independently in busy environments and also
within a team setting.
            </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default About