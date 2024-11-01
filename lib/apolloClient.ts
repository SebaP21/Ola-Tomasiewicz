import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string,
	}),
	cache: new InMemoryCache(),
	
});

export default client;
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from "@apollo/client/utilities/globals";

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}