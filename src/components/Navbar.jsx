import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkStyle = {
    fontFamily: "Lekton, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#77551b",
    textDecoration: "none",
    transition: "all 0.2s ease",
    paddingLeft: "4px",
  };

  return (
    <header className="relative z-50">
      {/* Beige strip */}
      <div className="absolute inset-0 h-20 bg-[#efe6d8]" />

      <div className="relative flex items-center justify-between h-20 px-4 sm:px-6 md:px-10 lg:px-14">

        {/* Logo + Weddings (ALWAYS VISIBLE) */}
        <div className="flex items-start gap-3 md:gap-4">

{/* Logo stays near top */}
<img
  src="/images/logo.png"
  alt="One Fine Day"
  className="h-7 sm:h-8 opacity-80 mt-2"
/>

{/* Weddings text drops downward */}
<h1
  className="
 text-[38px]
      sm:text-[60px]
      md:text-[80px]
      lg:text-[110px]

      mt-12
      md:mt-[50px]
      ml-0
      md:ml-[50px]
  "
  style={{
    fontFamily: "Italiana, sans-serif",
    color: "#d2ab67",
    lineHeight: "1",
  }}
>
  weddings
</h1>

</div>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 uppercase">
          <Link to="/films" style={navLinkStyle} className="hover:text-[#d4a85f]">
            films
          </Link>
          <span style={{ color: "#77551b" }}>•</span>

          <Link to="/blog" style={navLinkStyle} className="hover:text-[#d4a85f]">
            blog
          </Link>
          <span style={{ color: "#77551b" }}>•</span>

          <Link to="/about" style={navLinkStyle} className="hover:text-[#d4a85f]">
            about us
          </Link>
          <span style={{ color: "#77551b" }}>•</span>

          <Link to="/contact" style={navLinkStyle} className="hover:text-[#d4a85f]">
            contact
          </Link>
        </nav>

        {/* Hamburger – Mobile & Tablet */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-[#77551b]" />
          <span className="w-6 h-[2px] bg-[#77551b]" />
          <span className="w-6 h-[2px] bg-[#77551b]" />
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="lg:hidden bg-[#efe6d8] px-6 py-6 space-y-4">
          {["films", "blog", "about us", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className="block uppercase hover:text-[#d4a85f]"
              style={{
                ...navLinkStyle,
                fontSize: "16px",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
