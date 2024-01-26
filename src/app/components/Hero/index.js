'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';

import { titleAnimation, textAnimation, fadeInOverlay } from './animations';

const Hero = () => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    titleAnimation(titleRef.current);
    textAnimation(textRef.current);
    fadeInOverlay(overlayRef.current);
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay} ref={overlayRef}></div>
      <Image
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority
        fill
        className={styles.hero__image}
        src='/images/practice_3.jpg'
        alt=''
      />
      <div className={styles.hero__content}>
        <div className={styles.hero__titleWrapper}>
          <h1 className={styles.hero__title} ref={titleRef}>
            Re:Active
          </h1>
        </div>
        <p className={styles.hero__text}>
          <span>
            <span ref={(el) => textRef.current.push(el)}>
              Introducing Re:Active: a technical women&apos;s workout set
              blending
            </span>
          </span>
          <span>
            <span ref={(el) => textRef.current.push(el)}>
              style and performance.Elevate your fitness with confidence and
            </span>
          </span>
          <span>
            <span ref={(el) => textRef.current.push(el)}>
              grace. Stay cool and dry with moisture-wicking fabric. Move freely
            </span>
          </span>
          <span>
            <span ref={(el) => textRef.current.push(el)}>
              with four-way stretch and a flattering high-waisted design.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
