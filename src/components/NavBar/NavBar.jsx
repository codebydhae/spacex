import React, { useRef } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

import Error from './../Error/Error'
import Loader from './../Loader/Loader'
// hooks
import useNavigation from './../../hooks/useNavigation';
// style
import './style.scss';
import TopMenu from '../TopMenu/TopMenu';
import SideMenu from '../SideMenu/SideMenu';


const client = new ApolloClient({
    uri: 'YOUR_GRAPHQL_API_ENDPOINT', // Replace with your API endpoint
    cache: new InMemoryCache()
  });

const GET_ROCKETS_NAMES = gql`
    query GetRocketNames {
        rockets(offset: 1) {
            id
            name
    }
  }
`;






const NavBar = () => {
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);

    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES)

    if (loading) return <Loader />
    if (error) return <Error error={error}/>

    // console.log(data);

    return (
        <div className="container-fluid" ref={navRef}>
            <div className="row">
            <TopMenu 
                isMenuOpen={isMenuOpen} 
                isMobileView={isMobileView} 
                toggleMenu={setIsMenuOpen}
                rockets={data.rockets}
                />
            <SideMenu 
                isMenuOpen={isMenuOpen} 
                isMobileView={isMobileView} 
                toggleMenu={setIsMenuOpen}
                rockets={data.rockets}
                />
            </div>
        </div>

    );
};

export default NavBar;