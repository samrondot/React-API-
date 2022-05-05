import React, { Component } from 'react';

const ImageCard = (props) => {
    console.log(props.image.height);

    
    return (    
        <div>
            <img 
                alt={props.image.description}
                src = {props.image.urls.regular}
           
                />
        </div>
    );
};

export default ImageCard;