import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class Stadium {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
