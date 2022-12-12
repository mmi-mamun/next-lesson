import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiMenu } from 'react-icons/bi';
import RegistrationModal from "./home/registrationModal";

const Navbar = () => {
    const [modal, setModal] = useState(null);
    const { route } = useRouter();

    const menus = <>
        <li><Link href="/home" className={`mx-0.5 ${route === '/home' && "bg-primary"}`} >Home</Link></li>
        <li><Link href="/checkout" className={`mx-0.5 ${route === '/checkout' && "bg-primary"}`} >Checkout</Link></li>
        <li><Link href="/courses" className={`mx-0.5 ${route === '/courses' && "bg-primary"}`} >Courses</Link></li>
        <li><Link href="/teachers" className={`mx-0.5 ${route === '/teachers' && "bg-primary"}`} >Teachers</Link></li>
        <li><Link href="/contact" className={`mx-0.5 ${route === '/contacts' && "bg-primary"}`} >Contact</Link></li>
        <li><Link href="/about" className={`mx-0.5 ${route === '/about' && "bg-primary"}`} >About</Link></li>
        <li><label htmlFor="registrationModal" className="bg-accent text-accent-content active:scale-90 transition uppercase font-medium mx-0.5" onClick={() => setModal({ close: setModal })}>Register</label></li>
    </>
    return (
        <>
            <div className="navbar backdrop-blur-lg shadow-md sticky top-0 z-50" style={{ justifyContent: 'space-between' }}>
                <div className="navbar-start" style={{ width: 'auto' }}>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden mr-2">
                            <BiMenu className="text-2xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow gap-1 bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link href="/"><img className="h-6" src={'https://i.ibb.co/tDTSd8v/logo.png'} alt="logo" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex" style={{ width: 'auto' }}>
                    <ul className="menu menu-horizontal px-1">
                        {menus}
                    </ul>
                </div>
            </div>
            {
                modal && <RegistrationModal data={modal} />
            }
        </>
    );
}

export default Navbar;