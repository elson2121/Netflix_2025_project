import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
 
import Banner from '../../Components/Banner/Banner'
import RowLists from '../../Components/Rows/RowLists/RowLists'
// import { requests } from '../../utils/requests'
const Home = () => {
  return (
    <div className='app'>
    
     <Header/>
     <Banner/>
       <RowLists/>
     <Footer/>
    {/* <Request/> */}
    </div>
  )
}

export default Home
