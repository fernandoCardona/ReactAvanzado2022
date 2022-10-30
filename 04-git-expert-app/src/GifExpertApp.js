import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GitExpertapp = () => {

        //const categories = ['Risas','Minions','One Punch'];
        const [categories, setCategories] = useState(['Risas','Minions','One Punch']);

        const handleAdd = () => {
            //Opcion1
            //setCategories(...categories, 'Hunters');
            //Opcion2
            //setCategories(cats =>[...categories, 'Hunters']);
        }

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
   
    <ol>
        {
            categories.map( category => {
                return <li key={category}>{category}</li>
            })
        }
    </ol>    
     </>
  )
}


export default GitExpertapp;
