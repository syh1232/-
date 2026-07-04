import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ease = 'expo.out';

export function initPortfolioAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return () => {};

  const ctx = gsap.context(() => {
    gsap.set('.nav', { y: -34, opacity: 0 });
    gsap.set('.openingCurtain', { scaleY: 1, transformOrigin: 'top' });
    gsap.set('.heroTitle .titleChar', { yPercent: 116, scaleY: 0.48, opacity: 0, transformOrigin: '50% 100%' });
    gsap.set('.hero .eyebrow, .heroLead, .heroActions, .heroStats span', { y: 42, opacity: 0 });
    gsap.set('.heroGeometry span', { scaleX: 0.42, opacity: 0, transformOrigin: 'left center' });

    const opening = gsap.timeline({ defaults: { ease } });
    opening
      .to('.openingCurtain', { scaleY: 0, duration: 1.25, ease: 'power4.inOut' })
      .to('.heroGeometry span', { scaleX: 1, opacity: 1, duration: 1.35, stagger: 0.08 }, '-=0.9')
      .to('.heroTitle .titleChar', { yPercent: 0, scaleY: 1, opacity: 1, duration: 1.18, stagger: 0.11 }, '-=0.72')
      .to('.hero .eyebrow, .heroLead, .heroActions, .heroStats span', { y: 0, opacity: 1, duration: 1.05, stagger: 0.1 }, '-=0.72')
      .to('.nav', { y: 0, opacity: 1, duration: 0.95 }, '-=0.75');

    gsap.utils.toArray('.section, .contact').forEach((section) => {
      const eyebrow = section.querySelector('.eyebrow');
      const heading = section.querySelector('h2');
      const cards = section.querySelectorAll('.portraitCard, .profileText, .dataPanel, .projectOverlay, .strengthCard, .contactLinks a');
      const images = section.querySelectorAll('.portraitCard img, .projectCard > img, .projectGallery img');

      if (eyebrow) {
        gsap.from(eyebrow, {
          scrollTrigger: { trigger: section, start: 'top 72%' },
          y: 112,
          scale: 1.28,
          opacity: 0,
          duration: 1.25,
          ease,
        });
      }

      if (heading) {
        gsap.from(heading, {
          scrollTrigger: { trigger: section, start: 'top 68%' },
          y: 88,
          letterSpacing: '0.08em',
          opacity: 0,
          duration: 1.35,
          ease,
        });
      }

      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: { trigger: section, start: 'top 60%' },
          y: 76,
          opacity: 0,
          duration: 1.18,
          stagger: 0.13,
          ease,
        });
      }

      images.forEach((image) => {
        gsap.fromTo(
          image,
          { clipPath: 'inset(0 100% 0 0)', scale: 1.08 },
          {
            scrollTrigger: { trigger: image, start: 'top 78%' },
            clipPath: 'inset(0 0% 0 0)',
            scale: 1,
            duration: 1.45,
            ease: 'power4.out',
          },
        );

        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1,
          },
          yPercent: -4,
          ease: 'none',
        });
      });
    });

    gsap.utils.toArray('.projectCard').forEach((project) => {
      const overlay = project.querySelector('.projectOverlay');
      const number = project.querySelector('.projectOverlay strong');

      if (number) {
        gsap.from(number, {
          scrollTrigger: { trigger: project, start: 'top 68%' },
          x: project.classList.contains('reverse') ? -120 : 120,
          opacity: 0,
          duration: 1.35,
          ease,
        });
      }

      if (overlay) {
        gsap.from(overlay, {
          scrollTrigger: { trigger: project, start: 'top 68%' },
          '--panel-shift': '18%',
          duration: 1.5,
          ease,
        });
      }
    });
  });

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
