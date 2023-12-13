import Logo from '@/components/Logo';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="w-screen bg-black">
        <div className="py-5 mx-auto flex flex-col md:flex-row items-center justify-around">
          <Logo />
          <ul className="flex gap-5 mt-5 md:mt-0">
            <Link href="#">
              <Facebook color="white" size={30} className="bg-blue-500 rounded-xl p-1" />
            </Link>
            <Link href="#">
              <Instagram color="white" size={30} className="bg-red-500 rounded-xl p-1" />
            </Link>
            <Link href="#">
              <Twitter color="white" size={30} className="bg-blue-500 rounded-xl p-1" />
            </Link>
            <Link href="#">
              <Youtube color="white" size={30} className="bg-red-900 rounded-xl p-1" />
            </Link>
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center md:flex-row justify-around">
          <ul className="flex flex-col  text-white gap-2 mb-5 md:mb-0">
            <h2 className="border-b-2 border-b-white">Company</h2>
            <Link href="#">pcs</Link>
            <Link href="#">DeerWalk</Link>
            <Link href="#">LeafFrog</Link>
            <Link href="#">InfoTech</Link>
          </ul>
          <ul className="flex flex-col text-white gap-2 mb-5 md:mb-0">
            <h2 className="border-b-2 border-b-white">Services</h2>
            <Link href="#">App Design</Link>
            <Link href="#">Web Design</Link>
            <Link href="#">Logo Design</Link>
            <Link href="#">Banner Design</Link>
          </ul>
          <ul className="flex flex-col text-white gap-2 mb-5 md:mb-0">
            <h2 className="border-b-2 border-b-white">Courses</h2>
            <Link href="#">HTML</Link>
            <Link href="#">CSS</Link>
            <Link href="#">React</Link>
            <Link href="#">Next</Link>
          </ul>
          <div className="text-white flex flex-col gap-2 md:mr-16">
            <input
              type="text"
              name="subscribe"
              placeholder="Subscribe us"
              className="text-zinc-400 rounded-md"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
