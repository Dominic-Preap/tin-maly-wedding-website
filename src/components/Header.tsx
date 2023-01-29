import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { LangSwitcher } from './shared/LangSwitcher';

export const Header: React.FC = () => {
  const [navSize, setnavSize] = useState('10rem');
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#234a69') : setnavColor('transparent');
    window.scrollY > 10 ? setnavSize('5rem') : setnavSize('7rem');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ',
        navColor === '#234a69' ? 'bg-primary-900/50 backdrop-blur-md' : '',
        {
          'h-16': navColor === '#234a69',
          'h-24': navColor !== '#234a69',
        }
      )}
      // style={{
      //   // backgroundColor: navColor,
      //   height: navSize,
      //   //   transition: 'all 0.8s',
      // }}
    >
      <div className=" flex h-full w-[100vw] flex-nowrap items-center justify-between px-4 text-white md:px-24">
        <div data-aos="fade-right" className="md:text-xl">
          T&M 03.03.23
        </div>
        <div data-aos="fade-left">

        <LangSwitcher />
        </div>
      </div>
    </nav>
  );
};
