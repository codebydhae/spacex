import '../src/styles/index.scss';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Routing from './routes/index';
// import './App.scss';


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
