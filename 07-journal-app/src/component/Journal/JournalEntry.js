import React from 'react'

export const JournalEntry = ( { value } ) => {
  return (
    <div className="journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{ 
                backgroundImage: 'url(https://i.blogs.es/119f29/dall-e-2-1/1366_2000.jpeg)',
                backgroundSize: 'cover'
            }}
        >
        </div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo dia
            </p>
            <p className="journal__entry-content">
                Nisi duis eu est laboris non sunt consequat laborum .
            </p>
        </div>
        <div className="journal__entry-date-box">
             <span>Monday</span>
             <h4>28</h4> 
        </div>
    </div>
  )
}
