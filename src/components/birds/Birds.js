import React, {Fragment, useState, useEffect, useReducer} from 'react'
import axios from 'axios'


import SearchBar from './SearchBar'
import BirdCard from './BirdCard'

import {FaEarlybirds} from 'react-icons/fa'

import styled from 'styled-components';

import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_SUCCESS,
  PUT_FAILURE
} from '../../actions/';


import reducer, { REQUEST_STATUS } from '../../reducers/'

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
`

const IconInfo = styled.div`
text-align: center;
`

const Birds = () => {

  const onToggleHandler = async(birdData) => {
    try {
      const toggledBirdData = {
        ...birdData,
        isSeen: !birdData.isSeen
      }
      await axios.put(
        `http://localhost:4000/birds/${birdData.id}`,
        toggledBirdData,
      );
      dispatch({
        type: PUT_SUCCESS,
        record: toggledBirdData
      })
    } catch (e) {
      dispatch({
        type: PUT_FAILURE,
        error: e,
      });
    }
  }

const [searchTerm, setSearchTerm] = useState("")

    const [{records: birds, status}, dispatch] = useReducer(reducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null
  })
 
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:4000/birds/');
            dispatch({
              records: response.data,
              type: GET_ALL_SUCCESS
            });
          
          } catch (e) {
            dispatch({
              status: REQUEST_STATUS.ERROR,
              type: GET_ALL_FAILURE
            })
            // setError(e)
          }
        };
        fetchData();
      }, []);

      const success = status === REQUEST_STATUS.SUCCESS
      const isLoading = status === REQUEST_STATUS.LOADING
      const hasErrored = status === REQUEST_STATUS.ERROR

    return (
        <Fragment>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <IconInfo>
            <h3>Press the <FaEarlybirds/> if you know withing you that you have seen that bird!</h3>    
            </IconInfo> 
            {isLoading && <div>Loading...</div>}
            {success && (
        <Grid>
            {birds.filter((rec)=> {
                const targetTerm = `${rec.name}`.toLowerCase();
                return searchTerm.length === 0 ? true : targetTerm.includes(searchTerm.toLowerCase())
            })
            .map((bird) => <BirdCard key={bird.id} {...bird}
            onToggleHandler={() => onToggleHandler(bird)}/>)}
        </Grid>
        )}
        </Fragment>
    )
}

export default Birds
