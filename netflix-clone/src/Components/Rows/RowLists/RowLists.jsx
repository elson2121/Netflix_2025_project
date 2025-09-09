import React from 'react'
import Row from '../Row/Row'
 import { requests} from '../../../utils/requests'

const RowLists = () => {
  return (
    <>

      <Row 
        fetchurl={requests.fetchNetflixOriginals} 
        title="NETFLIX ORGINALS" 
        islargerow // Add this prop to the first row
        // backgroundColor="transparent" // Add a background color to each row
      /> 
      <Row 
        fetchurl={requests.fetchTrending} 
        title="Trending Now" 
        // backgroundColor="#222"
      /> 
      <Row 
        fetchurl={requests.fetchTopRated} 
        title="Top Rated" 
        // backgroundColor="#111"
      /> 
  
      <Row fetchurl={requests.fetchNetflixOriginals} title="NETFLIX ORGINALS"   /> 
        <Row fetchurl={requests.fetchTopRated} title="Trending"  
       /> 
       <Row fetchurl={requests.fetchActionMovies} title="Action"  
    /> 
       <Row fetchurl={requests.fetchComedyMovies} title="Comedy"  
    /> 
       <Row fetchurl={requests.fetchHorrorMovies} title="Horror"  
    /> 
       <Row fetchurl={requests.fetchRomanceMovies} title="Romance"  
    /> 
       <Row fetchurl={requests.fetchDocumentaries} title="Documentaries"  
    /> 
       <Row fetchurl={requests.fetchpopular} title="Poppular"  
    />  
    </>
  )
}

export default RowLists
