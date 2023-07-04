import React from 'react'

import { useState } from 'react';
import MenuCard from './Data/MenuCard';
import MenuItems from './MenuItems';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = () => {

  const [items, setItems] = useState(MenuCard);

 //acitve class menu


  const getItem = (catItems) =>{

    const updateItems = MenuCard.filter((curtElm)=>{
      return curtElm.category === catItems ;
      
    })

    setItems(updateItems)
}

 return (
   <>
      {/* Hero Section */}
      <Hero/>

      {/* Navbar Section */}
      <Navbar getItem={getItem} setItems={setItems} />

      {/* menuItems Section */}
      <MenuItems items={items}/>

      {/* Footer Section */}
      <Footer/>

   </>
  )
}

export default Home;
