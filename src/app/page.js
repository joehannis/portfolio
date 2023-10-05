import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <div className='title-div'>
          <h1 className='title'>Joe Hannis</h1>
        </div>
        <div className='description'>
          <h2>Software Engineer</h2>
        </div>
        <div className='profile-photo'>
          <Image
            src='/profile.jpeg'
            alt='Picture of the author'
            width={200}
            height={300}
            priority
            layout='fixed'
          />
        </div>
      </div>

      <div className='box-container'>
        <a href='https://github.com/joehannis' className='github-box'>
          <Image
            src='/github-icon-white.png'
            alt='GitHub icon'
            width={80}
            height={80}
            layout='fixed'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/joe-hannis/'
          className='linkedin-box'
        >
          <Image
            src='/linkedin-logo-white.png'
            alt='LinkedIn icon'
            width={80}
            height={80}
            layout='fixed'
          />
        </a>
        <a
          href='https://joehannis.github.io/portfolio/'
          className='portfolio-box'
        >
          <Image
            width={101}
            height={101}
            src='/pngkit_portfolio-png_1112902.png'
            alt='Portfolio icon'
          />
        </a>
      </div>
    </>
  );
}
