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
  <Section
    id="contact"
    eyebrow="Contact & Collaboration"
    title={
      <>
        Let's work <span className="text-muted-foreground">together</span>
      </>
    }
    intro="I welcome enquiries for research collaboration, academic partnership and invited talks. Please reach out through any of the channels below."
    alt
  >
    <div className="grid gap-12 lg:grid-cols-12">
      {/* Left */}
      <div className="lg:col-span-5">
        <div className="flex items-start gap-3 text-muted-foreground">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p>
            Vardhaman College of Engineering
            <br />
            Shamshabad, Hyderabad, Telangana, India
          </p>
        </div>

        <div className="mt-8 space-y-5">
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent/5">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{d.label}</span>
                  <span className="text-foreground transition-colors group-hover:text-accent">
                    {d.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-7">
        <div className="rounded-lg border border-border bg-background p-8">
          <h3 className="mb-5 font-heading text-xl font-semibold text-foreground">
            Open to Collaboration On
          </h3>
          <ul className="space-y-3">
            {collaboration.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-[0.95rem]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} Prof. JVR Ravindra</p>
      <p>All rights reserved</p>
    </div>
  </Section>
);

export default Contact;
