import Section from '@/components/Section';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jayanthi@ieee.org',
    href: 'mailto:jayanthi@ieee.org',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94401 14765',
    href: 'tel:+919440114765',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.jvrravindra.com',
    href: 'https://www.jvrravindra.com',
  },
];

const collaboration = [
  'Research collaboration in VLSI and emerging technologies',
  'Academic consultancy, accreditation and quality assurance',
  'Invited talks, keynotes and faculty development programmes',
  'Industry partnerships and sponsored research',
];

const Contact = () => (
  <section id="contact" className="scroll-mt-20 bg-primary px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
    <div className="mx-auto max-w-content">
      <div className="grid gap-14 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Contact & Collaboration
          </p>
          <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Let's work <span className="text-white/60">together</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            I welcome enquiries for research collaboration, academic partnership and invited
            talks. Please reach out through any of the channels below.
          </p>

          <div className="mt-8 flex items-start gap-3 text-white/70">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p>
              Vardhaman College of Engineering
              <br />
              Shamshabad, Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="space-y-5">
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.label === 'Website' ? '_blank' : undefined}
                  rel={d.label === 'Website' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 transition-colors group-hover:border-accent group-hover:bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">{d.label}</span>
                    <span className="text-white transition-colors group-hover:text-accent">
                      {d.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="mb-4 font-heading text-xl text-white">Open to Collaboration On</h3>
            <ul className="space-y-3">
              {collaboration.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Prof. JVR Ravindra</p>
        <p>All rights reserved</p>
      </div>
    </div>
  </section>
);

export default Contact;
