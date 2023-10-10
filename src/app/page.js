'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import TypeIt from 'typeit-react';

export default function Home() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  useEffect(() => {
    // Set a delay for each element to become visible
    const titleTimeout = setTimeout(() => setTitleVisible(true), 2000);
    const profileTimeout = setTimeout(() => setProfileVisible(true), 3000); // Adjust the delay as needed
    const descriptionTimeout = setTimeout(
      () => setDescriptionVisible(true),
      3000
    ); // Adjust the delay as needed
    const aboutMeTimeout = setTimeout(() => setAboutMeVisible(true), 4000); // Adjust the delay as needed

    // Clear the timeouts when the component unmounts
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(profileTimeout);
      clearTimeout(descriptionTimeout);
      clearTimeout(aboutMeTimeout);
    };
  }, []);

  return (
    <>
      <div>
        <div className='title-div'>
          <div className='box-container'>
            <a href='https://github.com/joehannis' className='github-box'>
              <Image
                src='/github-icon-white.png'
                alt='GitHub icon'
                width={150}
                height={150}
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
              />
            </a>
          </div>
          <TypeIt
            options={{
              speed: 5,
              lifeLike: true,
              waitUntilVisible: true,
              cursor: false,
            }}
          >
            <h3 className='title-name'>Hello, my name is</h3>
          </TypeIt>
        </div>
        <div className='title-div'>
          {titleVisible && <h1 className='title'>Joe Hannis</h1>}
        </div>
        <div className='profile-photo'>
          {profileVisible && (
            <Image
              src='/IMG_0022-removebg-preview.png'
              alt='Picture of the author'
              width={200}
              height={300}
              priority
            />
          )}
        </div>
        <div className='description'>
          {descriptionVisible && (
            <TypeIt
              options={{
                speed: 5,
                lifeLike: true,
                waitUntilVisible: true,
                cursor: false,
              }}
            >
              <h2>Software Engineer</h2>
            </TypeIt>
          )}
        </div>

        <div className='about-me'>
          {aboutMeVisible && (
            <div className='typing-text'>
              <TypeIt
                options={{
                  startDelay: 1500,
                  speed: 5,
                  lifeLike: true,
                  cursor: true,
                  waitUntilVisible: true,
                }}
              >
                I love to use my brain and figure out puzzles. I find a
                collaborative team environment exciting, where everyone is
                coalescing around a problem and sharing knowledge. I love
                learning, and I want a career that is constantly evolving and
                challenging me, as I gain fulfillment from growth.
              </TypeIt>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
