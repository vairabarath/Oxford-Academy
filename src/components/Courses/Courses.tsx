import { COURSES } from '@/data/courses';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CourseFeaturedCard } from './CourseFeaturedCard';
import { CourseCard } from './CourseCard';

export function Courses() {
  const featured = COURSES.find((c) => c.featured);
  const standard = COURSES.filter((c) => !c.featured);

  return (
    <section id="courses" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="14 programs · All ages"
          heading="Pick the one that changes things."
          lead="From the alphabet at four to fluency at forty. Each course is built around a single promise — that you leave able to do something you couldn't do when you walked in."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-min mt-10 md:mt-14">
          {featured && <CourseFeaturedCard />}
          {standard.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
