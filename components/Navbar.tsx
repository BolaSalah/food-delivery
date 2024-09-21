"use client"

import Image from 'next/image';
import { assets } from './../assets/assets';
import  Link  from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar mt-4 flex justify-between items-center flex-wrap'>
      <Link href={'/'} className='navbar-icon'>
        <p className='protest-guerrilla-regular sm:text-[30px]'>
          Food Delivery
        </p>
      </Link>
      <div className='navbar-menu md:block hidden text-[#49557e]'>
        <div className='flex justify-center items-center gap-4'>
          <Link
            href={'/'}
            className={pathname === '/' ? 'navBarLinActive' : ''}
          >
            Home
          </Link>
          <Link
            href={'contact'}
            className={pathname === '/contact' ? 'navBarLinActive' : ''}
          >
            contact us
          </Link>
          <Link
            href={'about'}
            className={pathname === '/about' ? 'navBarLinActive' : ''}
          >
            about
          </Link>
        </div>
      </div>
      <div className='navbar-right'>
        <div className='flex justify-center items-center'>
          <Link href={'search'} className=''>
            <Image
              src={assets.search_icon}
              alt='search_icon'
              className='sm:w-6 w-4'
            />
          </Link>
          <Link href={'cart'} className='mx-3 lg:mx-8 relative'>
            <Image
              src={assets.basket_icon}
              alt='bag_icon'
              className='sm:w-6 w-4'
            />
            <div className='w-2 h-2 rounded-full absolute -top-2 -right-2 bg-stone-700'></div>
          </Link>
          <Link
            href={'login'}
            className=' border border-red-900 sm:px-6 px-2 sm:py-2 py-0.5 rounded-full hover:bg-slate-500 hover:text-white transition duration-200'
          >
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
