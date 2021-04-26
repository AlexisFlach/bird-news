import React, {Fragment} from 'react'
import Birds from './Birds'
import Bird from './Bird'
import Navbar from '../../layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
`
const BirdPages = () => {
    return (
        <Fragment>
            <Navbar />
        <Container>
            <Route path="/birds" exact component={Birds} />
            <Route path="/birds/:id" exact component={Bird} />
        </Container>
        </Fragment>
    )
}

export default BirdPages
