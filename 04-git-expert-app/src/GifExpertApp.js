import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GitExpertapp = () => {

        //const categories = ['Risas','Minions','One Punch'];
        const [categories, setCategories] = useState(['One Punch']);

         

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
   
    <ol>
        {
            categories.map( category =>  
              <GifGrid 
                key = { category } 
                category = { category }
              />
            )
        }
    </ol>    
     </>
  )
}


export default GitExpertapp;
