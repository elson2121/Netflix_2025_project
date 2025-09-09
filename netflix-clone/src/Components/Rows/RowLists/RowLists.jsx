import React from 'react'
import Row from '../Row/Row'
 import { requests} from '../../../utils/requests'

const RowLists = () => {
  return (
    <>
      <Row fetchurl={requests.fetchNetflixOriginals} title="NETFLIX ORGINALS"   islargerow={true} /> 
       <Row fetchurl={requests.fetchTopRated} title="Trending"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchActionMovies} title="Action"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchComedyMovies} title="Comedy"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchHorrorMovies} title="Horror"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchRomanceMovies} title="Romance"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchDocumentaries} title="Documentaries"  
       islargerow={true}/> 
       <Row fetchurl={requests.fetchpopular} title="Poppular"  
       islargerow={true}/> 
    </>
  )
}

export default RowLists
