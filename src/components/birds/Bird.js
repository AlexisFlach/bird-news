import React, {useEffect, useState, useReducer} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as pallette from '../../style/variables'
import Articles from '../articles/Articles'
import {Link} from 'react-router-dom'

import {
    GET_ALL_ARTICLES_SUCCESS,  
  } from '../../actions/';
  
import reducer, { REQUEST_STATUS } from '../../reducers/'
  
  const ArticleContainer = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center; 
  
  `
  const Title = styled.h2`
  font-size: 2rem;
  color: ${pallette.MAINCOLOR};
  `

  const StyledLink = styled(
    styled(Link)`
      color: black;
      display: block;
      margin: 0.5em 0;
      margin-bottom: 3rem;
      &:hover {
        text-decoration: underline;
      }
    `,
    'active'
  )`
    color: black;
  `;

  const Bird = ({match}) => {

    const [newsParam, setNewsParam] = useState('')

    const [{records: articles}, dispatch] = useReducer(reducer, {
      status: REQUEST_STATUS.LOADING,
      records: [],
      error: null
    })
      
    useEffect(() => {
      const getArticles = async () => {
       try {
        const res = await axios.get(`http://localhost:4000/birds/${match.params.id}`);
        const birdName = res.data.name
        let baseUrl = "https://newsapi.org/v2/everything?q="
        let apiKey = process.env.REACT_APP_API_AUTH;
        let response = await axios.get(baseUrl  + birdName + '&apiKey=' + apiKey)
          dispatch({
            records: response.data.articles,
            type: GET_ALL_ARTICLES_SUCCESS
          })                
            }
            catch(e) {
                console.log(e)
            }
        }
        getArticles()
      }, []);

    return (
        <ArticleContainer>
          <Title>Featured Articles:</Title>
            {articles.map(article => {
              return  <Articles key={article.title}article={article} />
            })}
            <StyledLink to='/birds'>Make another search</StyledLink>
        </ArticleContainer>
    )
}

export default Bird
