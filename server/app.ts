import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { FootballApi } from './datasources';
import { MatchesResolver } from './resolvers';

async function main() {
  const schema = await buildSchema({
    resolvers: [MatchesResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    dataSources: () => ({
      footballApi: new FootballApi(),
    }),
    introspection: true,
  });

  apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main().catch((err: Error) => {
  console.error('error', err);
});
