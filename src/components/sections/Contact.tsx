import { Mail, Phone, Globe, MapPin, Linkedin, GraduationCap } from 'lucide-react';

const details = [
  { icon: Mail, label: 'Email', value: 'jvrravindra@gmail.com', href: 'mailto:jvrravindra@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 94401 14765', href: 'tel:+919440114765' },
  { icon: Globe, label: 'Website', value: 'www.jvrravindra.com', href: 'https://www.jvrravindra.com' },
];

const profiles = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jvr-ravindra-39b580192/' },
  { icon: GraduationCap, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=y7lU3NAAAAAJ&hl=en' },
];

const enquiries = [
  'Research collaboration and doctoral mentorship',
  'Invited lectures and faculty development',
  'Academic quality assurance and accreditation',
  'Industry–academia initiatives',
];

const Contact = () => (
  <section className="flex min-h-screen flex-col bg-card px-6 py-10 sm:px-10 lg:px-16">
    {/* Centered main content */}
    <div className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center">
      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Contact & Collaboration
        </p>
        <h1 className="font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Let's work <span className="text-muted-foreground">together</span>
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          For enquiries on research collaboration, doctoral mentorship, invited lectures, faculty
          development, quality assurance and industry–academia initiatives, reach out below.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left — contact details */}
        <div className="lg:col-span-5">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p>
              Prof. JVR Ravindra — Principal &amp; Professor of ECE
              <br />
              Vardhaman College of Engineering
              <br />
              Shamshabad, Hyderabad, Telangana, India
            </p>
          </div>

          <div className="mt-6 space-y-4">
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent/5">
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

          <div className="mt-6 flex flex-wrap gap-3">
            {profiles.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {p.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right — enquiries */}
        <div className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-background p-7">
            <h2 className="mb-5 font-heading text-xl font-semibold text-foreground">
              Enquiries Welcome For
            </h2>
            <ul className="space-y-3">
              {enquiries.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Footer pinned to the bottom of the screen */}
    <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} Prof. JVR Ravindra · All rights reserved</p>
      <a
        href="https://ravendos.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-accent"
      >
        Made with <span className="text-accent">&hearts;</span> by RavenDOS
      </a>
    </div>
  </section>
);

export default Contact;
