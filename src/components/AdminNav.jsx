import Logo from "../assets/images/Logo.png";
import search from "../assets/images/search.png";
import avatar from "../assets/images/avatar.png";
import arrow from "../assets/images/arrow.png";

const AdminNav = () => {
  return (
    <nav className="bg-navBg w-full px-4 sm:px-8 lg:px-[128px] h-[80px] md:h-[126px]">
      <div className="flex justify-between gap-2 items-center h-full">
        {/* Logo Section */}
        <div className="w-[80px] sm:w-[100px] md:w-[123px] mt-[16px] md:mt-[25px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>

        {/* Search Icon */}
        <div className="mt-[36px] md:mt-[20px] md:block hidden">
          <img src={search} alt="search" className="" />
        </div>

        {/* User Section */}
        <div>
          <Link to="/" className="flex items-center gap-2 sm:gap-4 md:gap-[8px] mt-[16px] md:mt-[20px]">
          <img src={avatar} alt="avatar" className="w-[32px] sm:w-[40px] md:w-[48px]" />
          <p className="text-sm sm:text-base md:text-navfont font-sans">John Kennedy</p>
          <img src={arrow} alt="arrow" className="w-[16px] sm:w-[18px] md:w-[20px] h-auto" />
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
