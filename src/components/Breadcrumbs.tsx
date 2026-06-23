import { Link } from "@tanstack/react-router";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export interface BreadcrumbSegment {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
}

export function Breadcrumbs({ segments }: BreadcrumbsProps) {
  if (segments.length === 0) return null;

  const schema = breadcrumbSchema(
    segments[segments.length - 1].href,
    segments[segments.length - 1].label,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <nav aria-label="Breadcrumbs" className="mb-4 text-sm text-slate-400">
        <ol className="flex flex-wrap items-center gap-1">
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li key={segment.href} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true">›</span>}
                {isLast ? (
                  <span className="text-slate-300" aria-current="page">
                    {segment.label}
                  </span>
                ) : (
                  <Link
                    to={segment.href}
                    className="hover:text-emerald-400 hover:underline"
                  >
                    {segment.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
