export interface ScoringCategory {
  group: string;
  category: string;
  abbrev: string;
  points: number;
}

export const skaterScoring: ScoringCategory[] = [
  { group: "Skt", category: "Goals", abbrev: "G", points: 3.5 },
  { group: "Skt", category: "Assists", abbrev: "A", points: 2 },
  { group: "Skt", category: "Points", abbrev: "Pt", points: 0.5 },
  { group: "Skt", category: "Power Play Points", abbrev: "PPP", points: 1 },
  { group: "Skt", category: "Short-Handed Points", abbrev: "SHP", points: 2 },
  { group: "Skt", category: "Hat Tricks", abbrev: "HT", points: 5 },
  { group: "Skt", category: "Shots on Goal", abbrev: "SOG", points: 0.25 },
  { group: "Skt", category: "Hits", abbrev: "Hit", points: 0.25 },
  { group: "Skt", category: "Blocks", abbrev: "Blk", points: 0.25 },
  { group: "Skt", category: "Takeaways", abbrev: "Tk", points: 0.25 },
  { group: "Skt", category: "Giveaways", abbrev: "Gv", points: -0.25 },
  { group: "Skt", category: "Penalty Minutes", abbrev: "PIM", points: -0.125 },
];

export const goalieScoring: ScoringCategory[] = [
  { group: "Goal", category: "Saves", abbrev: "SV", points: 0.5 },
  { group: "Goal", category: "Goals Against", abbrev: "GA", points: -3.5 },
  { group: "Goal", category: "Shutouts", abbrev: "SHO", points: 8 },
];

export const defensemanTweaks: ScoringCategory[] = [
  { group: "Skt", category: "Goals", abbrev: "G", points: 3.75 },
  { group: "Skt", category: "Assists", abbrev: "A", points: 2.25 },
  { group: "Skt", category: "Blocks", abbrev: "Blk", points: 0.35 },
];

export const playoffBonuses = [
  { place: "1st", bonus: 120, note: "+ cash prize" },
  { place: "2nd", bonus: 120, note: "" },
  { place: "3rd", bonus: 90, note: "" },
  { place: "4th", bonus: 60, note: "" },
  { place: "5th", bonus: 30, note: "" },
  { place: "6th", bonus: 0, note: "" },
];

export const prizeBreakdown = [
  { prize: "1st Place Regular Season", amount: "$20" },
  { prize: "1st Place Playoffs", amount: "$130" },
  { prize: "2nd Place Playoffs", amount: "$70" },
  { prize: "3rd Place Playoffs", amount: "$20" },
];
