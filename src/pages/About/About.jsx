
import image from "../../assets/img/bg-about.jpg"
import Skills from "./Skills";

const About = () => {
    return (

        <div className="mt-8">
            <div className="relative h-[90vh] flex justify-center items-center text-white">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${image})` }}></div>

                <h2 className="relative z-10 text-7xl text-white border-b-8 border-b-yellow-400">About Me</h2>
            </div>

            <div className=" w-4/5 m-auto shadow-white text-white my-8">
                <div className="flex flex-col gap-10 justify-between items-center md:pb-12">
                    <p className=" w-3/5 text-center text-xl px-12 leading-10 flex flex-row justify-center items-center">
                        I am passionate about web development and have experience in HTML, CSS, JavaScript, React, MongoDB, and Tailwind CSS. I excel in creating dynamic web applications and seamless user experiences while staying updated with industry trends.
                    </p>


                    <button className="btn btn-outline text-white px-8 ">
                        <a
                            href="Resume.pdf"
                            download="Resume.pdf"
                            className="text-white"
                        >
                            Resume
                        </a>

                    </button>

                </div>
            </div>
            <Skills />
        </div>



    );
};

export default About;