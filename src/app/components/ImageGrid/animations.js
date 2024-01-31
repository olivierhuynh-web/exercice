import gsap from 'gsap';

gsap.defaults({
  duration: 2,
  ease: 'expo.inOut',
});

export const introAnimation = (
  leftImagesRef,
  rightImagesRef,
  centerImageWrapperRef
) => {
  gsap.fromTo(
    [leftImagesRef, rightImagesRef, centerImageWrapperRef],
    {
      opacity: 0,
      x: 160,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.02,
      duration: 3,
      delay: 0.2,
      ease: 'expo.out',
    }
  );
};

export const setInitialStates = (centerImageRef) => {
  gsap.set(centerImageRef, { scale: 1.5 });
};

export const moveSideImages = (leftImagesRef, rightImagesRef) => {
  const tl = gsap.timeline();
  tl.to(leftImagesRef, {
    xPercent: -50,
    scale: 2,
    transformOrigin: 'center right',
  }).to(
    rightImagesRef,
    {
      xPercent: 50,
      scale: 2,
      transformOrigin: 'center left',
    },
    0
  );
  return tl;
};

export const scaleCenterImage = (centerImageWrapperRef, centerImageRef) => {
  const tl = gsap.timeline();

  tl.to(centerImageWrapperRef, {
    width: '100vw',
    height: '100vh',
  }).to(
    centerImageRef,
    {
      scale: 1,
    },
    0
  );

  return tl;
};
export const moveUpTitle = (centerImageTitleRef) => {
  const tl = gsap.timeline();
  tl.to(centerImageTitleRef, { yPercent: -100 });
  return tl;
};
