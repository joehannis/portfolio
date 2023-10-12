'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypeIt from 'typeit-react';
import profilePic from '../../public/profile.png';

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
          <h3 className='my-name-is'>Hello, my name is</h3>
        </TypeIt>
        {titleVisible && <h1 className='title'>Joe Hannis</h1>}
      </div>
      {/* <div className='photo-div'>
        <div className='profile-photo'>
          {profileVisible && (
            <Image
              src={profilePic}
              width={350}
              height={350}
              alt='Picture of the author'
              priority
            />
          )}
        </div>
      </div> */}
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
      <div className='languages'>
        {descriptionVisible && (
          <TypeIt
            options={{
              speed: 5,
              strings: [
                'React',
                'Javascript',
                'Node.js',
                'Next.js',
                'HTML',
                'CSS',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'Github Actions',
                'CI/CD Pipelines',
              ],
              loop: true,
              breakLines: false,
              lifeLike: true,
              nextStringDelay: 3000,
              waitUntilVisible: true,
            }}
          ></TypeIt>
        )}
      </div>
    </div>
  );
}
