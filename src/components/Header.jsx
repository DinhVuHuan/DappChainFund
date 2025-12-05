import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LuSun, LuMoon } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

const CharityHeader = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    const location = useLocation();

    // Load theme when app starts
    useEffect(() => {
        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark");
    };

    // Detect scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${scrolled ? "backdrop-blur-xl bg-white/50 dark:bg-gray-900/60 shadow-lg border-b border-gray-200 dark:border-gray-700" : "bg-transparent"}
            `}
        >
            <div className="flex justify-between items-center p-5 px-6 md:px-12">

                {/* LOGO */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div
                        className="w-11 h-11 flex items-center justify-center rounded-xl shadow-md
                        bg-green-600/20 dark:bg-green-700/20
                        transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
                    >
                        <GiThreeLeaves className="text-3xl text-green-700 dark:text-green-400" />
                    </div>

                    <span className="text-2xl font-extrabold tracking-wide text-green-700 dark:text-green-200">
                        ChainFund <span className="text-green-500 dark:text-green-400">Global</span>
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
                                    ? "text-green-500"
                                    : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300"
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

                    {/* GLOBAL DARK MODE BUTTON */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-3 rounded-xl bg-white/40 dark:bg-gray-700/50 backdrop-blur hover:shadow transition"
                    >
                        {darkMode ? (
                            <LuSun className="text-xl text-yellow-300" />
                        ) : (
                            <LuMoon className="text-xl text-gray-600" />
                        )}
                    </button>

                    {/* CONNECT WALLET */}
                    <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow hover:opacity-90 transition-all">
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
                    className="fixed top-0 right-0 w-72 h-full p-6 shadow-lg z-50 animate-slide-in
                    bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                >
                    <button onClick={() => setOpen(false)}>
                        <HiX className="text-3xl mb-5" />
                    </button>

                    <nav className="flex flex-col gap-6 text-xl font-medium">
                        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/projects" onClick={() => setOpen(false)}>View Projects</Link>
                        <Link to="/create" onClick={() => setOpen(false)}>Create Campaign</Link>

                        <button className="flex items-center justify-center gap-3 px-5 py-3 rounded-full mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold active:scale-95 shadow-lg">
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
