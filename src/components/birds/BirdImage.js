import React from 'react'
import {SimpleImg} from "react-simple-img"

const BirdImage = ({imageUrl}) => {

    return (
        <SimpleImg
        src={imageUrl}
        animationDuration="1"
        height={200}
        width="100%"
       />
    )
}

export default BirdImage
