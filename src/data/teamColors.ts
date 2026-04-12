export interface TeamColor {
  primary: string;
  secondary: string;
}

export const teamColors: Record<string, TeamColor> = {
  "Florida Panthers": { primary: "#041E42", secondary: "#C8102E" },
  "New York Rangers": { primary: "#0038A8", secondary: "#CE1126" },
  "Detroit Red Wings": { primary: "#CE1126", secondary: "#FFFFFF" },
  "Ottawa Senators": { primary: "#C52032", secondary: "#C2912C" },
  "Vegas Golden Knights": { primary: "#B4975A", secondary: "#333F42" },
  "Carolina Hurricanes": { primary: "#CC0000", secondary: "#000000" },
  "San Jose Sharks": { primary: "#006D75", secondary: "#000000" },
  "Philadelphia Flyers": { primary: "#F74902", secondary: "#000000" },
  "Dallas Stars": { primary: "#006847", secondary: "#8F8F8C" },
  "Nashville Predators": { primary: "#FFB81C", secondary: "#041E42" },
  "Utah Hockey Club": { primary: "#6CACE4", secondary: "#010101" },
  "Tampa Bay Lightning": { primary: "#002868", secondary: "#FFFFFF" },
  "Boston Bruins": { primary: "#FFB81C", secondary: "#000000" },
};
