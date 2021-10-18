import React from 'react';
import styled from 'styled-components';

const homeDiv = styled.div`
    width: 100%;
    height: 100%;
`
const styledP = styled.p`
    text-color: blue;
`
const hostedDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const attendDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export default function Home () {
    return (
        <homeDiv>
            <hostedDiv>
                <li>Event A</li>
                <li>Event B</li>
            </hostedDiv>
            <attendDiv>
                <li>Event A</li>
                <li>Event B</li>
            </attendDiv>
            <styledP> sample text </styledP>
        </homeDiv>
    );
}