import Form from 'next/form'
import { SearchIcon} from 'lucide-react'
import React from 'react'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query} : {query: string}) => {
    
  return (
    <Form action="/" scroll={false}  className='search-form text-black'>
        <input
        name="query"
        defaultValue={query}
        className='search-input'
        placeholder='Search Something' />
        <div className='flex gap-2'>
         {query && <SearchFormReset/>}
            <button type='submit' className='search-btn text-white'>
                <SearchIcon/>
            </button>
        </div>
    </Form>
  )
}

export default SearchForm