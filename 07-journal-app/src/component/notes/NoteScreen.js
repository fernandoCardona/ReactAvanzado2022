import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
        
            <input  
              typet="text"
              placeholder="Some awesome title"
              name=" "
              className="notes__title-input"
            />
            <textarea 
                name=""
                placeholder="what happend todays..."
                className="notes__textarea"
            >

            </textarea>
            <div className="notes__image">
                <img 
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=147&q=80" 
                    alt="loque sea" 
                />
            </div>
            

        </div>
    </div>
  )
}
