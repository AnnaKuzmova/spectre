import React from 'react';
import HomeSVGComponent from './HomeSVGComponent'
import './Home.css';

const Home = () => {
    return (
        <div className="container home-component">
            <section className="home-heading">
                <h2>
                    WELCOME TO SPECTRE
                </h2>
                <p>
                    Spectre is a sprint retrospective platform that helps teams organize their meetings and keep track of the changes in sprint atmosphere.
                </p>
                <p>
                    Spectre aims at facilitating the sprint retrospective organization and tracking data for meetings.
                </p>
                <a className="waves-effect waves-light btn">contact us</a>
            </section>
            <section className="svg-holder">
                <HomeSVGComponent />
            </section>
        </div>
    );
}

export default Home;