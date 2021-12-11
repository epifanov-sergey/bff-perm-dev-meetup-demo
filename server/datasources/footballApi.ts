import { RESTDataSource } from 'apollo-datasource-rest';
import data from '../data/matches.json';
import { Match, Team } from '../domain';
import { IRawData, InputAwayTeam, InputHomeTeam, TeamType } from './types';

export class FootballApi extends RESTDataSource {
  constructor() {
    super();
  }

  getMatches(): Match[] {
    return data.map(matchConverter);
  }

  getMatch(id: string): Match | null {
    const arSelectedMatch = data
      .filter(({ match_id }) => Number(id) === match_id)
      .map(matchConverter);
    return arSelectedMatch.length ? arSelectedMatch[0] : null;
  }
}

const matchConverter = ({
  match_id,
  match_date,
  kick_off,
  home_team,
  away_team,
  away_score,
  home_score,
}: IRawData): Match => ({
  id: `${match_id}`,
  date: match_date,
  kickOff: kick_off,
  homeTeam: transformTeam(home_team, 'HOME'),
  awayTeam: transformTeam(away_team, 'AWAY'),
  homeScore: home_score,
  awayScore: away_score,
});

const transformTeam = (sourceTeam: InputAwayTeam | InputHomeTeam, type: TeamType): Team => {
  return {
    id: `${
      type === 'AWAY'
        ? (sourceTeam as InputAwayTeam).away_team_id
        : (sourceTeam as InputHomeTeam).home_team_id
    }`,
    name:
      type === 'AWAY'
        ? (sourceTeam as InputAwayTeam).away_team_name
        : (sourceTeam as InputHomeTeam).home_team_name,
  };
};
