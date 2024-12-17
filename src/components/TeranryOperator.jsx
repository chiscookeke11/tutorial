import { useState } from "react"

export default function Ternary(){


  
const [isGoingOut, setIsGoingOut] = useState(false)

function changeMind() {
    setIsGoingOut(prev => !prev )
}

 
    return (
        <main>
            <h1>Do i feel like going out today?</h1>
            <button 
            onClick={changeMind}
            aria-label={`current answer is ${isGoingOut ? "yes" : "no"} click to change it`}
             className="value">
                {isGoingOut ? "yes" : "no"}
                </button>
        </main>
    )
}