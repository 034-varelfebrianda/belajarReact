import './fiturLike.css'
import React from 'react';

function TombolLikes() {
    const  [likes, setlikes] = React.useState(0);
    
    function handleClick(){
        setlikes (likes+1);
    }

    return(
        <div>
            <button onClick={handleClick}>Likes({likes})</button>
        </div>
    )
}


export default TombolLikes