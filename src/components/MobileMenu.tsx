import { useState } from 'preact/hooks';

export default function MobileMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleClick() {
    setMenuVisible(() => !menuVisible);
    document?.querySelector('#overlay')?.classList.toggle('darken-overlay');
  }

  return (
    <>
      <nav>
        <ul
          role='list'
          className={`mobile-menu absolute top-[4.5rem] left-0 right-0 z-10 bg-black text-white text-2xl uppercase space-y-8 px-6 py-12 ${
            menuVisible ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a href='/about'>Our Company</a>
          </li>
          <li>
            <a href='/locations'>Locations</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className='hamburger flex flex-col items-center'
        onClick={() => handleClick()}
      >
        <img
          src='/assets/mobile/icon-hamburger.svg'
          alt='open mobile menu'
          className={`menuIcon ${menuVisible ? 'hidden' : 'block'}`}
        />
        <img
          src='/assets/mobile/icon-close.svg'
          alt='close mobile menu'
          className={`${menuVisible ? 'block' : 'hidden'}`}
        />
      </button>
    </>
  );
}
