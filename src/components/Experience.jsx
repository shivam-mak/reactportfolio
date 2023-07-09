import React from "react";
import  html  from "../components/assets/experience/html.png";
import cplus   from "../components/assets/experience/c++.png";
import  c  from "../components/assets/experience/c.png";
import  github  from "../components/assets/experience/git.png";
import  javascript from "../components/assets/experience/javascript.png";
import  sql  from "../components/assets/experience/sql.png";
import  css  from "../components/assets/experience/css.png";
import  reactImage from "../components/assets/experience/react.png";

const Experience = () => {

    const techs =[
        {
            id: 1,
            src:html,
            title: 'HTML',
            style: ' shadow-orange-500'
        },
        {
            id: 2,
            src:css,
            title: 'CSS',
            style: ' shadow-blue-500'
        },
        {
            id: 3,
            src:reactImage,
            title: 'React',
            style: ' shadow-blue-500'
        },
        {
            id: 4,
            src:javascript,
            title: 'JAVASCRIPT',
            style: ' shadow-yellow-500'
        },
        {
            id: 5,
            src:cplus,
            title: 'C++',
            style: ' shadow-blue-500'
        },
        {
            id: 6,
            src:c,
            title: 'C',
            style: ' shadow-blue-500'
        },
        {
            id: 7,
            src:github,
            title: 'Github',
            style: ' shadow-red-500'
        },
        {
            id: 8,
            src:sql,
            title: 'MySql',
            style: ' shadow-grey-500'
        },
    ]
  return (
    <div name='experience' className=" bg-gradient-to-b from-gray-800 w-full h-screen">
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full
         h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4
                 border-gray-500 p-2 inline">Experience</p>
                <p className=" py-6">These are the technologies I know about</p>
            </div>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-3
             gap-8 text-center py-8 px-12 sm:px-0">

{
    techs.map(({id,src,title,style}) => ( 
        <div key={id} 
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt="" className=" w-20 mx-auto" />
        <p className=" mt-4">{title}</p>
        </div>
    

    ))}


      </div>
        </div>
    </div>
  );
};

export default Experience