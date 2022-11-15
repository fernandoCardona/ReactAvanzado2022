import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';
import { NoteScreen } from '../notes/NoteScreen';


 
export const JournalScreen = () => {

  const { active } = useSelector( state => state.notes );
   

  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>

        {
          (active)
          ? <NoteScreen/>
          : <NothingSelected />
        }
        
      </main>
         
    </div>
  )
}
