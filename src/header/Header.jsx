import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {

    const { user, LogOut } = useContext(AuthContext)

    const handleSignOut = () => {
        LogOut()
        .then()
        .catch()
    }

    const links = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact'}>Blog</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-pink-400 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" normal-case font-bold text-3xl"><span className="text-pink-500">Elegent </span>Planners</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">
                    <style>
                        {`
      .menu-horizontal li:hover {
        background-color:  rgb(244 114 182);
        padding:10px;
        border-radius:5px;
        color: white
      }
    `}
                    </style>

                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <button onClick={handleSignOut} className="py-3 px-5 text-white font-medium rounded-lg bg-pink-400">Sign Out</button>
                        :
                        <Link to={'/login'}>
                            <button className="py-3 px-5 text-white font-medium rounded-lg bg-pink-400">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Header;