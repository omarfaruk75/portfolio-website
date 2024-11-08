import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios';
import toast from "react-hot-toast";


const Contact = () => {
    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const postMessage = { name, email, message }
        console.log(postMessage);
        try {
            // const { data } = await axios.post('/message', postMessage)
            const { data } = await axios.post('http://localhost:5000/message', postMessage)
            console.log(data);
            toast.success('Review Successfully Added')

        } catch (err) {
            console.log(err)
            toast.error('err:message')
        }
    }
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
                        <FaPhone /> <span><a href="https://wa.me/8801812956268" target="_blank" rel="noopener noreferrer">+8801812956268</a></span>
                    </p>
                    <p className="flex flex-row  items-center gap-4">
                        <FaEnvelope /> <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=farukomarcpa@gmail.com" target="_blank" rel="noopener noreferrer">farukomarcpa@gmail.com</a></span>


                    </p>
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="">Full Name</label>
                            <input type="text" name="name" className="py-2 text-black px-6 rounded-sm" placeholder="Full Name" />
                        </div>
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="" >Email</label>
                            <input type="email" name="email" className="py-2  text-black px-6 rounded-sm" placeholder="Write Your Email" />
                        </div>
                        <div className="flex flex-col justify-start gap-y-2 text-white">
                            <label htmlFor="">Write your Message</label>
                            <textarea cols="5" name="message" rows="5" id="" className="  text-black rounded-sm"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-300 py-2 rounded-sm text-white font-semibold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;