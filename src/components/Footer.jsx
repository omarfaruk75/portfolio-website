import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <footer className="px-12 bg-gradient-to-r from-[rgb(4,48,79)] to-[#021e33] dark:bg-gray-900">
                <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">

                    <p className="text-sm  text-white dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

                    <div className="flex -mx-2 text-xl">
                        <a href="#" className="mx-2  text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                            <FaFacebook />
                        </a>

                        <a href="#" className="mx-2  text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                            <FaLinkedin />
                        </a>

                        <a href="#" className="mx-2  text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;