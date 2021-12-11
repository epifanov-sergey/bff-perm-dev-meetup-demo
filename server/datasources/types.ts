export type TeamType = 'HOME' | 'AWAY';

export interface InputAwayTeam {
  away_team_id: number;
  away_team_name: string;
  away_team_gender: string;
  away_team_group: null;
  managers: Manager[];
}

export interface InputHomeTeam {
  home_team_id: number;
  home_team_name: string;
  home_team_gender: string;
  home_team_group: null;
  managers: Manager[];
}

export interface Manager {
  id: number;
  nickname: string;
}

export interface Stadium {
  id: number;
  name: string;
}

export interface RawData {
  match_id: number;
  match_date: string;
  kick_off: string;
  home_team: InputHomeTeam & { managers: Manager[] };
  away_team: InputAwayTeam & { managers: Manager[] };
  home_score: number;
  away_score: number;
  stadium: Stadium;
}
