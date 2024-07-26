import React from 'react'
import QuiltedImageList from '../QuiltedImageList/QuiltedImageList'

const Session = () => {
  return (
    <div style={{ paddingBottom: '6rem', paddingTop: '6rem',}}>
      <div style={{
        textAlign: 'center',
        margin: '0 auto',
        color: '#006838',
        fontFamily: "'Fira Sans', sans-serif",
        fontWeight: 'bold',
        fontSize: '25px',
        letterSpacing: '.05em'
      }}>
        <h1>Glimpses of sessions conducted by Jawan Pakistan</h1>
      </div>
      
      <QuiltedImageList/>
    </div>
  )
}

export default Session
