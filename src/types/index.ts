export interface Course {
  id: string;
  lucideIcon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarInitial: string;
  avatarGradient: string;
}

export interface WhyCard {
  num: string;
  heading: string;
  body: string;
}

export interface ContactData {
  phone1: string;
  phone1Display: string;
  phone2: string;
  phone2Display: string;
  waNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  hoursWeekday: string;
  hoursSunday: string;
  instagramUrl: string;
  facebookUrl: string;
}
