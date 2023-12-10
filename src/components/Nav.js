
'use client'
import { useState } from "react";
import Logo from "@/components/Logo";
import { navigation } from "@/navigation/navigation";
import Link from "next/link";
import { MenuSquare, X, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [isLoginMenuOpen, setLoginMenu] = useState(false);

  const handleLoginMenu = () => {
    setLoginMenu(!isLoginMenuOpen);
  }

  const toggleMenu = () => setShowMenu(!showMenu);

  const NavItem = ({ item }) => (
    <Link href={item.href} key={item._id}>
      <li
        className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
          item.href === pathname && "text-red-600"
        }`}
      >
        {item.title}
      </li>
    </Link>
  );

  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 backdropblur-2px sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-4 overflow-hidden">
        <Logo />
        <ul className="hidden md:flex items-center ml-96 gap-5">
          {navigation.map((item) => (
            <NavItem key={item._id} item={item} />
          ))}
        </ul>
        {/* responsive useicons */}
        <div className="flex items-center gap-3 mr-2 ">
          <button className="hover:bg-blacke cursor-pointer duration-200 ">
          <UserRound onClick={handleLoginMenu} className="w-8 h-8  active:bg-slate-300 active:rounded-md"/>
          </button>

          <button className="md:hidden ">
          <MenuSquare onClick={toggleMenu} className="w-8 h-8  active:bg-slate-300 active:rounded-md" />
        </button>
        </div>
       
      </div>
      {/* mobilenav */}
      <div className={`md:hidden fixed left-0 top-0 w-full`}>
        <div className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-1/2 bg-zinc-400 p-10 overflow-hidden transition-transform transform ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <button onClick={toggleMenu} className="rounded-full shadow-lg shadow-slate-600 p-3 cursor-pointer active:bg-slate-950">
              <X />
            </button>
          </div>
          {/* white line */}
          <div className="border-b border-b-white my-5"></div>
          {/* mobilenav menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navigation.map((item) => (
                <NavItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isLoginMenuOpen && (
        <div className="card-container float-right mt-[2px] mr-14   transition-transform translate-x  duration-500 z-50">
        <div className="flex flex-col  ">
          <Link href="">SignIn</Link>
          <Link href="">LogIn</Link>
        </div>
      </div>
      )}
    </div>
  );
}

