import React from 'react'

const SearchItem = ({search,setNewSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.
        preventDefault()}>
           <label htmlFor="search">Search</label> 
           <input
              id= 'search'
              type="text"
              role ='searchbox'
              placeholder='Search Items'
              value={search}
              onChange ={(e) => setNewSearch(e.target.value)}
            />
           
        </form>
  )
}

export default SearchItem
