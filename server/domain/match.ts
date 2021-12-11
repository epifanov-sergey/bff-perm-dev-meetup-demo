import { ObjectType, ID, Field } from 'type-graphql';
import { Team } from './team';
import { Stadium } from './stadium';

@ObjectType({ description: 'Информация о матче' })
export class Match {
  @Field(() => ID)
  id: string;

  @Field()
  date: string;

  @Field()
  kickOff: string;

  @Field(() => Team)
  homeTeam: Team;

  @Field(() => Team)
  awayTeam: Team;

  @Field()
  homeScore: number;

  @Field()
  awayScore: number;

  @Field()
  stadium: Stadium;
}
