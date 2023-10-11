import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '../public/github-icon-white.png';
import linkedInIcon from '../public/linkedin-logo-white.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='box-container'>
        <Link className='navbar-link' href='/'>
          Home
        </Link>
        <Link className='navbar-link' href='/about'>
          About
        </Link>
        <Link className='navbar-link' href='/projects'>
          Projects
        </Link>

        <a href='https://github.com/joehannis' className='github-box'>
          <Image className='icon' src={githubIcon} alt='GitHub icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/joe-hannis/'
          className='linkedin-box'
        >
          <Image className='icon' src={linkedInIcon} alt='LinkedIn icon' />
        </a>
      </div>
    </div>
  );
}
