import React from 'react'

const PropsEx = (p) => {
  return (
    <>
    <div style={{border:'2px solid red',
    marginTop:'2px',
    borderRadius:'5px',
    height:'400px',
    width:'400px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    textAlign:'center'}}>
        
    <p>Id:{p.id}</p>
    <p>Name:{p.name}</p>
    <p>Age:{p.age}</p>
    <p>Place:{p.place}</p>
    </div>
    </>
  )
}

export default PropsEx