import { buildSchema } from 'type-graphql';
import { MatchesResolver } from '../resolvers';

export const create = () =>
  buildSchema({
    resolvers: [MatchesResolver],
  });
