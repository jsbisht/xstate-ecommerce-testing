import React from 'react';
import './Home.scss';
import Directory from '../../components/molecules/Directory';

const Home = () => {
    return (
        <div className="homepage" data-testid="home-page">
            <Directory/>   
        </div>
    )
}

export default Home;
