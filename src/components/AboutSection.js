import Image from 'next/image';
import Styles from '@/styles/animation.module.css';
import Link from 'next/link';

function AboutSection({ title, imageUrl }) {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-black">
      <div className="lg:w-1/2 min-h-screen flex items-center bg-designColor overflow-hidden">
        <Image src={imageUrl} alt="image_about" width={500} height={1000} className={`${Styles.loading} px-4`} />
      </div>
      <div className="w-full lg:w-1/2 min-h-screen bg-yellow-200 text-black">
        <div className="flex flex-col items-center justify-center h-full mt-10 lg:mt-0 lg:ml-36">
          <h1 className="font-extrabold text-xl lg:text-3xl">{title}</h1>
          <p className="px-5 mt-5 text-center lg:text-left">
            From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the
            latest and greatest movies, and find your new favorite today.
          </p>
          <Link href="/movie">
            <button className="px-5 mt-5 border-b border-b-black rounded-md bg-orange-600 active:bg-orange-900">
              Go to Movie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
