import React from 'react';
import Header from './header';
import FAQContainer from './styles/faqStyle';

const FAQ = props => {
    return (
        <>
            <Header history={props.history} />
            <FAQContainer>
                <h2>Frequently Asked Questions</h2>
                <p className='question'>What is LAN?</p>
                <p className='answer'>LAN or Lambda Alumni Network is a unified, private community for Lambda school alumni to connect, advance their careers, and give back.</p>
                <p className='question'>Why LAN?</p>
                <p className='answer'>LAN will provide communication on important factors for alumni in endorsement and outside of Lambda School, such as: forums, job opportunities, interview prep,
                events(hackathons, conferences, speaking opportunities etc.), and Personal finance resources</p>
                <p className='question'>Who built LAN?</p>
                <p className='answer'><a href='https://github.com/orgs/Lambda-School-Labs/teams/labs-31-lambda-alumni-network-b' target='_blank' rel='noopener noreferrer'>Labs31 LAN B team</a></p>
                <p className='question'>What tech stack are you using?</p>
                <p className='answer'>React and styled-components on the front end and Express and Postgres on the back end.</p>
            </FAQContainer>
        </>
    );
};

export default FAQ;