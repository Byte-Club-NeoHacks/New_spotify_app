import React from 'react'


//SIMP WORTHY DATA FUNCTIONS



import {Content,Wrapper} from './Home.styles'
const Song = ({Header, Children}) => (
    <Wrapper>
        <Content>
            <h1>{ Header }</h1>
            <h1> { Children }</h1>
        </Content>
    </Wrapper>
);

export default Song;