'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypeIt from 'typeit-react';
import profilePic from '../../public/IMG_0022-removebg-preview.png';

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
    <div>
      <div className='title-div'>
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
        {titleVisible && <h1 className='title'>Joe Hannis</h1>}
      </div>
      <div className='photo-div'>
        <div className='profile-photo'>
          {profileVisible && (
            <Image src={profilePic} alt='Picture of the author' priority />
          )}
        </div>
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
                speed: 10,
                lifeLike: true,
                cursor: true,
                waitUntilVisible: true,
              }}
            >
              <p>
                I love to use my brain and figure out puzzles. I find a
                collaborative team environment exciting, where everyone is
                coalescing around a problem and sharing knowledge. I love
                learning, and I want a career that is constantly evolving and
                challenging me, as I gain fulfillment from growth.
              </p>
            </TypeIt>
          </div>
        )}
      </div>
    </div>
  );
}
