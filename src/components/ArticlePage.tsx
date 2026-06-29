import { Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { type ArticleContent } from "@/lib/bridger-content";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export function ArticlePage({
  article,
  path,
  label,
}: {
  article: ArticleContent;
  path: string;
  label: string;
}) {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(path, label), faqSchema(article.faq)]} />
      <Breadcrumbs segments={[{ label: "Home", href: "/" }, { label, href: path }]} />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">{article.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black text-white md:text-5xl">{article.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{article.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.roblox.com/games/99449877692519/bridger-WESTERN"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-emerald-500 px-4 py-2 font-black text-slate-950 hover:bg-emerald-400 min-h-[44px]"
          >
            Play on Roblox
          </a>
          <Link
            to="/tier-list"
            className="rounded-md border border-white/15 px-4 py-2 font-black text-white hover:bg-white/8 min-h-[44px]"
          >
            View Stand Tier List
          </Link>
        </div>
      </section>

      <Section title="Overview">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-lg border border-white/10 bg-slate-900/50 p-6">
            {article.intro.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-300">{paragraph}</p>
            ))}
          </div>
          <div className="rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-6">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Source file</div>
            <div className="mt-3 break-words text-lg font-black text-white">{article.source}</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Content adapted from the local Bridger Western markdown vault and rewritten into this site format.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Core Route">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {article.sections.map((section) => (
            <InfoCard key={section.title} title={section.title}>
              <p>{section.body}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      {article.table ? (
        <Section title="Quick Reference">
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-sm">
              <thead className="bg-white/[0.04] text-left text-slate-300">
                <tr>
                  {article.table.columns.map((column) => (
                    <th key={column} className="px-4 py-3">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {article.table.rows.map((row, index) => (
                  <tr key={index} className="text-slate-300">
                    {article.table!.columns.map((column, columnIndex) => (
                      <td key={column} className={columnIndex === 0 ? "px-4 py-3 font-black text-white" : "px-4 py-3"}>
                        {row[column]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      <Section title="Tips">
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {article.tips.map((tip) => (
            <li key={tip} className="rounded-lg border border-amber-400/20 bg-amber-950/15 p-4 text-sm leading-6 text-slate-300">
              {tip}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {article.faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </>
  );
}
