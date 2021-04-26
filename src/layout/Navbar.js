import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    position: static;
    top: 0;
    left: 0;
    height: 8vh;
    padding: 10px;
    background-color: rgba(2, 3, 35, 0.9);
    margin-bottom: 10vh;
`

const Logo = styled.h1`
color: white;
font-size: 2rem;
font-weight: 100;
`

const Navbar = () => {
    return (
        <Header>
           <Logo>Bird News</Logo> 
        </Header>
    )
}

export default Navbar
