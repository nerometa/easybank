import { Button, Link } from "@radix-ui/themes";
import { useState } from "react";
import { cn } from "@/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <header className="sticky bg-white top-0 z-50">
      <div
        className={cn(
          "transition-all ease-out duration-150 bg-gradient-to-b from-primary-dark-blue to-transparent fixed inset-y-0 inset-x-0 top-16",
          !open && "hidden",
        )}
      ></div>
      <nav className="max-w-6xl mx-auto py-[1.375rem] lg:py-0 px-6 flex justify-between items-center">
        <div>
          <Link href="/">
            <img alt="Easybank Icon" src="images/logo.svg" />
          </Link>
        </div>
        <ul className="hidden lg:flex bg-white gap-8 text-sm py-8 text-neutral-gray-blue">
          <li>
            <Link className="nav-link" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Blog
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Careers
            </Link>
          </li>
        </ul>
        <Button
          onClick={handleOpen}
          variant="ghost"
          className="lg:hidden"
          data-open={open}
        >
          <img alt={open ? "Close" : "Menu"} src={open ? "images/icon-close.svg" : "images/icon-hamburger.svg"} />
        </Button>
        <Link href="#" className="cta-btn hidden lg:inline-block">Request Invite</Link>
      </nav>

      {/* I learned something new about this element and its styling */}
      <ul
        className={cn(
          "bg-white text-center rounded absolute mt-6 p-6 w-[calc(100%-3rem)] left-[50%] -translate-x-[50%]",
          !open && "hidden",
        )}
      >
        <li>
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Careers
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
