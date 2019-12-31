import React from 'react';


const SearchBox = ({searchfield, onSearchChange, onSearchSubmit}) => {
	return (
<div className='center'>
<div className='form center pa4 br3 shadow-5'>
<input className='form-control'
type='search' 
placeholder='Search Buses' 
onChange={onSearchChange}
/>
</div>
</div>
		);
}

export default SearchBox;