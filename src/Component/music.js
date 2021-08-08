import React from 'react'

//Hooks
import { useMusicFetch } from '../Hooks/useMusicFetch'

//Components
import Song from './Home'
import SearchBar from './SearchBar'


const Music = () => {
    const{state,lyrics,musicInfo,setSearchterm} = useMusicFetch();
    //console.log("State: "+ state)
    //console.log("Info: "+ musicInfo)
    console.log("lyrics "+ lyrics.Lyrics)
    return(
    <>
        <SearchBar setSearchTerm = {setSearchterm}/>
        <Song Header = {lyrics.Lyrics}></Song>
    </>
    )
}

export default Music