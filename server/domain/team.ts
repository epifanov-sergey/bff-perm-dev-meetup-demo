import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType({ description: 'Информация о команде' })
export class Team {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
