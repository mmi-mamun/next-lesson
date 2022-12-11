import { useState } from "react";

const RegistrationModal = ({ data: { close } }) => {
    const [isReg, setIsReg] = useState(true);
    const [remember, setRemember] = useState(true);
    return (
        <>
            <input type="checkbox" id="registrationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close(null)}>✕</button>
                    <div>
                        <div className="flex flex-col-reverse justify-center sm:flex-row sm:justify-between items-center gap-5 pr-5">
                            <h3 className="text-2xl font-semibold">{isReg ? 'Register' : 'Log In'} Form</h3>
                            <div className="btn-group">
                                <button className={`btn ${isReg ? 'btn-active' : 'bg-white border-primary/30 text-primary hover:bg-white hover:border-primary'}`} onClick={() => setIsReg(true)}>Register</button>
                                <button className={`btn ${!isReg ? 'btn-active' : 'bg-white border-primary/30 text-primary hover:bg-white hover:border-primary'}`} onClick={() => setIsReg(false)}>Log In</button>
                            </div>
                        </div>
                        <form className="sm:px-8 py-8 flex flex-col gap-5">
                            <div className="form-control">
                                <label className="label font-semibold text-lg">Email Address</label>
                                <input type="text" placeholder="Your email address" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold text-lg">Password</label>
                                <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
                            </div>
                            {
                                isReg && <div className="form-control">
                                    <label className="label font-semibold text-lg">Confirm Password</label>
                                    <input type="password" placeholder="Confirm password" className="input input-bordered w-full" />
                                </div>
                            }
                            <div className="flex gap-2">
                                <input type="checkbox" checked={remember} className="checkbox checkbox-accent" onChange={() => setRemember(!remember)} />
                                <span className="font-semibold">Remember me</span>
                            </div>
                            {
                                isReg ?
                                    <button className="btn">Register</button> :
                                    <button className="btn">Log In</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationModal;