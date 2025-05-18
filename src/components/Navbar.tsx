import applogo from '../assets/react.svg';
import {Link, NavLink} from "react-router-dom";
import { type ReactNode, useState } from 'react';


interface NavbarProps {
    children : ReactNode
}
export const Navbar = ({children}:NavbarProps) => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    return (
        <>
         <header className="sticky top-0 px-8  bg-white flex justify-between items-center h-28 text-header text-black font-bold">
                <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
                </i>
                <Link to="/">
                    <img src={applogo} alt="logo" className="hover:scale-105 transition-all"></img>
                </Link>

                <ul className="hidden xl:flex items-center gap-12 font-semibold text-black">
                    <li className="p-3 transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#about">About</NavLink>
                    </li>
                    <li className="p-3 transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#faq">FAQ</NavLink>
                    </li>
                    <li className="p-3 transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#testimonials">Testimonials</NavLink>
                    </li>
                    <li className="p-3 cursor-pointer bg-amber transition-all">
                        <NavLink to="#free-consultation">Free consultation</NavLink>
                    </li>
                </ul>
                <div className={`absolute xl:hidden top-18 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg bg-white text-black transform transition-transform ${isMenuOpen ? "block opacity-100" : "hidden opacity-0"}`}
                    style={{transition:"transform 0.3s ease,opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#about">About</NavLink>
                    </li>
                    <li className="list-none w-full text-center transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#faq">FAQ</NavLink>
                    </li>
                    <li className="list-none w-full text-center transition-all cursor-pointer hover:text-amber">
                        <NavLink to="#testimonials">Testimonials</NavLink>
                    </li>
                    <li className="list-none w-full text-center transition-all cursor-pointer bg-amber">
                        <NavLink to="#free-consultation">Free consultation</NavLink>
                    </li>
                </div>
            </header>
            {children}
        </>
    )
}