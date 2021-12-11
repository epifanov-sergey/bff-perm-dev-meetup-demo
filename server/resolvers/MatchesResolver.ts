import { Resolver, Query, Ctx, ID, Arg } from 'type-graphql';
import { Match } from '../domain';
import { IContext } from '../types';
@Resolver()
export class MatchesResolver {
  @Query(() => [Match], { description: 'Получить список матчей' })
  matches(@Ctx() ctx: IContext): Match[] {
    return ctx.dataSources.footballApi.getMatches();
  }

  @Query(() => Match, { description: 'Получить матч по id', nullable: true })
  match(@Arg('id') id: string, @Ctx() ctx: IContext): Match {
    return ctx.dataSources.footballApi.getMatch(id);
  }
}
