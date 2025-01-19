import '../src/styles/index.css';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Routing from './routes/index';

//https://spacex-production.up.railway.app/

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
      <Routing />
  </ApolloProvider>
);

export default App;
