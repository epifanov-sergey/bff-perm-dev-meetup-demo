import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class Manager {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
