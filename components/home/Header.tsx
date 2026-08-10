"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="absolute top-0 w-full flex flex-row justify-center z-20">
            {menuOpen ?
                <div className="w-full h-screen flex flex-row justify-center items-center bg-[#f4f4f2]">
                    <h1 className="flex h-full flex-col justify-center gap-2 items-center font-outfit-700 text-8xl tracking-tight text-[#222222]">
                        <Link href="/" className="cursor-pointer font-bold hover:text-gray-400 transition-all ease-in-out duration-300">Home</Link>
                        <Link href="/" className="cursor-pointer font-bold hover:text-gray-400 transition-all ease-in-out duration-300">About</Link>
                        <Link href="/services" className="cursor-pointer font-bold hover:text-gray-400 transition-all ease-in-out duration-300">Services</Link>
                        <Link href="/portfolio" className="cursor-pointer font-bold hover:text-gray-400 transition-all ease-in-out duration-300">Work</Link>
                        <Link href="/contact" className="cursor-pointer font-bold hover:text-gray-400 transition-all ease-in-out duration-300">Contact</Link>
                    </h1>
                    <h1 className="absolute top-10 left-6 text-3xl font-bold text-[#222222]">Soluble Di</h1>
                    <Button onClick={() => setMenuOpen(false)} className="text-[#222222] bg-transparent hover:bg-transparent border-0 border-none cursor-pointer absolute top-8 right-5 hover:text-gray-400"><X className="!size-8" strokeWidth={1}/></Button>
                </div>
                :
                <div className="mx-8 mt-10 w-full flex flex-row justify-between">
                    <h1 className="text-3xl font-bold text-[#222222]">Soluble Di</h1>
                    <div className="flex flex-row gap-4">
                        <Button variant="outline" className="text-black bg-blue-400 cursor-pointer hover:bg-blue-500 px-4 py-6"> Request Demo</Button>
                        <Button variant="default" className="text-black bg-white shadow-md shadow-gray-200 cursor-pointer hover:bg-white outline-none flex items-center justify-center px-3 py-6" onClick={() => setMenuOpen(!menuOpen)}><Menu strokeWidth={3} className="!size-5"/></Button>
                    </div>
                </div>
            }
        </div>
    );
}