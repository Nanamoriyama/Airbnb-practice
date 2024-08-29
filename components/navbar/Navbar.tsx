import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-4 py-8">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Logo />
          <div className="flex gap-4 items-center md:hidden">
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>
        <div className="order-3 w-full md:w-1/2 md:order-2 flex justify-center">
          <NavSearch />
        </div>
        <div className="order-2 w-full md:w-auto md:order-3 md:flex gap-4 items-center hidden">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
