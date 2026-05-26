/** Words that rotate in the Spoken English band headline */
export const ROTATING_WORDS = [
  'for students.',
  'for you.',
  'for kids.',
  'for everyone.',
  'for professionals.',
  'for parents.',
] as const;

/** Marquee strip items — duplicated (A + B) for seamless CSS loop */
export const MARQUEE_ITEMS = [
  'for students',
  'for professionals',
  'for parents',
  'for you',
  'for kids',
  'for everyone',
  // duplicate set B for the seamless translateX(-50%) loop
  'for students',
  'for professionals',
  'for parents',
  'for you',
  'for kids',
  'for everyone',
] as const;
