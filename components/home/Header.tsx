"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-20">
            {menuOpen ? (
                <div className="w-full h-screen bg-[#f4f4f2] relative flex items-center justify-center">
                    
                    {/* Logo */}
                    <h1 className="absolute top-6 left-5 sm:top-8 sm:left-8 md:top-10 md:left-10 text-2xl sm:text-3xl font-bold text-[#222222] font-outfit">
                        Soluble Di
                    </h1>

                    {/* Close Button */}
                    <Button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-5 right-4 sm:top-7 sm:right-6 md:top-8 md:right-8 text-[#222222] bg-transparent hover:bg-transparent border-0 cursor-pointer hover:text-gray-400 p-2"
                    >
                        <X className="!size-7 sm:!size-8 md:!size-9" strokeWidth={1.5} />
                    </Button>

                    {/* Navigation */}
                    <nav className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 font-outfit-700 tracking-tight text-[#222222]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold hover:text-gray-400 transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            ) : (
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-5 sm:pt-7 md:pt-10 flex items-center justify-between">
                    
                    {/* Logo */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] font-outfit">
                        Soluble Di
                    </h1>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        
                        {/* Request Demo */}
                        <Button
                            variant="default"
                            className="hidden sm:flex text-black bg-blue-400 cursor-pointer hover:bg-blue-500 border-none px-3 sm:px-4 py-5 sm:py-6 text-sm sm:text-base"
                        >
                            Request Demo
                        </Button>

                        {/* Menu Button */}
                        <Button
                            variant="default"
                            onClick={() => setMenuOpen(true)}
                            className="text-black bg-white shadow-md shadow-gray-200 cursor-pointer hover:bg-white outline-none flex items-center justify-center p-3 sm:px-3 sm:py-6"
                        >
                            <Menu className="!size-5 sm:!size-6" strokeWidth={3} />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}