import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Resume", link: "/resume" },
    { id: 4, name: "Projects", link: "/projects" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="flex w-full justify-between items-center p-4 top-0 sticky z-20 bg-blur backdrop-filter backdrop-blur-sm">
      <h2 className="text-xl block md:hidden">Divy koushik Mihsra</h2>
      <div className="md:flex w-fit justify-between items-center gap-8 hidden">
        {menuItems.map((item) => (
          <Link href={item.link} key={item.id} className="hover:opacity-50">
            {item.name}
          </Link>
        ))}
      </div>
      {/* <div className="hover:opacity-50">Join Cohort</div> */}
      <Link href="/cohort">
        <button className="border hover:bg-[#ddd] hover:text-black border-white rounded-xl px-2 md:px-12 py-2">
          Join Cohort
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
