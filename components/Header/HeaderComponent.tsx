"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Lucide-react for icons (alternative: Heroicons)

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 flex justify-center bg-primary px-6">
      <div className="flex items-center justify-between w-full max-w-[1040px] py-4">
        {/* Logo */}
        <Link className="font-extrabold text-lg uppercase text-white" href={"/"}>
          Aniruddha Deshmukh
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5">
          <Link className="text-white uppercase font-medium text-[15px]" href={"/resume"}>
            Resume
          </Link>
          <Link className="text-white uppercase font-medium text-[15px]" href={"/projects"}>
            Projects
          </Link>
          <Link className="text-white uppercase font-medium text-[15px]" href={"/books"}>
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-primary text-white flex flex-col items-center gap-4 py-6 md:hidden">
          <Link className="uppercase font-medium text-[15px]" href={"/resume"} onClick={() => setIsOpen(false)}>
            Resume
          </Link>
          <Link className="uppercase font-medium text-[15px]" href={"/projects"} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link className="uppercase font-medium text-[15px]" href={"/books"} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
