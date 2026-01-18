import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question,
                        feedback, or just want to say hello.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Info */}
                    <div className="space-y-6">
                        <div className="card bg-base-100 shadow-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition">
                            <div className="p-4 rounded-full bg-primary text-primary-content">
                                <FaPhoneAlt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-gray-600">+880 1234 567 890</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition">
                            <div className="p-4 rounded-full bg-secondary text-secondary-content">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-gray-600">support@example.com</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl p-6 flex items-center gap-4 hover:scale-[1.02] transition">
                            <div className="p-4 rounded-full bg-accent text-accent-content">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Address</h3>
                                <p className="text-gray-600">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="card bg-base-100 shadow-2xl p-8 md:p-10">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Send a Message
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full h-32"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button className="btn btn-primary w-full mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
