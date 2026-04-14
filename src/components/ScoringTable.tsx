import { ScoringCategory } from "@/data/scoringData";

interface ScoringTableProps {
  title: string;
  data: ScoringCategory[];
  description?: string;
}

export default function ScoringTable({ title, data, description }: ScoringTableProps) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-ice-300 mb-2">{title}</h4>
      {description && (
        <p className="text-sm text-slate-400 mb-4">{description}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">
                Category
              </th>
              <th className="text-center py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">
                Abbrev
              </th>
              <th className="text-right py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.abbrev}
                className={`border-b border-white/5 ${
                  i % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <td className="py-2.5 px-4 text-slate-300">{row.category}</td>
                <td className="py-2.5 px-4 text-center text-slate-400 font-mono text-xs">
                  {row.abbrev}
                </td>
                <td
                  className={`py-2.5 px-4 text-right font-medium ${
                    row.points > 0
                      ? "text-emerald-400"
                      : row.points < 0
                      ? "text-red-400"
                      : "text-slate-400"
                  }`}
                >
                  {row.points > 0 ? "+" : ""}
                  {row.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
