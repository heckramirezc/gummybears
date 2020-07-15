import $ from 'jquery';
import { TimelineMax } from 'gsap';

export const isDesktop = window.innerWidth > 1025;
export const isMobile = window.innerHeight < 1024;

export const newDate = new Date();

export const loaderAnimation = () => {
  const tl = new TimelineMax({ repeat: -1 });
  tl.fromTo($('.loading-first'), 0.3, { opacity: '0.3' }, { opacity: '1' })
    .fromTo($('.loading-second'), 0.3, { opacity: '0.3' }, { opacity: '1', delay: 0.3 })
    .fromTo($('.loading-third'), 0.3, { opacity: '0.3' }, { opacity: '1', delay: 0.3 })
    .fromTo($('.loading-circle'), 0.3, { opacity: '0.3' }, { opacity: '1', delay: 0.3 })
    .to($('.loading-circle, .loading-first, .loading-second, .loading-third'), 0.3, { opacity: '0.3' });
};
