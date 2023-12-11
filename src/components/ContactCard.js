import Link from "next/link";


function ContactCard({ icon, title, subtitle, responseTime, linkText }) {
  return (
    <>
     
        {/* cards section */}
        <div className="ml-5 mr-5 mt-[3em] w-[20em] h-[13em] bg-zinc-100 border-[1px] border-zinc-400 ">
          <div className="flex flex-col items-center justify-center  mt-5 text-sm">
            {icon}
            <p className="mt-8">{title}</p>
            <p>{subtitle}</p>
            <p>{responseTime}</p>
            <Link href="/" className="text-lg mt-4">
              {linkText} <span>-&gt;</span>
            </Link>
          </div>
        </div>
    </>
  );
}

export default ContactCard;
