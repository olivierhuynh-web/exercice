import gsap from 'gsap';

gsap.defaults({
  duration: 2,
  ease: 'expo.inOut',
});

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

export const scaleCenterImage = (centerImageRef, centerImageWrapperRef) => {
  const tl = gsap.timeline();
  tl.to(centerImageWrapperRef, {
    width: '100%',
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
