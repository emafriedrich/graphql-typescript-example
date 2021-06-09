import { ApolloServer, gql } from 'apollo-server';
import { getCategories, mainCategories } from './db';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Category {
    id: ID
    name: String
    views: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    categories: [Category]
    mainCategories: [Category]
  }
`;

const resolvers = {
  Query: {
    categories: () => getCategories(),
    mainCategories: () => mainCategories()
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server grahpql ready at ${url}`);
});