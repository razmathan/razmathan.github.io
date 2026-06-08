import React from "react";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-5xl w-full mx-auto py-4 px-6 flex items-center justify-between">
      <Link href="/" className="mr-auto flex items-center">
        <h2 className="font-semibold">Mathanraj Rajendran</h2>
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
