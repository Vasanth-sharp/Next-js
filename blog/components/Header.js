import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/ "><h1 className="text-2xl text-blue-800">Blog</h1></Link>
        <nav className="space-x-4">
          <Link href="/" className="text-blue-500">
            Home
          </Link>
          <Link href="/about" className="text-blue-500">
            About
          </Link>
          <Link href="/contact" className="text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
