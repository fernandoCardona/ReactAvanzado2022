import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.notes );
  //console.log(note);
  const [ formValues, handleInputChange, reset ] = useForm( note );

  const activeId = useRef(note.id);

  useEffect(() => {
    
    dispatch( activeNote( formValues.id, { ...formValues} ) );

  }, [ formValues ]);


  useEffect(() => {
    if ( note.id !== activeId.current ) {
      reset( note );
      activeId.current = note.id;
    }
  }, [ note, reset ]);

  const { body, title } = formValues;

  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
        
            <input  
              typet="text"
              placeholder="Some awesome title"
              name="title"
              className="notes__title-input"
              value={ title }
              onChange={ handleInputChange }
            />
            <textarea 
                name="body"
                placeholder="what happend todays..."
                className="notes__textarea"
                value={ body }
                onChange={ handleInputChange }
            >

            </textarea>
            {
              ( note.url ) &&
                (
                  <div className="notes__image">
                  <img 
                      src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=147&q=80" 
                      alt="loque sea" 
                  />
                  </div>
                )
            }
            
            

        </div>
    </div>
  )
}
