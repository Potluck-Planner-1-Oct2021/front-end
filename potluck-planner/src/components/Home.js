import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getHostedEvents } from './../actions/eventActions'
import moment from 'moment';

const HomeDiv = styled.div`
    width: 100%;
    height: 100%;
`
const StyledP = styled.h2`
    text-color: blue;
`
const HostedDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const AttendDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const AllP = styled.div`
    border: 1px solid orange;
    padding: 4%;
    background-color: #105773;
    color: #f2b441;
`

const Home = ({ potlucks, getHostedEvents }) => {

    useEffect(() => {
    getHostedEvents()
}, [getHostedEvents])

    return (
        <HomeDiv>
            <StyledP> Events Hosting </StyledP>
            <HostedDiv>
                {potlucks.map(pl => {
                    return <AllP key={pl.potluck_id}>
                            <p>{pl.potluck_name}</p>
                            <p>Date: {moment(pl.date).format('MM/DD/YYYY')}</p>
                            <p>Time: {moment(pl.time, "HH:mm:ss").format('h:mm a')}</p>
                            <p>{pl.location}</p>
                            </AllP>
                })}
                {/* <AllP>Event A</AllP>
                <AllP>Event B</AllP> */}
            </HostedDiv>
            <StyledP> Events Attending </StyledP>
            <AttendDiv>
                <AllP>Event A</AllP>
                <AllP>Event B</AllP>
                <AllP>Event C</AllP>
            </AttendDiv>
        </HomeDiv>
    );
}

const mapStateToProps = state => {
    return {
        potlucks: state.eventState.potlucks
    }
}

export default connect(mapStateToProps, { getHostedEvents })(Home);