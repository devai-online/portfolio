import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Stat grid — headline numbers                                        */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: string;
  label: string;
}

export const StatGrid = ({
  stats,
  tone = 'light',
}: {
  stats: Stat[];
  tone?: 'light' | 'dark';
}) => {
  const dark = tone === 'dark';
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-lg border md:grid-cols-4 ${
        dark ? 'border-white/10 bg-white/10' : 'border-border bg-border'
      }`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={`p-6 text-center sm:p-8 ${dark ? 'bg-primary' : 'bg-background'}`}
        >
          <p className={`font-heading text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-foreground'}`}>
            {s.value}
          </p>
          <p
            className={`mt-1 text-xs uppercase tracking-wide ${
              dark ? 'text-white/55' : 'text-muted-foreground'
            }`}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Info card grid — icon + title + description                         */
/* ------------------------------------------------------------------ */

export interface InfoCard {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export const InfoCardGrid = ({
  cards,
  columns = 3,
}: {
  cards: InfoCard[];
  columns?: 2 | 3;
}) => (
  <div
    className={`grid gap-5 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
  >
    {cards.map((card, i) => {
      const Icon = card.icon;
      return (
        <div
          key={card.title}
          className="group rounded-lg border border-border bg-background p-6 transition-colors duration-300 hover:border-accent/40"
        >
          <div className="mb-4 flex items-center gap-3">
            {Icon ? (
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-accent">
                <Icon className="h-5 w-5" />
              </span>
            ) : (
              <span className="font-heading text-lg text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
            )}
            <h3 className="font-heading text-xl text-foreground">{card.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
        </div>
      );
    })}
  </div>
);

/* ------------------------------------------------------------------ */
/* Bullet list — checkmark-style feature list                          */
/* ------------------------------------------------------------------ */

export const BulletList = ({
  items,
  columns = 1,
}: {
  items: ReactNode[];
  columns?: 1 | 2;
}) => (
  <ul className={`grid gap-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

/* ------------------------------------------------------------------ */
/* Timeline — vertical career / milestone list                         */
/* ------------------------------------------------------------------ */

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative space-y-8 border-l border-border pl-8">
    {items.map((item) => (
      <li key={item.title} className="relative">
        <span className="absolute -left-[2.15rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-accent bg-background" />
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.period}</p>
        <h3 className="mt-1 font-heading text-xl text-foreground">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------------ */
/* Tag row — pills for research areas / keywords                       */
/* ------------------------------------------------------------------ */

export const TagRow = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2.5">
    {tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-secondary-foreground"
      >
        {tag}
      </span>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Simple table — responsive, for structured records                   */
/* ------------------------------------------------------------------ */

export const SimpleTable = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) => (
  <>
    {/* Desktop / tablet: real table */}
    <div className="hidden overflow-x-auto rounded-lg border border-border sm:block">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-card">
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 leading-relaxed ${
                    j === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: stacked cards (label + value pairs) */}
    <div className="space-y-4 sm:hidden">
      {rows.map((row, i) => (
        <div key={i} className="rounded-lg border border-border bg-background p-4">
          <p className="font-heading text-base font-semibold text-foreground">{row[0]}</p>
          <dl className="mt-2 space-y-1.5">
            {row.slice(1).map((cell, j) => (
              <div key={j} className="flex gap-2 text-sm">
                <dt className="shrink-0 font-medium text-muted-foreground">
                  {headers[j + 1]}:
                </dt>
                <dd className="text-muted-foreground">{cell}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  </>
);

/* ------------------------------------------------------------------ */
/* Definition grid — label/value pairs                                 */
/* ------------------------------------------------------------------ */

export const DefGrid = ({
  items,
}: {
  items: { term: string; detail: string }[];
}) => (
  <div className="grid gap-5 sm:grid-cols-2">
    {items.map((it) => (
      <div key={it.term} className="rounded-lg border border-border bg-background p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">{it.term}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
      </div>
    ))}
  </div>
);
