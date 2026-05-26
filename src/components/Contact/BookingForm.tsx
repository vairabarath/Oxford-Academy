import { useState, useContext, type FormEvent, type ChangeEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { ToastContext } from '@/components/ui/Toast';
import { CONTACT } from '@/data/contact';

const TIME_SLOTS = [
  'Weekday morning (9 – 12)',
  'Weekday afternoon (12 – 4)',
  'Weekday evening (4 – 7)',
  'Saturday',
  'Flexible',
] as const;

const COURSE_OPTIONS = [
  'Not sure yet — help me decide',
  'IELTS',
  'Spoken English',
  'Spoken Hindi',
  'Placement & Training',
  'Call Centre Training',
  'Competitive Exam Coaching',
  'Home Tuition',
  'Distance Education',
  'Montessori Training',
  'Personality Development',
  'Programming Language Courses',
  'Corporate / Commercial Communication',
] as const;

interface FormState {
  name: string;
  phone: string;
  time: string;
  course: string;
}

const EMPTY: FormState = { name: '', phone: '', time: '', course: '' };

export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const showToast = useContext(ToastContext);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.course) {
      showToast('Please fill name, phone and course.', false);
      return;
    }

    const message = [
      'Hello! I would like to book a free demo at The Oxford Academy.',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      `*Course:* ${form.course}`,
      form.time ? `*Preferred time:* ${form.time}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const waURL = `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(message)}`;

    setSubmitting(true);
    showToast('Opening WhatsApp…', true);

    setTimeout(() => {
      window.open(waURL, '_blank', 'noopener,noreferrer');
      setForm(EMPTY);
      setSubmitting(false);
    }, 420);
  }

  return (
    <div className="booking-card">
      <h3
        className="font-display italic font-medium tracking-tight"
        style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', lineHeight: 1.1 }}
      >
        Book a free demo.
      </h3>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ten focused minutes with Sneka. No sales pitch &mdash; we&rsquo;ll just figure out if
        we&rsquo;re a fit.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
        {/* Name */}
        <label className="block">
          <span className="form-label">Your name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="form-field"
            placeholder="As you'd like to be called"
          />
        </label>

        {/* Phone + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="form-label">Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9 +]{7,}"
              autoComplete="tel"
              className="form-field"
              placeholder="WhatsApp preferred"
            />
          </label>
          <label className="block">
            <span className="form-label">Preferred time</span>
            <select name="time" value={form.time} onChange={handleChange} className="form-field">
              <option value="">Pick a slot</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Course */}
        <label className="block">
          <span className="form-label">Course you&rsquo;re curious about</span>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="form-field"
          >
            <option value="">Choose one (or &ldquo;not sure yet&rdquo;)</option>
            {COURSE_OPTIONS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        {/* Submit */}
        <button type="submit" className="form-submit" disabled={submitting}>
          <span>Send my demo request</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
