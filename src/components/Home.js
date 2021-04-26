import React, {Fragment} from 'react'

import styled from 'styled-components';
import * as theme from '../style/variables'

import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width 100vw;
    height: 50vh;
    background-color: rgba(2, 3, 35, 0.9);
    z-index: 100;
`

const BackgroundImg = styled.div`
    position: absolute;
    top: 10vh;
    right: 10vw;
    background-image: url('../assets/images/${theme.BACKGROUNDIMAGE}');
    object-fit: cover;
    height: 8vh;
    width: 80vw;
    z-index: 100000;
    @media (max-width: 768px) {
        width: 90vw;
      }
    `;

const Content = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 75vh;
    left: 50%;
    bottom: -160px;
    z-index:1000;
    transform: translate(-50%, -50%);
`

const Title = styled.h1`
    font-size: 7em;
    font-weight:300;
    color: ${theme.ORANGE};
    margin-bottom: 10px;
    @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  text-align: center;
  background: transparent;
  color: ${theme.ORANGE};
  border: 2px solid ${theme.ORANGE};;
  :hover {
    cursor: pointer;
}
`
const Home = () => {

    return (
        <Fragment>
            <Wrapper>
            <Overlay />
                <Content>
                    <>
                <Title>Bird News</Title>
                <Link to='/birds'>
                <Button>Start Searching</Button>
                </Link>
                </>
            
                </Content>
                <BackgroundImg />
            </Wrapper>
        </Fragment>
    )
}

export default Home
