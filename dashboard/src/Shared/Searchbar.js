import React from 'react'
import './searchbar.css'

export default function Searchbox(){ 
    return (<>
    {/* <div class="search-box">
            <input placeholder="Search" />
    </div> */}
        <form>
            <input type="search" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>
    </>);
}