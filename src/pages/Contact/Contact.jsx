import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope, FaPhone } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="px-24 my-24">

            <div className="flex flex-row justify-between ">
                <div className="text-white flex-1 space-y-2">
                    <h2 className="text-4xl">Get In Touch</h2>
                    <h4 className="pb-8">To fill the form to start a conversation</h4>
                    <p className="flex flex-row  items-center gap-4 ">
                        <CiLocationOn /> <span>Chattogram,Bangladesh</span>
                    </p>
                    <p className="flex flex-row  items-center gap-4">
                        <FaPhone /> <span>+8801812956268</span>
                    </p>
                    <p className="flex flex-row  items-center gap-4">
                        <FaEnvelope /> <span>farukomarcpa@gmail.com</span>
                    </p>
                </div>
                <div className="flex-1">
                    <form action="" className="flex flex-col gap-y-4">
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="">Full Name</label>
                            <input type="text" className="py-2 px-6 rounded-sm" placeholder="Full Name" />
                        </div>
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="" >Email</label>
                            <input type="email" className="py-2 px-6 rounded-sm" placeholder="Write Your Email" />
                        </div>
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="">Write your Message</label>
                            <textarea name="" cols="5" rows="5" id="" className="rounded-sm"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-300 py-2 rounded-sm text-white font-semibold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;