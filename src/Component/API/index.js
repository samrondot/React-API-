import axios from 'axios';
import React, { useState } from 'react';
import ImageList from '../ImageList';
import SearchBar from './SearchBar';

const API = () => {
    const [images, setImages] = useState([])
    async function onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query : term },
            headers : {
            Authorization: 'Client-ID s7bNYF4by6W9Ek4Vlf3ISbMlb_xF172rheR9fwNn-84'
        }
        });
        setImages(response.data.results)
    }
    
    return (
        <>
        <div className='ui container' style={{marginTop : '10px'}}>
        <SearchBar onSubmit = {onSearchSubmit}/>
        <ImageList images = {images}/>
        </div>
        </>
        
    )

    }
export default API