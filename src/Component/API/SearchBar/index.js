import React, { useState } from 'react';

const SearchBar = (props) => {
   const [onInputChange, setOnInputChange] = useState('')
  

   function onInputClick(){
       console.log('Input was clicked...');
   }
   function onFormSubmit(event){
       event.preventDefault()
       //this prevents the form from submitting when hitting enter...
      props.onSubmit(onInputChange)
   }

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Image Search</label>
                    <input type= 'text' value={onInputChange} onClick={onInputClick} onChange={(e) => setOnInputChange(e.target.value)}/>
                </div>
                

            </form>
        </div>
    );
};

export default SearchBar;