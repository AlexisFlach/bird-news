import React from 'react';
import {FaEarlybirds} from 'react-icons/fa'

let seenStyles = { color: "green"};
let notStyles = { color: "red"};

const LikeButton = ({ isSeen, onToggleHandler }) => {
  return (
    <div
      onClick={onToggleHandler}
    >
        <FaEarlybirds style={isSeen ? seenStyles : notStyles}/></div>
  );
};

export default LikeButton;