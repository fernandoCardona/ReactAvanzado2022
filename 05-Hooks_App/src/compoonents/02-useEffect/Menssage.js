import React, { useState, useEffect } from 'react';

export const Menssage = () => {

    const [ coords, setCoors] = useState( { x: 0, y: 0 } );
    const { x,y } =coords;

    useEffect(() =>{
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log(coords);
            setCoors(coords);
           
        }
        window.addEventListener('mousemove', mouseMove);

        return ()=> {
            window.removeEventListener('mousemove', mouseMove);
        }
    },[])

  return (
    <div>
      <h1>Es genial !!!</h1>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  )
}

 
