import Link from "next/link";
import { useRouter } from "next/router";
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const { route } = useRouter();

    const menus = <>
        <li><Link href="/home" className={`mx-0.5 ${route === '/home' && "bg-primary"}`} >Home</Link></li>
        <li><Link href="/categories" className={`mx-0.5 ${route === '/categories' && "bg-primary"}`} >Categories</Link></li>
        <li><Link href="/teachers" className={`mx-0.5 ${route === '/teachers' && "bg-primary"}`} >Teachers</Link></li>
        <li><Link href="/contact" className={`mx-0.5 ${route === '/contacts' && "bg-primary"}`} >Contact</Link></li>
        <li><Link href="/about" className={`mx-0.5 ${route === '/about' && "bg-primary"}`} >About</Link></li>
        <li><button className="bg-[blue] text-white active:scale-90 transition uppercase font-semibold mx-0.5">Login</button></li>
        <li><button className="bg-[blue] text-white active:scale-90 transition uppercase font-semibold mx-0.5">Register</button></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0" style={{ justifyContent: 'space-between' }}>
            <div className="navbar-start" style={{ width: 'auto' }}>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary lg:hidden mr-2">
                        <BiMenu className="text-4xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow gap-1 bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link href="/"><img className="h-6 sm:h-8" src={'https://i.ibb.co/tDTSd8v/logo.png'} alt="logo" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex" style={{ width: 'auto' }}>
                <ul className="menu menu-horizontal px-1">
                    {menus}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;