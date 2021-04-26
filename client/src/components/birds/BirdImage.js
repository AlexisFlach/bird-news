import React from 'react'
import {SimpleImg} from "react-simple-img"

const BirdImage = ({imageurl}) => {

    return (
        <SimpleImg
        src={imageurl}
        animationDuration="1"
        height={200}
        width="100%"
       />
    )
}

export default BirdImage
