import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

export default function MobileMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleClick() {
    setMenuVisible(() => !menuVisible);
    document
      ?.querySelector('.mobile-menu')
      ?.classList.toggle('translate-x-full');
    document?.querySelector('#overlay')?.classList.toggle('darken-overlay');
  }

  return (
    <>
      <nav>
        <ul
          role='list'
          className={`mobile-menu fixed translate-x-full top-[4.5rem] left-0 right-0 z-10 bg-black text-white text-2xl uppercase space-y-8 px-6 py-12 transition-all duration-500 ease-in-out
          `}
        >
          <li>
            <a href='/about' className='hover-underline-animation dark-bg'>
              Our Company
            </a>
          </li>
          <li>
            <a href='/locations' className='hover-underline-animation dark-bg'>
              Locations
            </a>
          </li>
          <li>
            <a href='/contact' className='hover-underline-animation dark-bg'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Hamburger
        toggled={menuVisible}
        toggle={handleClick}
        rounded
        label='Show menu'
      />
    </>
  );
}
