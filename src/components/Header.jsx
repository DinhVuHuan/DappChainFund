import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LuSun, LuMoon } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

const CharityHeader = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Detect page scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-xl bg-white/50 shadow-lg border-b" : "bg-transparent border-b-0"}
        ${dark ? "bg-gray-900/80 text-white border-gray-700" : ""}
      `}
        >
            <div className="flex justify-between items-center p-5 px-6 md:px-12">

                {/* LOGO */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div
                        className={`w-11 h-11 flex items-center justify-center rounded-xl shadow-md transition-all duration-300
              ${dark ? "bg-green-700/30" : "bg-green-600/20"}
              group-hover:scale-105 group-hover:rotate-3`}
                    >
                        <GiThreeLeaves
                            className={`text-3xl ${dark ? "text-green-400" : "text-green-600"}`}
                        />
                    </div>

                    <span
                        className={`text-2xl font-extrabold tracking-wide ${dark ? "text-green-200 drop-shadow-lg" : "text-green-700"
                            }`}
                    >
                        ChainFund <span className={`${dark ? "text-green-400" : "text-green-500"}`}>Global</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center space-x-10">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Projects", path: "/projects" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative text-lg font-medium transition
                ${isActive(link.path)
                                    ? "text-green-400"
                                    : dark
                                        ? "text-gray-100 hover:text-green-300"
                                        : "text-gray-600 hover:text-green-600"
                                }`}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-green-500 rounded-full"></span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* RIGHT BUTTONS */}
                <div className="hidden md:flex items-center space-x-4">

                    {/* DARK MODE TOGGLE */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="p-3 rounded-xl bg-white/40 dark:bg-gray-700/50 backdrop-blur hover:shadow transition"
                    >
                        {dark ? (
                            <LuSun className="text-xl text-yellow-300" />
                        ) : (
                            <LuMoon className="text-xl text-gray-600" />
                        )}
                    </button>

                    {/* CONNECT WALLET */}
                    <button
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow hover:opacity-90 transition-all"
                    >
                        <FaWallet className="text-lg" />
                        Connect Wallet
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 rounded-lg bg-white/40 dark:bg-gray-700/50 backdrop-blur"
                >
                    <HiMenu className="text-3xl" />
                </button>
            </div>

            {/* MOBILE SIDEBAR */}
            {open && (
                <div
                    className={`fixed top-0 right-0 w-72 h-full p-6 shadow-lg z-50 animate-slide-in
            ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}
          `}
                >
                    {/* CLOSE BTN */}
                    <button onClick={() => setOpen(false)}>
                        <HiX className="text-3xl mb-5" />
                    </button>

                    {/* MENU LINKS */}
                    <nav className="flex flex-col gap-6 text-xl font-medium">
                        <Link to="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                        <Link to="/projects" onClick={() => setOpen(false)}>
                            View Projects
                        </Link>
                        <Link to="/create" onClick={() => setOpen(false)}>
                            Create Campaign
                        </Link>

                        {/* MOBILE CONNECT BTN */}
                        <button
                            className="flex items-center justify-center gap-3 px-5 py-3 rounded-full mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold active:scale-95 shadow-lg"
                        >
                            <FaWallet className="text-lg" />
                            Connect Wallet
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default CharityHeader;
