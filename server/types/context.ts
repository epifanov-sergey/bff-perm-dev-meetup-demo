import { FootballApi } from '../datasources';

export interface IContext {
  dataSources: {
    footballApi: FootballApi;
  };
}
