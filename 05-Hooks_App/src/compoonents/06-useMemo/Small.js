import React from 'react'
//React.memo == importar memo memo( componente)
export const Small = React.memo ( ( {value} ) => {
    console.log('M volvi a llamar :(')
return (
    <small>
        { value}
    </small>
)
});
