import { COURSES } from '@/data/courses';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CourseFeaturedCard } from './CourseFeaturedCard';
import { CourseCard } from './CourseCard';

export function Courses() {
  const featured = COURSES.find((c) => c.featured);
  const standard = COURSES.filter((c) => !c.featured);

  return (
    <section id="courses" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="14 programs · All ages"
          heading="Pick the one that changes things."
          lead="From the alphabet at four to fluency at forty. Each course is built around a single promise — that you leave able to do something you couldn't do when you walked in."
        />

        {/* ── Mobile layout — all cards in one horizontal carousel ────── */}
        <div className="md:hidden mt-10 relative">
          <div className="course-scroll-track">
            {featured && (
              <div className="course-scroll-item">
                <CourseFeaturedCard />
              </div>
            )}
            {standard.map((course) => (
              <div key={course.id} className="course-scroll-item">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          {/* Right-edge fade — hints that the list continues */}
          <div
            className="absolute top-0 right-0 h-full w-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FFF8F0, transparent)' }}
            aria-hidden="true"
          />
        </div>

        {/* ── Desktop grid (unchanged) ─────────────────────────────────── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-min mt-14">
          {featured && <CourseFeaturedCard />}
          {standard.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
