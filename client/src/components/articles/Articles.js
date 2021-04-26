import React from 'react'
import styled from 'styled-components'


const ArticleCard = styled.div`
display: flex;
flex-direction: column;
padding: 20px; 
max-width: 50%;
@media (max-width: 768px) {
    width: 90vw;
  }
`

const Author = styled.p`
font-size: 0.6rem;
font-weight: 700;
`

const Title = styled.h4`
font-size: 1.4rem;
`

const Desc = styled.p`
font-size: 1rem;
`

const Link = styled.a`
    color: black;
    font-size: 1.3rem;
    text-decoration: none;
`

const Img = styled.img`
height: 400px;
`

const Articles = ({article}) => {
    return (
        <ArticleCard>
            <Img src={article.urlToImage} />
            <Author>{article.source.name}</Author>
            <Title>{article.title}</Title>
            <Link href={article.url}>Go to article</Link>
        </ArticleCard>
    )
}

export default Articles
