import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState, useRef } from 'react';

const regions = ['Greece & EU', 'Middle East', 'Egypt'];

const industries = [
  'Automotive Parts',
  'Metal Fabrication',
  'Food & Beverage',
  'Plastics & Packaging',
  'Electronics',
  'Textiles',
  'Other',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function CTA() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [formState, setFormState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      // Formspree endpoint — replace with actual endpoint when set up
      const res = await fetch('https://formspree.io/f/efikton-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormState('success');
        formRef.current?.reset();
      } else {
        // Fallback: open mailto with pre-filled subject
        const name = payload['name'] as string;
        const company = payload['company'] as string;
        const email = payload['email'] as string;
        const industry = payload['industry'] as string;
        const subject = encodeURIComponent(`Demo Request — ${company}`);
        const body = encodeURIComponent(
          `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nIndustry: ${industry}`
        );
        window.location.href = `mailto:hello@efikton.com?subject=${subject}&body=${body}`;
        setFormState('success');
      }
    } catch {
      // Network error — fall back gracefully to mailto
      const name = (data.get('name') as string) || '';
      const company = (data.get('company') as string) || '';
      const subject = encodeURIComponent(`Demo Request — ${company}`);
      const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}`);
      window.location.href = `mailto:hello@efikton.com?subject=${subject}&body=${body}`;
      setFormState('success');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(232,228,223,0.12)',
    color: '#E8E4DF',
    padding: '14px 16px',
    fontSize: '15px',
    lineHeight: 1.5,
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.15s ease, background-color 0.15s ease',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#8B8680',
    marginBottom: '8px',
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#0A1628', scrollMarginTop: '64px' }}
      aria-labelledby="cta-heading"
    >
      <div
        ref={ref}
        className={`w-full px-6 lg:px-10 animate-reveal${visible ? ' is-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '128px', paddingBottom: '128px' }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C17F3E' }} aria-hidden="true" />
          <span style={{ color: '#C17F3E', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Ready to make the shift?
          </span>
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
          style={{
            color: '#E8E4DF',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            maxWidth: '700px',
            marginBottom: '20px',
          }}
        >
          Stop firefighting.{' '}
          <span style={{ color: '#C17F3E' }}>Start running the plant.</span>
        </h2>
        <p
          style={{
            color: '#8B8680',
            fontSize: '1.0625rem',
            lineHeight: 1.75,
            maxWidth: '480px',
            marginBottom: '64px',
          }}
        >
          Tell us about your operation. We'll show you exactly where Efikton applies — your factory,
          your numbers, your complexity.
        </p>

        {/* Two-column: form + proof */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '64px', alignItems: 'start' }}
        >
          {/* Form */}
          <div>
            {formState === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: '48px 32px',
                  border: '1px solid rgba(193,127,62,0.25)',
                  backgroundColor: 'rgba(193,127,62,0.05)',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2
                  style={{ color: '#C17F3E', margin: '0 auto 16px', width: '40px', height: '40px' }}
                  aria-hidden="true"
                />
                <p style={{ color: '#E8E4DF', fontWeight: 700, fontSize: '1.125rem', marginBottom: '8px' }}>
                  We'll be in touch shortly.
                </p>
                <p style={{ color: '#8B8680', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  Expect a response within 1 business day. For urgent inquiries, reach us at{' '}
                  <a
                    href="mailto:hello@efikton.com"
                    style={{ color: '#C17F3E', textDecoration: 'none' }}
                  >
                    hello@efikton.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                aria-label="Book a demo"
                noValidate
              >
                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: '20px', marginBottom: '20px' }}
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="cta-name" style={labelStyle}>
                      Name
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(193,127,62,0.5)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232,228,223,0.12)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="cta-company" style={labelStyle}>
                      Company
                    </label>
                    <input
                      id="cta-company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Factory / company name"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(193,127,62,0.5)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232,228,223,0.12)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="cta-email" style={labelStyle}>
                    Work email
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(193,127,62,0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232,228,223,0.12)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                  />
                </div>

                {/* Industry */}
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="cta-industry" style={labelStyle}>
                    Industry
                  </label>
                  <select
                    id="cta-industry"
                    name="industry"
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    defaultValue=""
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(193,127,62,0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232,228,223,0.12)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    <option value="" disabled style={{ backgroundColor: '#0A1628' }}>
                      Select your industry
                    </option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind} style={{ backgroundColor: '#0A1628' }}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* What's your biggest challenge */}
                <div style={{ marginBottom: '28px' }}>
                  <label htmlFor="cta-challenge" style={labelStyle}>
                    Biggest challenge{' '}
                    <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, opacity: 0.6 }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="cta-challenge"
                    name="challenge"
                    rows={3}
                    placeholder="e.g. Inventory accuracy, hitting delivery dates, knowing true costs…"
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(193,127,62,0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232,228,223,0.12)';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  style={{
                    backgroundColor: formState === 'submitting' ? '#8B6432' : '#C17F3E',
                    color: '#ffffff',
                    padding: '16px 36px',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    minHeight: '52px',
                    border: 'none',
                    cursor: formState === 'submitting' ? 'wait' : 'pointer',
                    transition: 'background-color 0.15s ease',
                    borderRadius: '2px',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== 'submitting')
                      e.currentTarget.style.backgroundColor = '#D4A574';
                  }}
                  onMouseLeave={(e) => {
                    if (formState !== 'submitting')
                      e.currentTarget.style.backgroundColor = '#C17F3E';
                  }}
                >
                  {formState === 'submitting' ? (
                    'Sending…'
                  ) : (
                    <>
                      Book a Demo
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>

                <p style={{ color: '#8B8680', fontSize: '12px', marginTop: '16px', lineHeight: 1.6 }}>
                  No spam. No sales pressure. Just a focused conversation about your operation.
                </p>
              </form>
            )}
          </div>

          {/* Right: proof + regions */}
          <div>
            {/* What to expect */}
            <div style={{ marginBottom: '48px' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: '#8B8680',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  fontWeight: 600,
                }}
              >
                What happens next
              </p>
              {[
                { step: '01', text: 'We review your operation details (24h)' },
                { step: '02', text: 'A 30-min focused call — your context, your numbers' },
                { step: '03', text: 'We show you where Efikton wins first in your factory' },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  className="flex gap-4"
                  style={{ marginBottom: '20px', alignItems: 'flex-start' }}
                >
                  <span
                    style={{
                      color: '#C17F3E',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      minWidth: '24px',
                      paddingTop: '2px',
                    }}
                  >
                    {step}
                  </span>
                  <p style={{ color: '#E8E4DF', fontSize: '15px', lineHeight: 1.6, opacity: 0.75 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{ height: '1px', backgroundColor: 'rgba(232,228,223,0.08)', marginBottom: '40px' }}
              aria-hidden="true"
            />

            {/* Direct contact */}
            <div style={{ marginBottom: '40px' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: '#8B8680',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontWeight: 600,
                }}
              >
                Prefer email?
              </p>
              <a
                href="mailto:hello@efikton.com"
                style={{
                  color: '#C17F3E',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                hello@efikton.com
              </a>
            </div>

            {/* Market regions */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  color: '#8B8680',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontWeight: 600,
                }}
              >
                Serving
              </p>
              {regions.map((region) => (
                <div
                  key={region}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#E8E4DF',
                    opacity: 0.45,
                    marginBottom: '8px',
                  }}
                >
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
