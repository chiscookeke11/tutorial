import React from 'react'








 
const FavouriteThing = () => {

    const [myFavouriteThings, setMyFavouriteThings] = React.useState([])


const allFavouriteThings = ["money", "food", "video-games", "cars", "peace of mind", "God", "family", "gadgets", "awesome mansion" ]


const thingsElements  = myFavouriteThings.map(thing => 
    <li key={thing}>{allFavouriteThings}</li>

)

  return ( 

    <main style={{
        width: "50%",
        backgroundColor: "dodgerblue",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <button>
            Add item
        </button>
        <section aria-live='polite'> 
            {thingsElements}

        </section>
    </main>
  )
}

export default FavouriteThing