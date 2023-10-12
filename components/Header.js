import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '../public/github-icon-white.png';
import linkedInIcon from '../public/linkedin-logo-white.png';

export default function Header() {
  return (
    <div className='header'>
      <Link className='navbar-link' href='/'>
        Home
      </Link>
      <Link className='navbar-link' href='/about'>
        About
      </Link>
      <Link className='navbar-link' href='/projects'>
        Projects
      </Link>

      <a href='https://github.com/joehannis'>
        <div className='icon'>
          <Image src={githubIcon} alt='GitHub icon' width={40} height={40} />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/joe-hannis/'>
        <div className='icon'>
          <Image
            src={linkedInIcon}
            alt='LinkedIn icon'
            width={40}
            height={40}
          />
        </div>
      </a>
    </div>
  );
}
