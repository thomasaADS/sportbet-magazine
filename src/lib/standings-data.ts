export interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
  form: ("W" | "D" | "L")[];
}

export const ligaatHaalStandings: TeamStanding[] = [
  { position: 1, team: "מכבי תל אביב", played: 25, won: 19, drawn: 4, lost: 2, goalsFor: 52, goalsAgainst: 14, goalDiff: 38, points: 61, form: ["W","W","W","W","W"] },
  { position: 2, team: "מכבי חיפה", played: 25, won: 16, drawn: 5, lost: 4, goalsFor: 45, goalsAgainst: 21, goalDiff: 24, points: 53, form: ["W","D","W","L","W"] },
  { position: 3, team: "הפועל באר שבע", played: 25, won: 14, drawn: 6, lost: 5, goalsFor: 38, goalsAgainst: 22, goalDiff: 16, points: 48, form: ["L","W","D","W","W"] },
  { position: 4, team: "בית\"ר ירושלים", played: 25, won: 13, drawn: 5, lost: 7, goalsFor: 36, goalsAgainst: 25, goalDiff: 11, points: 44, form: ["W","L","W","D","W"] },
  { position: 5, team: "הפועל תל אביב", played: 25, won: 11, drawn: 7, lost: 7, goalsFor: 33, goalsAgainst: 28, goalDiff: 5, points: 40, form: ["D","L","W","L","D"] },
  { position: 6, team: "מכבי נתניה", played: 25, won: 10, drawn: 7, lost: 8, goalsFor: 30, goalsAgainst: 27, goalDiff: 3, points: 37, form: ["L","W","D","W","L"] },
  { position: 7, team: "הפועל חיפה", played: 25, won: 9, drawn: 8, lost: 8, goalsFor: 28, goalsAgainst: 29, goalDiff: -1, points: 35, form: ["D","D","L","W","D"] },
  { position: 8, team: "בני סכנין", played: 25, won: 8, drawn: 6, lost: 11, goalsFor: 25, goalsAgainst: 32, goalDiff: -7, points: 30, form: ["L","W","L","L","D"] },
  { position: 9, team: "עירוני קריית שמונה", played: 25, won: 7, drawn: 7, lost: 11, goalsFor: 22, goalsAgainst: 30, goalDiff: -8, points: 28, form: ["L","D","L","D","L"] },
  { position: 10, team: "הפועל חדרה", played: 25, won: 6, drawn: 5, lost: 14, goalsFor: 20, goalsAgainst: 38, goalDiff: -18, points: 23, form: ["L","L","D","L","L"] },
];

export const premierLeagueStandings: TeamStanding[] = [
  { position: 1, team: "ארסנל", played: 28, won: 21, drawn: 5, lost: 2, goalsFor: 63, goalsAgainst: 22, goalDiff: 41, points: 68, form: ["W","W","D","W","W"] },
  { position: 2, team: "מנצ'סטר סיטי", played: 28, won: 20, drawn: 6, lost: 2, goalsFor: 65, goalsAgainst: 25, goalDiff: 40, points: 66, form: ["W","W","W","D","W"] },
  { position: 3, team: "ליברפול", played: 28, won: 19, drawn: 4, lost: 5, goalsFor: 61, goalsAgainst: 28, goalDiff: 33, points: 61, form: ["W","L","W","W","D"] },
  { position: 4, team: "אסטון וילה", played: 28, won: 16, drawn: 4, lost: 8, goalsFor: 52, goalsAgainst: 35, goalDiff: 17, points: 52, form: ["W","W","L","W","L"] },
  { position: 5, team: "טוטנהאם", played: 28, won: 15, drawn: 4, lost: 9, goalsFor: 55, goalsAgainst: 40, goalDiff: 15, points: 49, form: ["L","W","W","L","W"] },
];
