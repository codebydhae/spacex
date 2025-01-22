import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
//ecomponents
import Error from './../../components/Error/Error'
import Loader from './../../components/Loader/Loader'
import MainHeader from'./../../components/MainHeader/MainHeader'

// style
import './styles.scss';

const client = new ApolloClient({
    uri: 'YOUR_GRAPHQL_API_ENDPOINT', // Replace with your API endpoint
    cache: new InMemoryCache()
  });

  const GET_COMPANY_INFO = gql`
    query GetCompanyInfo {
        company {
            name
            summary
        }
    }
`;

const Home = () => {

    const { data, loading, error } = useQuery(GET_COMPANY_INFO)
    
    if (loading) return <Loader />
    if (error) return <Error error={error}/>

    return <div className="home__container d-flex align-items-center text-center" >
        <MainHeader name={data.company.name} description={data.company.summary}/>
    </div>;
};

export default Home;