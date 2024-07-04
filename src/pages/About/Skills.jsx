import { FaCss3, FaGraduationCap, FaHtml5, FaReact, FaUniversity } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";


const Skills = () => {
    return (
        <div className="text-white my-8 px-12 w-4/5 mx-auto">
            <h2 className="text-3xl text-center">   My Education Qualification and Skills</h2>
            <div className="flex flex-col gap-12 md:flex-row justify-center items-center md:mt-12">
                <div className="flex-1">
                    <h2 className="text-2xl pb-6">Education Qualification</h2>
                    <div className="space-y-2">
                        <p className="flex flex-row  items-center gap-4"><FaUniversity /> BGC Trust University Bangladesh</p>
                        <p className="flex flex-row  items-center gap-4"><FaGraduationCap /> Bachelor OF Pharmcay(Honours)</p>
                    </div>
                </div>
                <div className="flex-1 ml-12">
                    <h2 className="text-2xl pb-6">My Skills in Software</h2>
                    <div className="space-y-2 grid grid-cols-2 grid-wrap">
                        <p className="flex flex-row  items-center gap-4"><FaHtml5 /> HTML5</p>
                        <p className="flex flex-row  items-center gap-4"><FaCss3 /> CSS3</p>
                        <p className="flex flex-row  items-center gap-4"><FaReact /> REACT</p>
                        <p className="flex flex-row  items-center gap-4"><RiTailwindCssFill /> Tailwind CSS</p>
                        <p className="flex flex-row  items-center gap-4"><BiLogoMongodb />MongoDB</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;