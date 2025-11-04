import { Menu } from "lucide-react";
import React, { useState } from "react";



const Nav = () => {
   const [activeLink, setActiveLink] = useState('home');
  const navitems = [
    { name: "home", href: "" },
    { name: "services", href: "#service" },
    { name: "process", href: "#process" },
    { name: "testinomials", href: "#testinomial" },
    { name: "faq", href: "" },
  ];


      const handleNavClick = (href,name) => {
        setActiveLink(name)
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
  return (
    <nav className="h-[80px] fixed px-5 w-screen flex items-center  z-30 justify-between ">
      <div className="flex  items-center h-full w-[30%] font-her md:justify-center"><h1 className="font-hero  text-nowrap"><span className="bg-[#ff205f] rounded-full px-2 py-1">your</span> Brand</h1></div>
      <div className="hidden  justify-evenly items-center  capitalize font-hero bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] border-none gap-6 py-1.5 rounded-[30px] px-5 md:flex">{navitems.map((item,index)=>(
        <a href={item.href} key={item.id}  onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href,item.name);
                            }} className={` ${activeLink === item.name ? "bg-black text-white px-3 py-1 rounded-full" :""}`}>{item.name}</a>
      ))}</div>
      <div className="flex  justify-end items-center h-full w-[30%] md:justify-center"> <button className="py-1 px-3 hidden    bg-[#ff205f]  rounded-lg md:block">Call </button> <button className="px-1.5 py-1.5 rounded-lg bg-white text-black block shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] md:hidden "><Menu /></button> </div>
      
    </nav>
  );
};

export default Nav;
