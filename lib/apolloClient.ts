import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string,
	}),
	cache: new InMemoryCache(),
});

export default client;