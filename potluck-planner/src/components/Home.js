import React, { useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

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
    background-color: #105773;
    color: #f2b441;
`

export default function Home () {

    useEffect(() => {
    axiosWithAuth()
    .get('/potlucks')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

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