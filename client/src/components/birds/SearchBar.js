import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
height: 200px;
widht: 100%;
justify-content: center;
align-items: center;
`

const Input = styled.input.attrs(props => ({
    type: 'text',
    size: props.small ? 5 : undefined,
  }))`
    border-radius: 3px;
    border: 1px solid #fc8609;
    display: block;
    padding: ${props => props.padding};
  
    ::placeholder {
      color: #fc8609;
    }
  `
const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <Wrapper>
            <Input padding="1em" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </Wrapper>
    )
}

export default SearchBar
