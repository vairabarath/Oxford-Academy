import {
  Globe, ClipboardCheck, Briefcase, Languages, MonitorPlay,
  MessagesSquare, ShoppingBag, PhoneCall, UserRound, Code2,
  Star, Baby, Home, MessageSquare, ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import type { Course } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, ClipboardCheck, Briefcase, Languages, MonitorPlay,
  MessagesSquare, ShoppingBag, PhoneCall, UserRound, Code2,
  Star, Baby, Home, MessageSquare,
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = ICON_MAP[course.lucideIcon] ?? Globe;

  return (
    <article className="course-card reveal">
      <div className="course-icon">
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href="#contact" className="course-link" aria-label={`Enquire about ${course.title}`}>
        Learn more
        <ArrowRight className="w-3.5 h-3.5 link-arrow" aria-hidden="true" />
      </a>
      <span className="course-orb" aria-hidden="true" />
    </article>
  );
}
