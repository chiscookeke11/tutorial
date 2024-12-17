import React, { useState } from 'react'

const StateButton = () => {


const [count, setCount] = React.useState(0)

function add() {
    setCount( prevCount => prevCount + 1 )
}
function minus() {
    if (count > 0){
        setCount(prevCount => prevCount - 1 )
    }
}
 console.log(count)
// Note: if you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will recieve the old value of state as its parameter, which you can use to determine your new value of state.




  return (
    <div style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",

    }}>
        <h1>How many times will Bob say the word "state" in this lesson</h1>
        <button style={{
            backgroundColor: "red",
            color: "#fff",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            cursor: "pointer"
        }} onClick={minus}  > -
        </button>


        <h2 className='count'>{count}</h2>


        <button style={{
            backgroundColor: "red",
            color: "#fff",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            cursor: "pointer"
        }} onClick={add} > +
        </button>
    </div>
  )
}

export default StateButton