import { FaCss3, FaGraduationCap, FaHtml5, FaReact, FaUniversity } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";


const Skills = () => {
    return (
        <div className="text-white my-8 px-12 w-4/5 mx-auto">
            <h2 className="text-3xl text-center">   My Education Qualification and Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6  md:mt-12">
                <div className="">
                    <h2 className="text-2xl pb-6 text-center">Education Qualification</h2>
                    <div className="space-y-2 text-xl ">
                        <p className="flex flex-row justify-center items-center gap-4"><FaUniversity /> BGC Trust University Bangladesh</p>
                        <p className="flex flex-row justify-center  items-center gap-4"><FaGraduationCap /> Bachelor OF Pharmcay(Honours)</p>
                    </div>
                </div>
                <div className=" ml-12">
                    <h2 className="text-2xl pb-6">My Skills in Software</h2>
                    <div className="space-y-2 grid grid-cols-2 grid-wrap">
                        <p className="flex flex-row  items-center gap-4"><FaHtml5 /> HTML5</p>
                        <p className="flex flex-row  items-center gap-4"><FaCss3 /> CSS3</p>
                        <p className="flex flex-row  items-center gap-4"><FaReact /> REACT</p>
                        <p className="flex flex-row  items-center gap-4"><SiNextdotjs /> NEXT JS</p>
                        <p className="flex flex-row  items-center gap-4"><RiTailwindCssFill /> Tailwind CSS</p>
                        <p className="flex flex-row  items-center gap-4"><BiLogoMongodb />MongoDB</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;