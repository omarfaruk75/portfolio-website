import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import image from "../../../assets/img/bg.png"

const BannerText = () => {
    return (
        <div className="mt-6">
            <div className=" bg-cover bg-center  text-white" style={{ backgroundImage: `url(${image})` }}>
                <div className="flex flex-col justify-center items-center h-screen">
                    <h2>I am Md Omar Faruk</h2>
                    <TypeAnimation
                        sequence={[
                            `Creative\nPassionate\nFrontend Web Developer`,
                            1000,
                            ''
                        ]}
                        repeat={Infinity}
                        style={{
                            whiteSpace: 'pre-line',
                            height: '195px',
                            display: 'block',
                            fontSize: '3em',
                            color: 'yellow',
                            textAlign: 'center'
                        }}
                    />
                </div>
                <div className="fixed right-8 text-2xl  top-36 flex flex-col gap-4 ">
                    <Link to="https://www.facebook.com/mohammed.omarfaruk.756"><FaFacebook /></Link>
                    <Link to="https://www.linkedin.com/in/omarfaruk1986"><FaLinkedin /></Link>
                    <Link to="https://github.com/omarfaruk75"> <FaGithub /></Link>
                </div>
            </div>
        </div>
    );
};

export default BannerText;