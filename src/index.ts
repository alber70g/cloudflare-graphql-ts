import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import { buildSchema, graphql, GraphQLFieldResolver } from 'graphql';

const schema = buildSchema(`
type Query {
  hello(response: String!): String
  albert: String
}
`);

interface RootResolver {
  hello: GraphQLFieldResolver<{ response: string }, any>;
  albert: GraphQLFieldResolver<never, any>;
}

const rootResolver: RootResolver = {
  hello({ response }: { response: string }) {
    return `Hello, ${response.substr(0, 1).toUpperCase() +
      response.substr(1)}!`;
  },
  albert() {
    return 'Albert';
  },
};

self.addEventListener('fetch', ((event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
}) as any);

async function handleRequest(request: Request) {
  const rawText = await request.text();
  const { query } = JSON.parse(rawText);
  if (query.length === 0) {
    return new Response(JSON.stringify('this is a graphql endpoint'), {
      status: 404,
    });
  }
  const result = await executeQuery(query);
  console.log(query);

  return new Response(JSON.stringify({ query, ...result }), {
    status: 200,
  });
}

export async function executeQuery(query: string) {
  return graphql(schema, query, rootResolver);
}
