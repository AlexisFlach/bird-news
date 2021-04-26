import React, {Fragment} from 'react'

import styled from 'styled-components';

import {Link} from 'react-router-dom'
import BirdImage from './BirdImage';
import LikeButton from './LikeButton'

const ContentBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 10px 5px 5px black;
background-color: rgba(1, 3, 32, 1);
border-radius: 8px;
color: white;
padding-bottom: 20px;
padding-top: 10px;
align-items:center;
margin: 20px;
text-align: center;
:hover {
    cursor: pointer;
}
`

const Title = styled.h2`
font-size: 1.2em;
font-weight: 300;
`


const BirdCard = ({id, name, imageurl,isSeen, onToggleHandler }) => {
    return (
        <Fragment>
            <ContentBox key={id}>
                <Link to={`/birds/${id}`}>
                    <BirdImage imageurl={imageurl}/>
                </Link>
                    <Title>{name}</Title>
                    <LikeButton isSeen={isSeen} onToggleHandler={onToggleHandler}/>
            </ContentBox>
        </Fragment>
    )
}

export default BirdCard