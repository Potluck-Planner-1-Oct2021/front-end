import React from 'react';
import styled from 'styled-components';

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
const AllP = styled.p`
    border: 1px solid orange;
    padding: 4%;
`

export default function Home () {
    return (
        <HomeDiv>
            <StyledP> Events Hosting </StyledP>
            <HostedDiv>
                <AllP>Event A</AllP>
                <AllP>Event B</AllP>
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