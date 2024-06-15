import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactRight() {
    return (
        // contactRight
        <div className="lgl:w-[60%] w-full h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 lgl:p-8 p-4 rounded-lg shadowGray">
            <form className="w-full flex flex-col lgl:gap-6 gap-4 lgl:py-5 py-2">
                <div className="flex flex-col gap-7">
                    {/* name - phone */}
                    <div className="flex lgl:flex-row flex-col gap-5">
                        {/* your name */}
                        <div className="lgl:w-1/2 w-full flex flex-col gap-3">
                            <label className="text-xs text-gray-400 uppercase tracking-wide" htmlFor="name">Your Name</label>
                            <input className="contactInput peer" type="text" id="name" placeholder="Your name" required />
                            <p className="-mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                &nbsp; Please do not ignore this field.
                            </p>
                        </div>

                        {/* phone */}
                        <div className="lgl:w-1/2 w-full flex flex-col gap-3">
                            <label className="text-xs text-gray-400 uppercase tracking-wide" htmlFor="phone">Phone Numeber</label>
                            <input className="contactInput peer" type="text" id="phone" placeholder="Phone Numeber" required />
                            <p className="-mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                &nbsp; Please do not ignore this field | Phone is number.
                            </p>
                        </div>
                    </div>

                    {/* email */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wide" htmlFor="email">Email</label>
                        <input className="contactInput peer invalidInput" type="email" id="email" placeholder="Email" required />
                        <p className="-mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            &nbsp; Please provide a valid email address.
                        </p>
                    </div>

                    {/* subject */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wide" htmlFor="subject">Subject</label>
                        <input className="contactInput peer" type="text" id="subject" placeholder="Subject" required />
                        <p className="-mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            &nbsp; Please do not ignore this field.
                        </p>
                    </div>

                    {/* message */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wide" htmlFor="message">message</label>
                        <textarea className="contactInput peer" id="message" placeholder="Message" cols={30} rows={10} required></textarea>
                        <p className="-mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            &nbsp; Please let me know your message.
                        </p>
                    </div>
                </div>

                {/* button */}
                <div className="flex justify-center items-center">
                    <button className="py-4 px-10 bg-slate-700 rounded-full text-base text-gray-400 tracking-wide uppercase hover:shadow-md hover:shadow-designColor hover:text-white transition-all duration-200">send message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactRight
