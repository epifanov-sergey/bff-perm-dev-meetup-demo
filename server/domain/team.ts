import { ObjectType, ID, Field } from 'type-graphql';
import { Manager } from './manager';

@ObjectType({ description: 'Информация о команде' })
export class Team {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  manager: Manager;
}
