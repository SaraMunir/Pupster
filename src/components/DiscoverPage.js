import React from 'react';
function DiscoverPage(){

    const ThumbsUp= {
        color: "white", 
        background: "green",
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        padding: '10px'
    }
    return (
        <div className="container ">
            something somthine
            <img src="https://placedog.net/500" class=" img-thumbnail rounded mx-auto d-block" alt="..."></img>
            <div style={ThumbsUp}>
                <i class="fas fa-thumbs-up"></i>
            </div>
        </div>
    )
}
export default DiscoverPage;