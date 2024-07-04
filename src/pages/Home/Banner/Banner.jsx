import { Link } from "react-router-dom";
import techImg from "../../../assets/img/tech.jpg"



const Banner = () => {
    return (
        <div>
            <div className="mt-12 mb-12">
                <div className=" w-4/5 m-auto shadow-white text-white">
                    <h2 className="text-center text-2xl py-12 font-semibold ">About Me</h2>
                    <div className="flex flex-col lg:flex-row justify-between mt-12 items-center md:pb-12">
                        <div className="flex-1 flex flex-col gap-y-16">
                            <p className="text-xl leading-10 text-start w-4/5 mx-auto">
                                I am passionate about web development and have experience in HTML, CSS, JavaScript, React, MongoDB, and Tailwind CSS. I excel in creating dynamic web applications and seamless user experiences while staying updated with industry trends.
                            </p>
                            <Link to="/about" className="w-4/5 mx-auto">
                                <button className="btn btn-outline text-white w-60">Meet Omar</button>
                            </Link>
                        </div>
                        <div className="flex-1    mx-auto ">
                            <img className=" w-3/4 h-auto mx-auto border-4 border-slate-300" src={techImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;